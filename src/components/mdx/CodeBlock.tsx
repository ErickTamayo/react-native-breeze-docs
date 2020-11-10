import { FunctionComponent, PropsWithChildren, useMemo } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";

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
      theme={theme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <>
          {filename ? (
            <div
              className="pl-4 py-3 rounded-t-lg text-gray-300 border-b border-gray-600"
              style={{ backgroundColor: "#282c34" }}
            >
              {filename}
            </div>
          ) : null}
          <pre
            className={`relative overflow-scroll text-wrap ${
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

export default CodeBlock;
