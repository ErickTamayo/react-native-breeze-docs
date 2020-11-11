import React, { FunctionComponent } from "react";

const InlineCode: FunctionComponent = ({ children }) => {
  return (
    <span className="font-mono bg-orange-100 text-orange-600 py-1 px-2 rounded-md">
      {children}
    </span>
  );
};

export default InlineCode;
