import React, { useState } from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { Alert } from 'flowbite-react';
import Cli from "./getstart/cli"
import Cdn from "./getstart/cdn"

export default function GetStart() {

    const [alertVisible, setAlertVisible] = useState(false);
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        setCopied(true);
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 2000);
    };

    const html = `<!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./output.css" rel="stylesheet">
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
  </html>`;

    return (
        <>
            {alertVisible && (
                <Alert
                    className='transition-all ease-in  '
                    color="info"
                    icon={IoMdCheckmarkCircle}
                    style={{
                        position: "fixed",
                        top: 72,
                        right: 45,
                        width: "20%",
                        zIndex: 1000,
                        opacity: alertVisible ? 1 : 0,
                    }}
                >
                    <span className='text-black text-sm'>Code has been copied</span>
                </Alert>
            )}
            <div class=" p-12 sm:ml-64 flex flex-col gap-6 ">

                <div className="flex flex-col gap-2">
                    <h1 className="h1 text-primary">Instalation</h1>
                    <h1 className="dark:text-white head text-black ">Get started with setup Tailwind CSS</h1>
                    <p className="dark:text-gray-500  text-lg text-black">
                        Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
                        <span className="my-2"> <br /> It's fast, flexible, and reliable — with zero-runtime.</span>
                    </p>

                </div>
                <Cli
                alert={handleCopy}
                copies={html}
                />

                <Cdn
                alert={handleCopy}
                />
            </div>
        </>
    )
}