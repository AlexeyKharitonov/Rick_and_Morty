import DetailEpisodePage from "../pages/episodes/DetailEpisodePage";
import EpisodsPage from "../pages/episodes/EpisodesPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = () => [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/episodes",
    element: <EpisodsPage />,
  },
  {
    path: "/episodes/:id",
    element: <DetailEpisodePage />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
