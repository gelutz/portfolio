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

    console.log(pagesIds);

    const blocks: unknown[] = [];
    pagesIds.forEach((pageId) => {
        blocks.push(n2m.pageToMarkdown(pageId));
    });

    console.log(blocks);

    return blocks;
};
