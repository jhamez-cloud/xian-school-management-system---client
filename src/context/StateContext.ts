import {createContext} from 'react';
import {ContextType} from "@/context/ContextType";

export const StateContext = createContext<ContextType | null>(null);