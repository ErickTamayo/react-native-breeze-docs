import React, { FunctionComponent } from "react";
import { MarkdownDirectoryTree, Navigation } from "../../helpers/docs";
import { TableOfContents } from "../../helpers/markdown";
import FooterNavigation from "../footer-navigation";
import Header from "../header";
import LeftSidebar from "../left-sidebar";
import RightSidebar from "../right-sidebar";

export type LayoutProps = {
  docs: MarkdownDirectoryTree;
  toc: TableOfContents;
  navigation: Navigation;
};

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  docs,
  toc,
  navigation,
}) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-1/2 h-full bg-white"></div>
      <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50"></div>
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <div className="flex w-full max-w-7xl mx-auto xl:px-8 flex-grow md:pt-16">
          <div className="flex flex-col md:flex-row flex-1 flex-grow">
            <LeftSidebar docs={docs} />
            <div className="flex-1 bg-white md:border-r md:border-gray-200 px-4 py-4 lg:px-8 max-w-3xl h-full">
              {children}
              <FooterNavigation navigation={navigation} />
            </div>
          </div>
          <RightSidebar toc={toc} />
        </div>
      </div>
    </>
  );
};

export default Layout;
