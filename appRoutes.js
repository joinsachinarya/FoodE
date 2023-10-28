import { createBrowserRouter } from "react-router-dom";
import Body from "./src/components/Body";
import About from "./src/components/About";
import App from "./App";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    }
])

export default appRouter;