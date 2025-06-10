import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlugs(): string[] {
    return fs
        .readdirSync(postsDirectory)
        .filter((filename) => filename.endsWith(".md"))
        .map((filename) => filename.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);
    const html = marked(content);

    return {
        slug,
        content: html,
        metadata: data as { title: string; date: string },
    };
}

export function getAllPosts() {
    return getPostSlugs().map(getPostBySlug);
}
