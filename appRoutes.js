import { createBrowserRouter } from "react-router-dom";
import RestaurentList from "./src/components/RestaurentList";
import About from "./src/components/About";
import App from "./App";
import ErrorComponent from "./src/components/ErrorComponent";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <RestaurentList />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "*",
                errorElement: <ErrorComponent />,
            }
        ]
    }
])

export default appRouter;