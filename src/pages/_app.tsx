import "../../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import { useMemo } from "react";
import {
  Anchor,
  CodeBlock,
  Heading1,
  Heading2,
  Heading3,
  InlineCode,
  Paragraph,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../components/mdx";

function MyApp({ Component, pageProps, router }) {
  const isDocsRoute = router.pathname.startsWith("/docs");

  const components = useMemo(
    () => ({
      h1: Heading1,
      h2: Heading2,
      h3: Heading3,
      p: Paragraph,
      a: Anchor,
      code: CodeBlock,
      inlineCode: InlineCode,
      table: Table,
      thead: Thead,
      tbody: Tbody,
      tr: Tr,
      td: Td,
      th: Th,
    }),
    []
  );

  if (isDocsRoute) {
    return (
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;
