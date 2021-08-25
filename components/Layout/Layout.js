import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

export default function Layout({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <Body/>


                <Footer/>
                    {childern}
            </>
        </div>
    )
}