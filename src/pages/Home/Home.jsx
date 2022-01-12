import React from "react";
import Slider from '../../Components/Slider/Slider'
import NewsCards from "../../Components/NewsCards/NewsCards";
import Parallax from "../../Components/Parallax/Parallax";
import NewsContainer from "../../Components/NewsContainer/NewsContainer";

const Home = () => {
    return (
        <>
        <Slider />
        <NewsCards />
        <Parallax />
        <NewsContainer />
        </>
    )
}

export default Home;