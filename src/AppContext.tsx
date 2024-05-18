import { createContext } from "react";

interface AppContextType {
  isCartCount: number;
  updateCartCount: (newCount: number) => void;
}

export const AppContext = createContext<AppContextType>({
  isCartCount: 0,
  updateCartCount: () => {}
});
