import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  const NavStyles = (isActive: boolean) =>
    `${
      isActive ? "text-green-700 underline" : "text-green-500"
    } hover:text-white`;

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full h-14  flex  justify-center items-center">
        <ul className="flex space-x-12">
          <li className="text-3xl font-extrabold">
            <NavLink className={({ isActive }) => NavStyles(isActive)} to="/">
              Home
            </NavLink>
          </li>
          <li className="text-3xl text-green-700 font-extrabold hover:text-green-900 focus:text-green-900">
            <NavLink
              className={({ isActive }) => NavStyles(isActive)}
              to="/heroes"
            >
              Heroes
            </NavLink>
          </li>
          <li className="text-3xl text-green-700 font-extrabold">
            <NavLink
              className={({ isActive }) => NavStyles(isActive)}
              to="/episodes"
            >
              Episodes
            </NavLink>
          </li>
          <li className="text-3xl text-green-700 font-extrabold">
            <NavLink
              className={({ isActive }) => NavStyles(isActive)}
              to="/locations"
            >
              Locations
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;
