"use client";

import React, { createContext, useContext, useState } from "react";

type FontContextType = {
  size: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
};

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [size, setSize] = useState(16);

  const increaseFontSize = () => {
    if (size >= 72) {
      alert("You can't go higher than 72px");
      return;
    }
    setSize(size + 4);
  };

  const decreaseFontSize = () => {
    if (size <= 16) {
      alert("You can't go lower than 16px");
      return;
    }
    setSize(size - 4);
  };

  return (
    <FontContext.Provider value={{ size, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};
