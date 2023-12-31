import React from "react";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import { Outlet } from "react-router-dom";
import useOnline from "./src/hooks/useOnline";
import Offline from "./src/components/Offline";

const App = () => {
    const isOnline = useOnline();

    return (
        <div className="">
            <Header />
            {!isOnline ? <Offline /> : <Outlet />}
            <Footer />
        </div>
    )
}


export default App;