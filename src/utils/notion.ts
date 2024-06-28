import { env } from "@/env";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: env.NOTION_KEY,
});

export const getPages = async () => {
    const database = await notion.databases.query({
        database_id: env.NOTION_DATABASE_ID,
    });
    const pagesIds = database.results.map((page) => page.id);
    const n2m = new NotionToMarkdown({ notionClient: notion });

    if (!pagesIds) {
        throw new Error("No pages found");
    }
    const blocks = await n2m.pageToMarkdown(pagesIds[0]!);
    console.log(blocks);
    return blocks;
};
