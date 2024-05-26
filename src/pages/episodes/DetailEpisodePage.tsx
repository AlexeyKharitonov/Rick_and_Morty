import { useParams } from "react-router-dom";

const DetailEpisodePage = () => {
  const { id } = useParams();

  console.log("####: id", id);

  return <div>DetailEpisodePage</div>;
};

export default DetailEpisodePage;
