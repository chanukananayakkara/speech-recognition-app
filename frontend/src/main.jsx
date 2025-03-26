import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {createRoot}  from "react-dom/client"
import { StrictMode } from "react";

//pages are imported here
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  }
]);


const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(<StrictMode><RouterProvider router={router}/></StrictMode>)