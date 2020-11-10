import React from "react";
import dynamic from "next/dynamic";
import {
  getDocsSlugs,
  getDocsTreeChildren,
  getNavigationFromSlug,
  getTocFromSlug,
} from "../../helpers/docs";
import Layout from "../../components/layout";

const Slug = ({ filename, docs, toc, navigation }) => {
  const MDXContent = dynamic(() => import(`../../../docs/${filename}.mdx`));

  return (
    <Layout docs={docs} toc={toc} navigation={navigation}>
      <MDXContent />
    </Layout>
  );
};

export default Slug;

export async function getStaticProps({ params }) {
  const docs = getDocsTreeChildren();
  const slug = params.slug.join("/");
  const toc = getTocFromSlug(slug);
  const navigation = getNavigationFromSlug(slug);

  return {
    props: { filename: slug, docs, toc, navigation },
  };
}

export async function getStaticPaths() {
  const slugs = getDocsSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
