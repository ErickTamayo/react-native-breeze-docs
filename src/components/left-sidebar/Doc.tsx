import React, { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MarkdownDirectoryTree } from "../../helpers/docs";

export type DocumentProps = {
  document: MarkdownDirectoryTree;
};

const Document: FunctionComponent<DocumentProps> = ({ document }) => {
  const { title, slug } = document;
  const { asPath } = useRouter();
  const isActive = asPath === `/${slug}`;

  return (
    <Link href={`/${slug}`} prefetch>
      <a
        suppressHydrationWarning
        className={`px-4 w-full flex items-center py-1 text-sm leading-5 font-medium  rounded-md hover:text-gray-900 focus:outline-none transition ease-in-out duration-150 ${
          isActive ? "bg-blue-100 text-blue-600" : "text-gray-500"
        }`}
      >
        <span className="truncate">{title}</span>
      </a>
    </Link>
  );
};

export default Document;
