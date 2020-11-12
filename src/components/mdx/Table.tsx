import React, { FunctionComponent } from "react";

export const Table: FunctionComponent = ({ children }) => {
  return (
    <table className="border w-full table-auto text-left">{children}</table>
  );
};

export const Thead: FunctionComponent = ({ children }) => {
  return <thead className="border-b">{children}</thead>;
};

export const Tbody: FunctionComponent = ({ children }) => {
  return <tbody className="">{children}</tbody>;
};

export const Tr: FunctionComponent = ({ children }) => {
  return <tr className="border-b border-gray-200">{children}</tr>;
};

export const Th: FunctionComponent = ({ children }) => {
  return (
    <th className="py-2 px-4 bg-gray-100 font-medium text-gray-600">
      {children}
    </th>
  );
};

export const Td: FunctionComponent = ({ children }) => {
  return <td className="py-2 px-4 font-mono text-blue-500">{children}</td>;
};
