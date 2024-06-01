import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import axios from "axios";
import SingleCharacter from "./components/Characters";
import SingleEpisod from "./components/SingleEpisods";
import { ICharacters, ILocation, IEpisods } from "../../types/Types";
import SingleLocation from "./components/SingleLocation";

export const SingleCategoryPage = () => {
  const [characterData, setCharacterData] = useState<ICharacters | null>(null);
  const [locationData, setLocationData] = useState<ILocation | null>(null);
  const [episodData, setEpisodData] = useState<IEpisods | null>(null);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [dataError, setDataError] = useState<string | null>(null);

  const { category, id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataLoading(true);
        let response;
        switch (category) {
          case "characters":
            response = await axios.get<ICharacters>(
              `http://localhost:3001/characters/${id}`
            );
            setCharacterData(response.data);
            break;
          case "location":
            response = await axios.get<ILocation>(
              `http://localhost:3001/location/${id}`
            );
            setLocationData(response.data);
            break;
          case "episods":
            response = await axios.get<IEpisods>(
              `http://localhost:3001/episods/${id}`
            );
            setEpisodData(response.data);
            break;
          default:
            throw new Error("Unknown category");
        }
        setDataLoading(false);
      } catch (error) {
        console.log("####: error", error);
        if (axios.isAxiosError(error)) {
          setDataError(error.message);
        } else {
          setDataError("An unknown error occurred");
        }
        setDataLoading(false);
      }
    };

    fetchData();
  }, [category, id]); // Добавлено category и id в зависимости, чтобы обновлять данные при изменении параметров

  if (dataError) {
    return (
      <div className="flex items-center min-h-screen justify-center">
        <div className="text-red-500 text-4xl font-bold">
          Error: {dataError}
        </div>
      </div>
    );
  }

  if (dataLoading) {
    return (
      <h1 className="flex items-center min-h-screen justify-center">
        Loading...
      </h1>
    );
  }

  return (
    <div className="flex items-center min-h-screen justify-center flex-col">
      <BackButton />
      <div className="flex items-center">
        {category === "characters" && characterData && (
          <SingleCharacter data={characterData} />
        )}
        {category === "episods" && episodData && (
          <SingleEpisod data={episodData} />
        )}
        {category === "location" && locationData && (
          <SingleLocation data={locationData} />
        )}
      </div>
    </div>
  );
};

export default SingleCategoryPage;
