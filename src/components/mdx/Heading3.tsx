import React, { FunctionComponent, PropsWithChildren } from "react";
import { paramCase } from "param-case";

const Heading1: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...rest
}) => {
  const link = typeof children === "string" ? paramCase(children) : "";

  return (
    <div className="relative">
      <div id={link} className="absolute -m-16 invisible" />
      <h3
        className="text-gray-700 hover:text-gray-900 text-xl font-bold mt-6 mb-2"
        {...rest}
      >
        <a href={`#${link}`}>{children}</a>
      </h3>
    </div>
  );
};

export default Heading1;
