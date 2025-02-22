import React from "react"
import Header from "../Components/Header"
import Slider from "../Components/Carousel";
import img1 from '../Img/img1.jpg'
import img2 from '../Img/img2.jpg'
import img3 from '../Img/img3.jpg'
import img4 from '../Img/blub img4.jpg'
import img5 from '../Img/blub img5.jpg'
import '../Resources/Home.css'


const image = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 },{url: img5}];
export default function Home() {
    return (
        <div>
            <Header/>
            <div className="slides">
            <Slider images={image} />
            </div>

        </div>
    )
}

