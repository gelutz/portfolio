import { env } from "@/env";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: env.NOTION_KEY,
});

export const getProjects = async () => {
  const database = await notion.databases.query({
    database_id: env.NOTION_DATABASE_ID,
  });

  const pages = database.results;
  console.log(pages);
  return pages;
};
