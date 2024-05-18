import { createContext } from "react";

interface AppContextType {
    selectedValues: string[];
    addSelectedValue: (value: string) => void;
    removeSelectedValue: (value: string) => void;
}

export const AppContext = createContext<AppContextType>({
    selectedValues: [],
    addSelectedValue: () => {},
    removeSelectedValue: () => {},
});
