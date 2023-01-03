import { createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "tv",
                element: <Tv />,
            },
            {
                path: "search",
                element: <Search />,
            },
        ],
    },
]);
