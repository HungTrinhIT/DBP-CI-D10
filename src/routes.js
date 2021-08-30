import About from "./Containers/About";
import Home from "./Containers/Home";
import { PageNotFound } from "./Containers/NotFound";
import Search from "./Containers/Search";

const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    path: "/",
    exact: false,
    component: <Search />,
  },
  {
    path: "/",
    exact: false,
    component: <About />,
  },
  {
    path: "**",
    exact: false,
    component: <PageNotFound />,
  },
];

export default routes;
