import { env } from "@/env";
import { Client } from "@notionhq/client";
import { type PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";
import { type MdStringObject } from "notion-to-md/build/types";

type NotionProject = {
    title: string;
    id: string;
    homepage: boolean;
    text: MdStringObject;
};

const notion = new Client({ auth: env.NOTION_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

// retorna um Page para cada página da database do notion
export const getNotionProjects = async () => {
    const database = await notion.databases.query({
        database_id: env.NOTION_DATABASE_ID,
    });

    const projects = await Promise.all(
        database.results.map(
            async (page) => await parseProperties(page as PageObjectResponse),
        ),
    );

    if (!projects) {
        throw new Error("No pages found");
    }

    return projects;
};

// junta todo o texto de cada página da database do notion
const parsePageText = async (id: string) => {
    const block = await n2m.pageToMarkdown(id);
    const string = n2m.toMarkdownString(block);

    return string;
};

// separa as colunas do database do notion
const parseProperties = async (page: PageObjectResponse) => {
    const properties: NotionProject = {
        id: page.id,
    } as NotionProject;

    const nameProp = page.properties.Name!;
    if (nameProp.type === "title") {
        if (!nameProp?.title[0]) {
            throw new Error("Page has no title");
        }
        properties.title = nameProp.title[0].plain_text;
    }

    const homepageProp = page.properties.Homepage!;
    if (homepageProp.type === "select") {
        properties.homepage = homepageProp?.select?.name == "Yes";
    }

    properties.text = await parsePageText(page.id);

    return properties;
};
