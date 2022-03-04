import React from "react";

interface ContextType {
  theme?: string;
  themeToggler?: () => void;
}

export const Context = React.createContext<ContextType>({});
