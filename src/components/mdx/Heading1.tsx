import React, { FunctionComponent, PropsWithChildren } from "react";
import { paramCase } from "param-case";

const Heading1: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...rest
}) => {
  const link = typeof children === "string" ? paramCase(children) : "";

  return (
    <div className="relative">
      <div id={link} className="absolute -m-20 invisible" />
      <h1
        className="text-gray-700 hover:text-gray-900 text-3xl font-bold border-l-4 pl-2 border-blue-400 mt-12 mb-6"
        {...rest}
      >
        <a href={`#${link}`}>{children}</a>
      </h1>
    </div>
  );
};

export default Heading1;
