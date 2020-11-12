import React, { FunctionComponent } from "react";

const InlineCode: FunctionComponent = ({ children }) => {
  return <span className="font-mono text-orange-600 p-1">{children}</span>;
};

export default InlineCode;
