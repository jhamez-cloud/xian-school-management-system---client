import {createContext} from 'react';
import {ContextType} from "@/context/ContextType";

export const AuthStateContext = createContext<ContextType | null>(null);