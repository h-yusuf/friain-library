import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CardCode = (props) => {
    return (
        <>
            <div className="flex flex-col bg-gray-200 text-black  dark:bg-gray-800 dark:text-white rounded-xl w-1/2 overflow-hidden">
                <div className="flex justify-between py-2 px-4 items-center bg-gray-300 dark:bg-gray-700">
                    <h5> {props.head} </h5>
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
                <pre className=' py-4 px-6 overflow-auto'>
                        {props.code}
                </pre>
            </div>
        </>
    )
}

export default CardCode;