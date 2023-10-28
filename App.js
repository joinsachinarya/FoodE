import React from "react";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import { Outlet } from "react-router-dom";


const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}


export default App;