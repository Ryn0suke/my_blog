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
        console.log(result);

      } catch(error:unknown) {
        console.error(error);
      }
    };


    fetchData();
    const intervalId = setInterval(fetchData, 30000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <NotionContext.Provider value={data}>
      {children}
    </NotionContext.Provider>
  );
}
