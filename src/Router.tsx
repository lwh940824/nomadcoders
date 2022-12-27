import { createBrowserRouter } from "react-router-dom"
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Coins />,
    },
    {
        path: "/:coinId",
        element: <Coin />,
        children: [
            {
                path: "price",
                element: <Price />
            },
            {
                path: "chart",
                element: <Chart />
            }
        ]
    }
])
export default router;

// function Router() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Coins />} />
//                 <Route path="/:coinId" element={<Coin />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }
// export default Router;