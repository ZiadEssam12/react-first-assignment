import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Layout from "./Components/Layout/Layout";
import { useEffect } from "react";
import NotFound from "./Components/NotFound/NotFound";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  useLocation,
} from "react-router-dom";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Navigate to={"home"} /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
