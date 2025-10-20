import React from "react";
import {Admin} from "@/context/Types";

export interface ContextType {
    userData:Admin,
    setUserData:(React.Dispatch<React.SetStateAction<Admin>>),
}