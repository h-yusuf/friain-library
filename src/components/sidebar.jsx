import React from "react";
import { Link } from "react-router-dom"
import {FaIcons} from "react-icons/fa"
import {} from "react-icons/ci"
const Sidebar = () => {
    
    return (
        <>
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className="fixed top-18 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-background">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="start" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                                </svg>
                                <span className="ms-3">Documentation</span>
                                
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaIcons className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Icons</span>
                            </a>
                        </li>
                        <li>
                            <Link to="introduction" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white ">

                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap  font-bold">Getting Startert</span>
                            </Link>
                            <ul  className=" border-l gap-2 grid border-gray-600">
                                <a href="#" className="border-l -ml-px border-gray-600 hover:border-primary focus:border-primary">
                                    <span className="flex items-center w-full  text-gray-900 transition duration-75 rounded-lg ml-5 group hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200">Introduction</span>
                                </a>
                                <a href="#" className="border-l -ml-px border-gray-600 hover:border-primary focus:border-primary">
                                    <span className="flex items-center w-full  text-gray-900 transition duration-75 rounded-lg ml-5 group hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200">Quickstart</span>
                                </a>
                                <a href="#" className="border-l -ml-px border-gray-600 hover:border-primary focus:border-primary">
                                    <span className="flex items-center w-full  text-gray-900 transition duration-75 rounded-lg ml-5 group hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200">Invoice</span>
                                </a>
                            </ul>
                        </li>


                    </ul>
                </div>
            </aside>

        </>
    )
}
export default Sidebar;