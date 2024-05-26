import { MdChildCare } from "react-icons/md";
import { RiAliensFill } from "react-icons/ri";

export const HomePage = () => {
  return (
    <div className="flex flex-grow items-center min-h-screen justify-center flex-col">
      <div className="text-4xl mb-4 text-green-600 font-extrabold">
        Добро пожаловать!
      </div>
      <div className="text-2xl text-green-600 font-extrabold mb-24">
        <div className="flex items-center ">
          Это приложение вселенной Рика и Морти!{" "}
          <RiAliensFill size={48} color="#FF00FF" />
        </div>
      </div>
      <MdChildCare size={120} color="#42829F" />
    </div>
  );
};
