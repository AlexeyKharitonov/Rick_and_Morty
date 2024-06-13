import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useSortData } from "../../hooks/useSortData";
import { options } from "../../utils/Options";
import { TypeCategory } from "../../types/Types";
import CustomSelect from "../../components/CustomSelect";
import { NotFoundPage } from "../not-found";

export const СategoryPage = () => {
  const [data, setData] = useState<TypeCategory>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [dataError, setDataError] = useState<string | null>(null);

  type CategoryType = "characters" | "episods" | "location";

  const { category } = useParams<{ category: CategoryType }>();
  const validCategories: CategoryType[] = ["characters", "episods", "location"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataLoading(true);
        const response = await axios.get<TypeCategory>(
          `http://localhost:3001/${category}`
        );
        setData(response.data);
        setDataLoading(false);
      } catch (error) {
        console.log("####: error", error);
        if (axios.isAxiosError(error)) {
          setDataError(error.message);
          throw new Error(error.message);
        } else {
          const errorMessage = "An unknown error occurred";
          setDataError(errorMessage);
          throw new Error(errorMessage);
        }
      }
    };

    fetchData();
  }, [category]);

  const sortType = searchParams.get("sort") || "";

  const { sortedData } = useSortData();

  const handleSelectChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ sort: value });
  };

  if (!validCategories.includes(category as CategoryType))
    return <NotFoundPage />;

  if (dataError) {
    return (
      <div className="flex items-center min-h-screen justify-center">
        <div className="text-red-500 text-4xl font-bold">
          Error: {dataError}
        </div>
      </div>
    );
  }

  if (dataLoading)
    return (
      <h1 className="flex items-center min-h-screen justify-center">
        Loading...
      </h1>
    );

  return (
    <div className="flex items-center min-h-screen justify-center flex-col mt-5">
      <div className="flex items-start justify-center">
        <div className="flex flex-col items-center justify-start">
          <div>
            <div className="text-[#d16827] flex flex-col mt-20">
              <div className="mb-5 font-extrabold text-4xl">
                <label>Сортировать</label>
              </div>
              <CustomSelect
                sortType={sortType}
                handleSelectChange={handleSelectChange}
                options={options}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-10">
          {sortedData(data, sortType).map((item) => (
            <ul key={item.id}>
              <Link to={`/${category}/${item.id}`}>
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
