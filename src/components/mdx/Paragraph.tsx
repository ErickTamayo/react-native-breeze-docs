import React, { FunctionComponent } from "react";

const Paragraph: FunctionComponent = ({ children }) => {
  return <p className="py-2 text-gray-700">{children}</p>;
};

export default Paragraph;
