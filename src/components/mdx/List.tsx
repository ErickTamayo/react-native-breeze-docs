import React, { FunctionComponent } from "react";

export const List: FunctionComponent = ({ children }) => {
  return (
    <ul className="px-4 mt-4 list-disc list-inside text-gray-600">
      {children}
    </ul>
  );
};

export const ListItem: FunctionComponent = ({ children }) => {
  return <li className="mb-2">{children}</li>;
};
