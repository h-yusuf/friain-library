import React from "react";
import logo from "../../asset/logo.png"
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
const Navbar = () => {
    // const [isDarkMode, setDarkMode] = React.useState(false);

    // const toggleDarkMode = (checked: boolean) => {
    //     setDarkMode(checked);
    // };

    return (
        <>
            <nav className=" border-gray-200 dark:bg-black dark:bg-opacity-25 backdrop-blur-sm bg-white bg-opacity-25 sticky top-0">
                <div className="max-w-full flex flex-wrap items-center justify-between mx-6 p-4">
                    <div className="flex gap-12  justify-between w-1/4 max-md:w-full">
                        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-8" />
                            <span className="font-tertiary self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Friain</span>
                        </a>
                        <div className="flex md:order-1">
                            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>

                            <div className="relative hidden md:block">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                            </div>

                            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <ul className="flex gap-6 flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg   rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-primary" aria-current="page">Docs</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Icons</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <div className="flex gap-4">
                                {/* <li className="hover:bg-gray-700 p-2 rounded-md">
                                    <DarkModeSwitch
                                        checked={isDarkMode}
                                        onChange={toggleDarkMode}
                                        size={20}
                                    />
                                </li> */}
                                <DarkThemeToggle
                                    className="dark:hover:bg-gray-700 hover:bg-gray-200 p-2 rounded-md outline-none transition-all duration-500 text-dark dark:text-white ring-0 dark:ring-0 focus:ring-0"
                                />
                                <li className="dark:hover:bg-gray-700 hover:bg-gray-200 p-2 rounded-md">
                                    <a href="" >
                                        <svg className="w-5 h-5 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar;