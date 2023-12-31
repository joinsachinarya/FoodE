import { createBrowserRouter } from "react-router-dom";
import RestaurantList from "./src/components/RestaurantList";
import About from "./src/components/About";
import App from "./App";
import ErrorComponent from "./src/components/ErrorComponent";
import RestaurantDetails from "./src/components/RestaurantDetails";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <RestaurantList />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "*",
                errorElement: <ErrorComponent />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantDetails />
            }
        ]
    }
])

export default appRouter;