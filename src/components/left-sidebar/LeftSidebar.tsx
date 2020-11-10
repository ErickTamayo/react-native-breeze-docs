import React, { FunctionComponent, useEffect, useState } from "react";
import { MarkdownDirectoryTree } from "../../helpers/docs";
import Directory from "./Directory";
import Doc from "./Doc";

export type LeftSidebarProps = {
  docs: MarkdownDirectoryTree;
};

const LeftSidebar: FunctionComponent<LeftSidebarProps> = ({ docs }) => {
  return (
    <div className="bg-white w-full md:w-64 md:border-r md:border-gray-200">
      <div className="px-4 py-8">
        {docs &&
          (docs.children || []).map((doc) => {
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

export default LeftSidebar;
