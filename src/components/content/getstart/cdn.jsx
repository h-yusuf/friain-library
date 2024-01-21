import React, { useRef, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CardCode from '../../partials/cardCode';

export default function Cdn(props) {
    // const dynamicHtml = '<h1 style="color:blue;"> <script src="https://cdn.tailwindcss.com"></script></h1>';
    // const containerRef = useRef();

    // useEffect(() => {
    //     // Menggunakan dangerouslySetInnerHTML untuk menyisipkan HTML ke dalam elemen
    //     containerRef.current.innerHTML = dynamicHtml;
    // }, [dynamicHtml]);

    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="h1 text-primary">Tailwind CDN</h1>
                <p className="dark:text-gray-500 w-2/3 text-lg text-black">
                    Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for development purposes only, and is not the best choice for production.                </p>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-base font-poppins dark:text-white text-black">Add the Play CDN script to your HTML</h1>
                <p className="dark:text-gray-500 w-2/3 text-lg text-black">
                    {`Add the Play CDN script tag to the <head> of your HTML file, and start using Tailwind’s utility classes to style your content.`}
                </p>
                <div className="flex flex-col bg-gray-200 text-black  dark:bg-gray-800 dark:text-white rounded-xl w-1/2 overflow-hidden">
                    <div className="flex justify-between py-2 px-4 items-center bg-gray-300 dark:bg-gray-700">
                        <h5>index.html</h5>
                        <div className="flex gap-2 items-center">
                            <CopyToClipboard
                                txt={`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
   <h1 class="text-3xl font-bold underline">
      Hello world!
   </h1>
 </body>
 </html>`}
                                onCopy={props.alert}
                            >
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
                        <span className='w-full text-primary' >{`  <script src="https://cdn.tailwindcss.com">`}</span>
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
            
            <p className="dark:text-gray-500 w-2/3 text-lg text-black">Learn more about Tailwind in <a className='underline' href="https://tailwindcss.com/docs/installation">How to Use.</a> </p>
        </>
    )
}