import {useContext} from "react";
import {AuthStateContext} from "@/context/AuthStateContext";

export const useAuthContext = () => {
    const context = useContext(AuthStateContext);
    if (!context) throw new Error("useAuthContext must be used inside AuthProvider");
    return context;
};