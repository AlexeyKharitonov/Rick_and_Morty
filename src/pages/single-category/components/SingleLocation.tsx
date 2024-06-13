import { ILocation } from "../../../types/Types";

const SingleLocation = ({ data }: { data: ILocation }) => {
  return (
    <div>
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

export default SingleLocation;
