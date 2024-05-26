import { useEffect, useState } from "react";
import api from "../../api";
import { ILocation } from "../../types/Types";
import { Link } from "react-router-dom";

export const LocationPage = () => {
  const [data, setData] = useState<ILocation[]>([]);

  useEffect(() => {
    api.location.fetchAll().then((resp) => setData(resp));
  }, []);

  if (!data.length)
    return (
      <h1 className="flex items-center min-h-screen justify-center">
        Loading...
      </h1>
    );

  return (
    <div className="flex items-center min-h-screen justify-center flex-col mt-5">
      {data.map((item) => (
        <ul>
          <Link to={`/location/${item.id}`}>
            <li
              key={item.id}
              className="text-[#1C1A43] hover:text-[#6f6bbc] font-extrabold font text-base mb-1.5"
            >
              {item.name}
            </li>
          </Link>
        </ul>
      ))}
    </div>
  );
};
