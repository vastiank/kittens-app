import { createBrowserRouter } from "react-router-dom";
import { Kittens } from "../pages/kittens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Kittens />,
  },
]);
