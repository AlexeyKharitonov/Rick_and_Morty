import { useEffect, useState } from "react";
import api from "../../api";
import { ICharacters } from "../../types/Types";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useSortedData } from "../../hooks/useSortData";

export const СharactersPage = () => {
  const [data, setData] = useState<ICharacters[]>([]);

  useEffect(() => {
    api.characters.fetchAll().then((resp) => {
      if (resp) {
        setData(resp);
      }
    });
  }, []);

  const { sortedData, handleSort } = useSortedData(data);

  if (!data.length || !sortedData)
    return (
      <h1 className="flex items-center min-h-screen justify-center">
        Loading...
      </h1>
    );

  return (
    <div className="flex items-center min-h-screen justify-center flex-col mt-5">
      <div className="flex items-start justify-center">
        <div className="flex flex-col items-center justify-start">
          <div className="text-[#d16827] mt-20 mb-8  font-extrabold text-4xl self-start">
            Сортировка
          </div>
          <div className="flex flex-col space-y-6">
            <Button onClick={() => handleSort("none")}>Без сортировки</Button>
            <Button onClick={() => handleSort("asc")}>По возрастанию</Button>
            <Button onClick={() => handleSort("desc")}>По убыванию</Button>
          </div>
        </div>
        <div className="flex flex-col ml-10">
          {sortedData.map((item) => (
            <ul key={item.id}>
              <Link to={`/characters/${item.id}`}>
                <li className="text-[#1C1A43] hover:text-[#6f6bbc] font-extrabold text-base mb-1.5">
                  {item.name}
                </li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
