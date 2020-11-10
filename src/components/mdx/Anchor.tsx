import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
} from "react";

const Anchor: FunctionComponent<DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>> = (props) => {
  return (
    <a
      {...props}
      className="text-blue-500 hover:text-blue-700"
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default Anchor;
