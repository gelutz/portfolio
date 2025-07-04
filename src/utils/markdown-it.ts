import '@/styles/markdown-it.css';

import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
import attrs from "markdown-it-attrs";

export const markdownit = (): MarkdownIt => {
    const md = new MarkdownIt();
    md.use(attrs);

    md.set({
        highlight: (str, lang): string => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
                } catch (_) {}
            }

            return md.utils.escapeHtml(str);
        }
    });


    return md;
}