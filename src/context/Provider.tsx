"use client"
import {StateContext} from "@/context/StateContext";
import React,{useState} from 'react';
import {Admin} from "@/context/Types";

const Provider = ({children}:{children:React.ReactNode}) => {

    const [userData, setUserData] = useState<Admin>({
        username:"",
        email:""
    });

    return (
        <StateContext.Provider value={{userData, setUserData}}>
            {children}
        </StateContext.Provider>
    );
};

export default Provider;