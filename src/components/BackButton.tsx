import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="absolute top-28 left-16 bg-[#161335] text-white rounded-xl px-8 py-4"
      onClick={() => navigate(-1)}
    >
      Назад
    </button>
  );
};

export default BackButton;
