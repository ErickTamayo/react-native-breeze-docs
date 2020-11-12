import { FunctionComponent, PropsWithChildren, useMemo } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/vsDark";

export type CodeBlockProps = {
  simple?: boolean;
  filename?: string;
  className?: string;
  file?: string;
};

const CodeBlock: FunctionComponent<PropsWithChildren<CodeBlockProps>> = ({
  children,
  className = "",
  filename,
  simple,
}) => {
  const language = useMemo(
    () => className.replace(/language-/, "") as Language,
    [className]
  );

  return (
    <Highlight
      {...defaultProps}
      code={children as string}
      language={language}
      theme={theme as any}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <>
          {filename ? (
            <div
              className="mt-4 pl-4 py-3 rounded-t-lg text-gray-300 border-b border-gray-600"
              style={{ backgroundColor: "rgb(41, 45, 62)" }}
            >
              {filename}
            </div>
          ) : (
            <div className="mt-4" />
          )}
          <pre
            className={`mb-4 relative overflow-scroll text-wrap ${
              filename ? "rounded-b-lg" : "rounded-lg"
            } ${simple ? "py-4 px-6" : ""}`}
            style={{ ...style }}
            onScrollCapture={(e) => e.stopPropagation()}
          >
            {!simple ? (
              <div className="select-none w-10 inline-block border-r border-gray-600 mr-4 text-transparent text-right pr-2 h-6">
                0
              </div>
            ) : null}
            {tokens.map((line, i) =>
              i !== tokens.length - 1 ? (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {!simple ? (
                    <div className="select-none w-10 inline-block border-r border-gray-600 mr-4 text-gray-500 text-right pr-2">
                      {i + 1}
                    </div>
                  ) : null}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ) : null
            )}
            {!simple ? (
              <div className="select-none w-10 inline-block border-r border-gray-600 mr-4 text-transparent text-right pr-2">
                0
              </div>
            ) : null}
          </pre>
        </>
      )}
    </Highlight>
  );
};

const theme = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e",
    fontSize: "14px",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(105, 112, 152)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string"],
      style: {
        color: "rgb(195, 232, 141)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)",
      },
    },
    {
      types: ["punctuation", "selector"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#FF5572",
      },
    },
    {
      types: ["variable", "attr-name"],
      style: {
        color: "rgb(255, 203, 107)",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(255, 85, 114)",
      },
    },
    {
      types: ["tag", "punctuation"],
      style: {
        color: "#89DDFF",
      },
    },

    {
      types: ["punctuation"],
      style: {
        color: "#D9F5DD",
      },
    },
    {
      types: ["tag", "script"],
      style: {
        color: "#82AAFF",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#C792EA",
        fontStyle: "italic",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(137, 221, 255)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "rgb(221, 221, 221)",
      },
    },
  ],
};

export default CodeBlock;
