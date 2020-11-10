import React, { FunctionComponent } from "react";
import Link from "next/link";
import { MarkdownDirectoryTree } from "../../helpers/docs";

export type DocumentProps = {
  document: MarkdownDirectoryTree;
};

const Document: FunctionComponent<DocumentProps> = ({ document }) => {
  const { title, slug } = document;

  return (
    <Link href={`/${slug}`}>
      <a className="group w-full flex items-center pl-7 pr-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-white transition ease-in-out duration-150">
        <span className="truncate">{title}</span>
      </a>
    </Link>
  );
};

export default Document;
