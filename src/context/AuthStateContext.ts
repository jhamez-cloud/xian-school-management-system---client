import {createContext} from 'react';
import {AuthContextType} from "@/context/authContextType";

export const AuthStateContext = createContext<AuthContextType | null>(null);