import React, { FunctionComponent } from "react";
import { MarkdownDirectoryTree } from "../../helpers/docs";
import Doc from "./Doc";

export type DirectoryProps = {
  directory: MarkdownDirectoryTree;
};

const Directory: FunctionComponent<DirectoryProps> = ({ directory }) => {
  const { title, children } = directory;

  return (
    <div className="px-2 mb-3">
      <div className="px-4 capitalize mt-1 group w-full flex items-center pr-2 py-1 leading-5 font-medium rounded-md bg-white text-gray-600">
        {title}
      </div>
      <div className="py-2">
        {children.map((doc) => {
          return doc.type === "directory" ? (
            <Directory key={doc.path} directory={doc} />
          ) : (
            <Doc key={doc.path} document={doc} />
          );
        })}
      </div>
    </div>
  );
};

export default Directory;
