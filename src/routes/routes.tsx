import { HomePage } from "../pages/home";
import { NotFoundPage } from "../pages/not-found";
import { СategoryPage } from "../pages/category";
import { SingleCategoryPage } from "../pages/single-category";

const routes = () => [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:category",
    element: <СategoryPage />,
  },
  {
    path: "/:category/:id",
    element: <SingleCategoryPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
