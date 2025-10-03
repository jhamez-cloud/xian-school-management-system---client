import React from "react";
import {Admin} from "@/context/Types";

export interface AuthContextType {
    userData:Admin,
    setUserData:(React.Dispatch<React.SetStateAction<Admin>>),
}