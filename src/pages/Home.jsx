import React from "react";
import CarouselNews from '../Components/CarouselNews/CarouselNews'
import NewsCards from "../Components/NewsCards/NewsCards";
import Parallax from "../Components/Parallax/Parallax";
import NewsContainer from "../Components/NewsContainer/NewsContainer";

const Home = () => (
    <>
        <CarouselNews/>
        <NewsCards/>
        <Parallax/>
        <NewsContainer/>
    </>
)

export default Home;