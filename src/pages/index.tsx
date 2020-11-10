import React from "react";
import Header from "../components/header";
import LeftSidebar from "../components/left-sidebar";
import { getDocsTreeChildren } from "../helpers/docs";

const Home = ({ docs }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-1/2 h-full bg-white"></div>
      <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50"></div>
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-grow w-full max-w-7xl mx-auto xl:px-8">
          <div className="flex flex-col md:flex-row flex-grow">
            <LeftSidebar docs={docs} />
            <div className="flex-grow bg-white md:border-r md:border-gray-200">
              center
            </div>
          </div>
          <div className="w-64 hidden lg:block">right sidebar</div>
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const docs = getDocsTreeChildren();

  return {
    props: { docs },
  };
}
