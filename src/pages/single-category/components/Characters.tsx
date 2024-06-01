import { ICharacters } from "../../../types/Types";

const SingleCharacter = ({ data }: { data: ICharacters }) => {
  console.log("####: data", data);

  return (
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
  );
};

export default SingleCharacter;
