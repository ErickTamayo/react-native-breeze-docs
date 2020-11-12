import React, { FunctionComponent } from "react";

const CodeBlockHeader: FunctionComponent = ({ children }) => {
  return (
    <div className="w-full rounded-lg border border-gray-300 px-4">
      {children}
    </div>
  );
};

export default CodeBlockHeader;
