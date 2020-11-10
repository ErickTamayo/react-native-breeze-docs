import React, { FunctionComponent, PropsWithChildren } from "react";
import { paramCase } from "param-case";

const Heading1: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...rest
}) => {
  const link = typeof children === "string" ? paramCase(children) : "";

  return (
    <h2
      id={link}
      className="text-gray-700 hover:text-gray-900 text-2xl font-bold mt-6 border-l-4 pl-2 border-blue-300 mb-4"
      {...rest}
    >
      <a href={`#${link}`}>{children}</a>
    </h2>
  );
};

export default Heading1;
