import { DetailEpisodePage, EpisodesPage } from "../pages/episodes";
import { HomePage } from "../pages/home";
import { DetailLocationPage, LocationPage } from "../pages/location";
import { СharactersPage, DetailСharacterPage } from "../pages/characters";
import { NotFoundPage } from "../pages/not-found";

const routes = () => [
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/episodes",
    element: <EpisodesPage />,
  },
  {
    path: "/episodes/:id",
    element: <DetailEpisodePage />,
  },
  {
    path: "/locations",
    element: <LocationPage />,
  },
  {
    path: "/location/:id",
    element: <DetailLocationPage />,
  },
  {
    path: "/characters",
    element: <СharactersPage />,
  },
  {
    path: "/characters/:id",
    element: <DetailСharacterPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
