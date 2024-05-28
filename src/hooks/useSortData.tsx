// import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICharacters, TypeCategory } from "../types/Types";

export const useSortedData = (initionalData: ICharacters[]) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [sortedData, setSortedData] = useState(initionalData);

  useEffect(() => {
    setSortedData(initionalData);
  }, [initionalData]);

  const handleSort = (order: string) => {
    let newData = [...sortedData];

    if (order === "asc") {
      newData.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );

      console.log("####: ", newData);
      setSortedData(newData);
    } else if (order === "desc") {
      newData.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
      setSortedData(newData);
    } else {
      setSortedData(initionalData);
    }
  };

  return { sortedData, handleSort, setSortedData };
};
