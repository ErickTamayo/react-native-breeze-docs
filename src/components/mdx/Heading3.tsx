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
      className="text-gray-700 hover:text-gray-900 text-xl font-bold mt-6 mb-2"
      {...rest}
    >
      <a href={`#${link}`}>{children}</a>
    </h2>
  );
};

export default Heading1;
