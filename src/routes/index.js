import { Home, About, Tours, Login, Register, NotFound, Search, ToursDetail } from "../pages";

const routes = [
   {
      path: "/",
      element: Home,
   },
   {
      path: "/about",
      element: About,
   },
   {
      path: "/tours",
      element: Tours,
   },
   {
      path: "/tours/search",
      element: Search,
   },
   {
      path: "/tours/:tourId",
      element: ToursDetail,
   },
   {
      path: "/login",
      element: Login,
   },
   {
      path: "/register",
      element: Register,
   },
   {
      path: "*",
      element: NotFound,
   },
];

export default routes;
