import React, { FunctionComponent } from "react";
import { MarkdownDirectoryTree } from "../../helpers/docs";
import Doc from "./Doc";

export type DirectoryProps = {
  directory: MarkdownDirectoryTree;
};

const Directory: FunctionComponent<DirectoryProps> = ({ directory }) => {
  const { name, children } = directory;

  return (
    <div className="px-2">
      <div className="capitalize mt-1 group w-full flex items-center pr-2 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
        {name}
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
