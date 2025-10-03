"use client"

import React,{useState} from 'react';
import {AuthStateContext} from "@/context/AuthStateContext";
import {Admin} from "@/context/Types";

const Provider = ({children}:{children:React.ReactNode}) => {

    const [userData, setUserData] = useState<Admin>({
        username:"",
        email:""
    });

    return (
        <AuthStateContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthStateContext.Provider>
    );
};

export default Provider;