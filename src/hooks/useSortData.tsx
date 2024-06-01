import { ICharacters, IEpisods, ILocation } from "../types/Types";

type SortByEntity = ICharacters[] | ILocation[] | IEpisods[];

export const useSortData = () => {
  const sortedData = (data: SortByEntity, sortType: string) => {
    const newData = [...data] || [];
    newData.sort((a, b) => {
      if (sortType === "asc") {
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      } else {
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      }
    });

    return newData;
  };

  return { sortedData };
};
