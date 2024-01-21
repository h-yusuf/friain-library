import React, { useRef, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { atelierSulphurpoolDark, atomOneDark, nightOwl, solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Test = (props) => {
  const dynamicHtml = '<h1 style="color:white;">Hello, <span style="color: blue;">React</span>!</h1>';
  const containerRef = useRef();

  useEffect(() => {
    // Menggunakan dangerouslySetInnerHTML untuk menyisipkan HTML ke dalam elemen
    containerRef.current.innerHTML = dynamicHtml;
  }, [dynamicHtml]);

  const code = '<h1 style="color:white;">Hello, \n<span style="color: blue;">React</span>\n!</h1>';
  return (
    <div class=" p-12 sm:ml-64 flex flex-col gap-6 ">
      <div ref={containerRef}>

      </div>
      <div className="flex flex-col bg-gray-200 text-black  dark:bg-gray-800 dark:text-white rounded-xl w-1/2 overflow-hidden">
        <div className="flex justify-between py-2 px-4 items-center bg-gray-300 dark:bg-gray-700">
          <h5> index.html </h5>
          <div className="flex gap-2 items-center">
            <CopyToClipboard text={props.txt} onCopy={props.alt}>
              <button>
                <svg class="w-5 h-5 text-gray-800 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5" />
                </svg>
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <pre >
          <SyntaxHighlighter
            className=' py-4 px-6 overflow-auto'
            language="javascript"
            customStyle={{ padding: "12px" }}
            style={nightOwl}
          >
            {code}
          </SyntaxHighlighter>
          {/* {props.code} */}
        </pre>
      </div>
      <ul className=" border-l gap-2 grid border-gray-600" >
        <a href='#' className="border-l -ml-px border-gray-600 hover:border-primary focus:border-l focus:border-primary text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 focus:text-gray-200">
          <span className="flex items-center w-full  ml-5  ">Introduction</span>
        </a>
        <a href='#' className="border-l -ml-px border-gray-600 hover:border-primary focus:border-l focus:border-primary text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 focus:text-gray-200">
          <span className="flex items-center w-full  ml-5  ">Quickstart</span>
        </a>
        <a href='#' className="border-l -ml-px border-gray-600 hover:border-primary focus:border-l focus:border-primary text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 focus:text-gray-200">
          <span className="flex items-center w-full  ml-5  ">Invoice</span>
        </a>
      </ul>


      <ul class="inline-flex rounded-md shadow-sm">
        <a href="#" className="border-l -ml-px border-gray-600 hover:border-primary focus:border-l focus:border-primary">
        <span className="flex items-center w-full  text-gray-900  ml-5  hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200">Invoice</span>
        </a>
        <a href="#" className="border-l -ml-px border-gray-600 hover:border-primary focus:border-l focus:border-primary">
          Profile
        </a>
        <a href="#" className="border-l -ml-px border-gray-600 hover:border-primary focus:border-l focus:border-primary">
          Profile
        </a>
        <a href="#" className="border-l -ml-px border-gray-600 hover:border-primary focus:border-l focus:border-primary">
          Profile
        </a>

      </ul>

    </div>
  );
}

export default Test;
