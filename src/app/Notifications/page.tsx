"use client";

import {useContext} from "react";
import NavBar from "@/app/components/NavBar";
import {StateContext} from "@/context/StateContext";

const Page = () => {
    const context = useContext(StateContext);
    if(!context) {
        throw new Error("No context provided");
    }

    const {userData} = context;

    return (
        <div className="w-full h-full border-t-16 border-t-blue-400 flex space-x-8">
            <NavBar email={userData?.user.email} username={userData?.user.userName}/>
            <section  className={`w-5/6 h-full py-4 pt-0 space-y-2 bg-white overflow-y-scroll relative`}>
                <div className={`w-full h-[50px] bg-white flex px-2 items-center space-x-[60%] fixed mb-4 z-20`}>
                    <h1 className={`text-gray-700 text-lg font-light`}>Xian School Manager</h1>
                    <button className={`w-[150px] h-[40px] cursor-pointer bg-red-500 text-white text-lg rounded-md z-40`}>Sign Out</button>
                </div>
            </section>
        </div>
    );
};

export default Page;
