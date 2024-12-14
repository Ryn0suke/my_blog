'use client';
import React, { createContext, useEffect, useState } from 'react';
import { NotionProperties } from '../types/notion';

type NotionContextType = [NotionProperties[], string[]] | null;

export const NotionContext = createContext<NotionContextType>(null);

export default function NotionInfoProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<NotionContextType>(null);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await fetch('/api/notion/');
        const result = await response.json();
        const data:NotionContextType = [result.postsProperties, result.tags];
        setData(data);
      } catch(error:unknown) {
        console.error(error);
      }
    };


    fetchData();
    //1h毎にフェッチ
    const intervalId = setInterval(fetchData, 3600000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <NotionContext.Provider value={data}>
      {children}
    </NotionContext.Provider>
  );
}
