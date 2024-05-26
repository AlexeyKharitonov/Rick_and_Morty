import { useParams } from "react-router-dom";
import api from "../../api";
import { useState } from "react";
import BackButton from "../../conponents/BackButton";
import { ICharacters } from "../../types/Types";

export const DetailСharacterPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<ICharacters | null>(null);

  api.characters.getById(Number(id)).then((resp) => {
    if (resp) setData(resp);
  });

  console.log("####: ", data);

  if (!data)
    return (
      <h1 className="flex items-center min-h-screen justify-center">
        Loading...
      </h1>
    );

  return (
    <div className="flex items-center min-h-screen justify-center flex-col">
      <BackButton />
      <div className="flex items-center">
        <img
          src={data.image}
          alt={data.name}
          className="w-44 h-44 mr-14 rounded-xl"
        />
        <div className="flex flex-col">
          <div className="text-4xl mb-8 text-red-700 font-extrabold">
            {data.name}
          </div>
          <div className="text-3xl mb-4 text-green-600 font-extrabold">
            Gender: {data.gender}
          </div>
          <div className="text-3xl mb-4 text-green-600 font-extrabold">
            Status: {data.status}
          </div>
          <div className="text-3xl mb-4 text-green-600 font-extrabold">
            Species: {data.species}
          </div>
        </div>
      </div>
    </div>
  );
};
