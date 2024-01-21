import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CardCode from '../../partials/cardCode';

export default function Cli(props) {
    const npmi = 'npm install -D tailwindcss \nnpx tailwindcss init'
    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="h1 text-primary">Tailwind CLI</h1>
                <p className="dark:text-gray-500 w-2/3 text-lg text-black">
                    The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-base font-poppins dark:text-white text-black">Install Tailwind CSS</h1>
                <CardCode
                    head={'Terminal'}
                    txt={'npm install -D tailwindcss \nnpx tailwindcss init'}
                    alt={props.alert}
                    code={npmi}
                />
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-base font-poppins dark:text-white text-black">Configure your template paths</h1>
                <div className="flex flex-col bg-gray-200 text-black  dark:bg-gray-800 dark:text-white rounded-xl w-1/2 overflow-hidden">
                    <div className="flex justify-between py-2 px-4 items-center bg-gray-300 dark:bg-gray-700">
                        <h5>tailwind.config.js</h5>
                        <div className="flex gap-2 items-center">
                            <CopyToClipboard text={`/** @type {import('tailwindcss').Config} */\n module.exports = {\ncontent: ["./src/**/*.{html, js}"],\ntheme: {extend: { },\n},\nplugins: [],\n}`} onCopy={props.alert}>
                                <button >
                                    <svg class="w-5 h-5 text-gray-800 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5" />
                                    </svg>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <pre className=' py-4 px-6 '  >
                        {`/** @type {import('tailwindcss').Config} */
module.exports = {
`}
                        <span className='w-full text-primary' >{`content: ["./src/**/*.{html,js}"],`}</span>
                        {`
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                    </pre>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-base font-poppins dark:text-white text-black">Configure your template paths</h1>
                <p className="dark:text-gray-500 w-2/3 text-lg text-black">
                    Run the CLI tool to scan your template files for classes and build your CSS.
                </p>

                <CardCode
                    head={'tailwind.config.js'}
                    txt={'npx tailwindcss -i ./src/input.css -o ./src/output.css --watch'}
                    alt={props.alert}
                    code={`npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`}
                />
            </div>
            <div className="flex flex-col gap-5 mb-5">
                <h1 className="font-bold text-base font-poppins dark:text-white text-black">Start using Tailwind in your HTML</h1>
                <p className="dark:text-gray-500 w-2/3 text-lg text-black">
                    {`Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.`}
                </p>
                <div className="flex flex-col bg-gray-200 text-black  dark:bg-gray-800 dark:text-white rounded-xl w-1/2 overflow-hidden">
                    <div className="flex justify-between py-2 px-4 items-center bg-gray-300 dark:bg-gray-700">
                        <h5>tailwind.config.js</h5>
                        <div className="flex gap-2 items-center">
                            <CopyToClipboard text={props.copies} onCopy={props.alert}>
                                <button >
                                    <svg class="w-5 h-5 text-gray-800 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5" />
                                    </svg>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <pre className=' py-4 px-6 overflow-auto'  >
                        {`<!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    `}
                        <span className='w-full text-primary' >{` <link href="./output.css" rel="stylesheet">`}</span>
                        {`
  </head>
  <body>
`}
                        <span className='w-full text-primary' >{`   <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>`}</span>
                        {`
  </body>
  </html>`}
                    </pre>
                </div>
            </div>
        </>
    )
}