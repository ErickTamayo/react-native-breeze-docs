import React, { FunctionComponent } from "react";
import { TableOfContents } from "../../helpers/markdown";
import { paramCase } from "param-case";

export type RightSidebarProps = {
  toc: TableOfContents;
};

const RightSidebar: FunctionComponent<RightSidebarProps> = ({ toc }) => {
  return (
    <div className="w-64 hidden lg:block p-4">
      <ul className="text-gray-500">
        {toc
          .filter(({ type }) => ["h1", "h2"].includes(type))
          .map(({ heading, type }) => (
            <a key={heading} href={`#${paramCase(heading)}`}>
              <li className={`text-sm pt-1 ${type === "h2" ? "pl-4" : ""}`}>
                {heading}
              </li>
            </a>
          ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
