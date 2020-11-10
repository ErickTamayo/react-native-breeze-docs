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
  navigation: Navigation;
  children: MarkdownDirectoryTree[];
}

export const getDocsTreeChildren = () => {
  const tree = dirTree("docs", { extensions: /\.mdx?$/ });

  const traverse = (
    tree: MarkdownDirectoryTree,
    navigation: Navigation
  ): MarkdownDirectoryTree => {
    const children = (tree.children || []).map((child, index) => {
      const previousTree = tree.children[index - 1];
      const nextTree = tree.children[index + 1];

      let previous = null;
      let next = null;

      if (
        previousTree?.type === "file" &&
        tree.name !== previousTree.name.replace(/\.mdx?$/, "")
      ) {
        const { title } = getDocByPath(previousTree.path);
        const slug = previousTree.path.replace(/src\/pages\/|\.mdx?/gi, "");
        previous = { title, slug };
      }

      if (
        nextTree?.type === "file" &&
        tree.name !== nextTree.name.replace(/\.mdx?$/, "")
      ) {
        const { title } = getDocByPath(nextTree.path);
        const slug = nextTree.path.replace(/src\/pages\/|\.mdx?/gi, "");
        next = { title, slug };
      }

      const navigation = { previous, next };

      return traverse(child as MarkdownDirectoryTree, navigation);
    });

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
        navigation,
        slug,
        expanded,
        position,
        children: childrenWithoutMeta,
      };
    }

    return { ...tree, expanded, position, children: childrenWithoutMeta };
  };

  const traversed = traverse(tree as MarkdownDirectoryTree, {
    previous: null,
    next: null,
  });

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
  const tree = getDocsTreeChildren();

  let navigation = { previous: null, next: null };

  const traverse = (tree: MarkdownDirectoryTree) => {
    if (tree.slug === `docs/${slug}`) {
      navigation = tree.navigation;
    }

    tree.children.forEach((child) => traverse(child));
  };

  traverse(tree);

  return navigation;
};
