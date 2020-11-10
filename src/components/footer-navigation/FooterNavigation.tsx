import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Navigation } from "../../helpers/docs";

export type FooterNavigationProps = {
  navigation: Navigation;
};

const FooterNavigation: FunctionComponent<FooterNavigationProps> = ({
  navigation,
}) => {
  const { previous, next } = navigation;

  return (
    <div className="flex py-12 justify-between text-gray-600">
      <div className="flex-1 mr-2 hover:text-gray-800">
        {previous ? (
          <Link href={`/${previous.slug}`}>
            <a>
              <div className="flex items-center p-4 w-full border rounded">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-circle-left"
                  className="w-5 h-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"
                  ></path>
                </svg>
                <div className="flex flex-col ml-4">
                  <span>Previous</span>
                  <span className="text-lg">{previous.title}</span>
                </div>
              </div>
            </a>
          </Link>
        ) : null}
      </div>

      <div className="flex-1 ml-2 hover:text-gray-800">
        {next ? (
          <Link href={`/${next.slug}`}>
            <a>
              <div className="flex justify-end items-center border rounded p-4">
                <div className="flex flex-col text-right">
                  <span>Next</span>
                  <span className="text-lg">{next.title}</span>
                </div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-circle-right"
                  className="w-5 h-5 ml-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"
                  ></path>
                </svg>
              </div>
            </a>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default FooterNavigation;
