import React from "react";
import Navbar from "../components/partials/Navbar"
import Sidebar from "../components/sidebar";
import Introduction from "../components/content/introduction";

const Main = () => {
    return (
        <>
        <div className="">
            {/* <Sidebar/> */}
            <Introduction/>
            {/* <div className="w-full h-screen flex items-center justify-center">
                <h1 className="text-3xl text-primary font-bold font-primary">
                    Welcome To friain
                </h1>
            </div> */}
        </div>
        </>
    )
}
export default Main;