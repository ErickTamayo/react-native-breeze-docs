import fs from "fs";
import matter from "gray-matter";
import dirTree, { DirectoryTree } from "directory-tree";
import { extractToc } from "./markdown";

export const getDocByPath = (path: string): { [key: string]: any } => {
  const fileContents = fs.readFileSync(path, "utf8");
  const { data, content } = matter(fileContents);

  const fields = ["title", "expanded", "position", "content"];

  const items = fields.reduce((acc, field) => {
    if (field === "content") return { ...acc, content };
    return { ...acc, [field]: data[field] ?? null };
  }, {});

  return items;
};

export type NavigationItem = {
  title: string;
  slug: string;
};

export type Navigation = {
  previous: NavigationItem | null;
  next: NavigationItem | null;
};

export interface MarkdownDirectoryTree extends DirectoryTree {
  title: string;
  slug: string;
  expanded: boolean;
  position: number;
  content: string;
  children: MarkdownDirectoryTree[];
}

export const getDocsTreeChildren = () => {
  const tree = dirTree("docs", { extensions: /\.mdx?$/ });

  const traverse = (tree: MarkdownDirectoryTree): MarkdownDirectoryTree => {
    let children = (tree.children || []).map((child, index) => {
      return traverse(child as MarkdownDirectoryTree);
    });

    children.sort((a, b) => a.position - b.position);

    const meta = children.find(
      (child) => child.name.replace(/\.mdx?$/, "") === tree.name
    );

    const childrenWithoutMeta = children.filter(
      (child) => child.name.replace(/\.mdx?$/, "") !== tree.name
    );

    childrenWithoutMeta.sort(
      (childA, childB) => childA.position - childB.position
    );

    const { expanded = false, position = -1 } = meta
      ? getDocByPath(meta.path)
      : {};

    delete tree.size;

    if (tree.type === "file") {
      const slug = tree.path.replace(/src\/pages\/|\.mdx?/gi, "");

      return {
        ...tree,
        ...getDocByPath(tree.path),
        slug,
        children: childrenWithoutMeta,
      };
    }

    return { ...tree, expanded, position, children: childrenWithoutMeta };
  };

  const traversed = traverse(tree as MarkdownDirectoryTree);

  return traversed;
};

export const getDocsSlugs = (): string[][] => {
  const tree = getDocsTreeChildren();

  let slugs: string[] = [];

  const traverse = (tree: MarkdownDirectoryTree) => {
    if (tree.type === "file") {
      slugs.push(tree.slug);
    }

    tree.children.forEach((child) => traverse(child));
  };

  traverse(tree);

  return slugs.map((slug) => slug.replace("docs/", "").split("/"));
};

export const getTocFromSlug = (slug: string) => {
  const { content } = getDocByPath(`docs/${slug}.mdx`);
  return extractToc(content);
};

export const getNavigationFromSlug = (slug: string): Navigation => {
  const slugs = getDocsSlugs().map((s) => s.join("/"));

  let navigation: Navigation = { previous: null, next: null };

  const currentSlugIndex = slugs.findIndex((s) => s === slug);

  const previousSlug = slugs[currentSlugIndex - 1];
  const nextSlug = slugs[currentSlugIndex + 1];

  if (previousSlug) {
    const { title } = getDocByPath(`docs/${previousSlug}.mdx`);
    navigation.previous = { title, slug: `docs/${previousSlug}` };
  }

  if (nextSlug) {
    const { title } = getDocByPath(`docs/${nextSlug}.mdx`);
    navigation.next = { title, slug: `docs/${nextSlug}` };
  }

  return navigation;
};
