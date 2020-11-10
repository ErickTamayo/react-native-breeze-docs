import remark from "remark";
import html from "remark-html";

export const markdownToHtml = async (markdown: any) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

export type Heading = { heading: string; type: "h1" | "h2" | "h3" | "h4" };

export type TableOfContents = Heading[];

export const extractToc = (markdown: string): Heading[] => {
  const splitted = markdown.split("\n").filter(Boolean);

  const headers = splitted.reduce((acc, line) => {
    const result = /(?<heading>^#+)\s(?<text>.*)/.exec(line);

    if (result) {
      const { groups } = result;
      const { text, heading } = groups;

      const entry = { heading: text, type: `h${heading.length}` };

      return [...acc, entry];
    }

    return acc;
  }, []);

  return headers;
};
