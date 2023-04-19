import React from "react";
import Title from "../title/Title";
import NavBar from "../nav/NavBar";
import PosterTag from "../poster/Poster";
import ParaTag from "../para/para";
import Upload from "../../upload/Upload";

const Home=()=>{
    return(
        <div>
        <Title/>
        <NavBar/>
        <PosterTag/>
        <ParaTag/>
    </div>
    )
}

export default Home