import { env } from "@/env";
import { Client } from "@notionhq/client";
import { type PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

export type NotionProject = {
    id: string;
    title: string;
    tldr: string;
    text: string;
    coverUrl?: string;
    iconUrl?: string;
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

    const textProp = page.properties.text;
    if (textProp?.type === "rich_text") {
        const stringObject = await parsePageText(page.id);
        properties.text = stringObject.paragraph ?? "";
    }

    const iconProp = page.icon;
    if (iconProp?.type == "external" && iconProp.external?.url) {
        properties.iconUrl = iconProp.external.url;
    }

    const nameProp = page.properties.Name!;
    if (nameProp.type === "title") {
        if (!nameProp?.title[0]) {
            throw new Error("Page has no title");
        }
        properties.title = nameProp.title[0].plain_text;
    }

    const tldrProp = page.properties.tldr!;
    console.log(tldrProp);
    if (tldrProp?.type === "rich_text") {
        properties.tldr = tldrProp.rich_text[0]?.plain_text ?? "";
    }

    return properties;
};
