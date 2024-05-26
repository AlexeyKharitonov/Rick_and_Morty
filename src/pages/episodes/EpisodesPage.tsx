import { useEffect, useState } from "react";
import api from "../../api";
import { IEpisods } from "../../types/Types";
import { Link } from "react-router-dom";

const EpisodesPage = () => {
  const [data, setData] = useState<IEpisods[]>([]);

  useEffect(() => {
    api.episods.fetchAll().then((resp) => setData(resp));
  }, []);

  if (!data.length)
    return (
      <h1 className="flex items-center min-h-screen justify-center">
        Loading...
      </h1>
    );

  return (
    <div className="flex items-center min-h-screen justify-center flex-col">
      <div className="text-4xl mb-4 text-green-600 font-extrabold mt-11">
        Episods
      </div>
      {data.map((item) => (
        <ul>
          <Link to={`/episodes/${item.id}`}>
            <li
              key={item.id}
              className="text-[#1C1A43] font-extrabold font text-base mb-1.5"
            >
              {item.name}
            </li>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default EpisodesPage;
