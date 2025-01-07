import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ZeroCh from "./Components/Pages/ZeroCh.jsx";
import OneCh from "./Components/Pages/OneCh.jsx";
import Home from "./Components/Layout/Home.jsx";
import Content from "./Components/Layout/Content.jsx";
import TwoCh from "./Components/Pages/TwoCh.jsx";
import ThreeCh from "./Components/Pages/ThreeCh.jsx";
import FourCh from "./Components/Pages/FourCh.jsx";
import FiveCh from "./Components/Pages/FiveCh.jsx";
import SixCh from "./Components/Pages/SixCh.jsx";
import SevenCh from "./Components/Pages/SevenCh.jsx";
import EightCh from "./Components/Pages/EightCh.jsx";
import NineCh from "./Components/Pages/NineCh.jsx";
import EpilogueCh from "./Components/Pages/EpilogueCh.jsx";
import Experiment from "../Experiment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/content",
        element: <Content></Content>,
        children: [
          {
            path: "/content/chapterZero",
            element: <ZeroCh />,
          },
          {
            path: "/content/chapterOne",
            element: <OneCh />,
          },
          {
            path: "/content/chapterTwo",
            element: <TwoCh></TwoCh>,
          },
          {
            path: "/content/chapterThree",
            element: <ThreeCh></ThreeCh>,
          },
          {
            path: "/content/chapterFour",
            element: <FourCh></FourCh>,
          },
          {
            path: "/content/chapterFive",
            element: <FiveCh></FiveCh>,
          },
          {
            path: "/content/chapterSix",
            element: <SixCh></SixCh>,
          },
          {
            path: "/content/chapterSeven",
            element: <SevenCh></SevenCh>,
          },
          {
            path: "/content/chapterEight",
            element: <EightCh></EightCh>,
          },
          {
            path: "/content/chapterNine",
            element: <NineCh></NineCh>,
          },
          {
            path: "/content/chapterEpilogue",
            element: <EpilogueCh></EpilogueCh>,
          },
        ],
      },
    ],
    errorElement: (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-medium">
          It seems we are in a uncharted territory, Please Go back
        </p>
      </div>
    ),
  },

  {
    path: "content/experimentDev",
    element: <Experiment></Experiment>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
