import { MdChildCare } from "react-icons/md";

const Home = () => {
  return (
    <div className="flex flex-grow items-center min-h-screen justify-center flex-col">
      <div className="text-4xl mb-4 text-green-600 font-extrabold">
        Добро пожаловать!
      </div>
      <div className="text-2xl text-green-600 font-extrabold mb-24">
        Это приложение вселенной Рика и Морти!
      </div>
      <MdChildCare size={120} color="#42829F" />
    </div>
  );
};

export default Home;
