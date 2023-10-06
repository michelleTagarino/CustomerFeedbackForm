'use client';

import { useEffect, useState } from "react";
import Comment from "../shared/interfaces/comment";

/**
 * Hook to get comments from mock server
 */
export const useComments = (url: string) => {
  const [data, setData] = useState<Comment[]>([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          next: {
            revalidate: 0 // re-fetch data without using cache
          }
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setIsLoading(false);
        setData(json);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};