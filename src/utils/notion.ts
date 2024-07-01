import { env } from "@/env";
import { Client } from "@notionhq/client";
import { type PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

export type NotionProject = {
    id: string;
    title: string;
    tldr: string;
    coverUrl?: string;
    iconUrl?: string;
};

const notion = new Client({ auth: env.NOTION_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getProject = async (id: string) => {
    const page = (await notion.pages.retrieve({
        page_id: id,
    })) as PageObjectResponse;

    const properties = parseProperties(page);

    return properties;
};

const getIdsFromDatabase = async (language?: string) => {
    const database = await notion.databases.query({
        database_id: env.NOTION_DATABASE_ID,
        filter: {
            property: "Língua",
            select: {
                equals: language ?? "PT",
            },
        },
    });

    return database.results.map((page) => page.id);
};

export const getAllProjects = async () => {
    const ids = await getIdsFromDatabase();

    const projects = await Promise.all(ids.map(async (id) => getProject(id)));

    if (!projects) {
        throw new Error("No pages found");
    }

    return projects;
};

export const getProjectText = async (id: string) => {
    const block = await n2m.pageToMarkdown(id);
    const string = n2m.toMarkdownString(block);

    return string.parent;
};

// separa as colunas do database do notion
const parseProperties = (page: PageObjectResponse) => {
    const properties: NotionProject = {
        id: page.id,
    } as NotionProject;

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
    if (tldrProp?.type === "rich_text") {
        properties.tldr = tldrProp.rich_text[0]?.plain_text ?? "";
    }

    return properties;
};
