import { useParams } from "react-router-dom";
import api from "../../api";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import { ILocation } from "../../types/Types";

export const DetailLocationPage = () => {
  const { id } = useParams();

  const [data, setData] = useState<ILocation | null>(null);

  api.location.getById(Number(id)).then((resp) => {
    if (resp) setData(resp);
  });

  if (!data)
    return (
      <h1 className="flex items-center min-h-screen justify-center">
        Loading...
      </h1>
    );

  return (
    <div className="flex flex-grow items-center min-h-screen justify-center flex-col relative">
      <BackButton />
      <div className="text-4xl mb-8 text-red-700 font-extrabold">
        {data.name}
      </div>
      <div className="text-3xl mb-4 text-green-600 font-extrabold">
        Измерение: {data.dimension}
      </div>
      <div className="text-3xl mb-4 text-green-600 font-extrabold">
        Тип: {data.type}
      </div>
    </div>
  );
};
