import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", {
        replace: true,
      });
    }, 3000);
  }, []);

  return (
    <div className="flex items-center min-h-screen justify-center text-5xl font-extrabold">
      404 - Page Not Found
    </div>
  );
};
