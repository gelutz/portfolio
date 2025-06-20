import fs from "fs";
import path from "path";
import { markdownit } from "./markdown-it";

const projectsDirectory = path.join(process.cwd(), "public/projects/details");

export function slugify(name: string): string {
    return name.split(" ").join("-").toLocaleLowerCase();
}

export function getProjectNames(): string[] {
    return fs
        .readdirSync(projectsDirectory)
        .filter((filename) => filename.endsWith(".md"))
        .map((filename) => filename.replace(/\.md$/, ""));
}

export function getProjectHTML(name: string): string {
    const fullPath = path.join(projectsDirectory, `${name}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    
    return markdownit().render(fileContents);
}
