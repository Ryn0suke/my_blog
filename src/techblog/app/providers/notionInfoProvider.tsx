"use client";
import React, { createContext } from "react";
import { NotionProperties } from "../types/notion";

type NotionContextType = [NotionProperties[], string[]] | null;

export const NotionContext = createContext<NotionContextType>(null);

export default function NotionInfoProvider({ children, data }: { children: React.ReactNode, data: NotionContextType }) {

  return (
    <NotionContext.Provider value={data}>
      {children}
    </NotionContext.Provider>
  );
}
