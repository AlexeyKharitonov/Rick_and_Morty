import { IEpisods } from "../../../types/Types";

const SingleEpisod = ({ data }: { data: IEpisods }) => {
  return (
    <div>
      <div className="text-4xl mb-8 text-red-700 font-extrabold">
        {data.name}
      </div>
      <div className="text-3xl mb-4 text-green-600 font-extrabold">
        Номер эпизода: {data.episode}
      </div>
      <div className="text-3xl mb-4 text-green-600 font-extrabold">
        Дата выхода: {data.air_date}
      </div>
    </div>
  );
};

export default SingleEpisod;
