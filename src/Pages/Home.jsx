import React from "react"
import Header from "../Components/Header"
import Slider from "../Components/Carousel";
import img1 from '../Img/img1.jpg'
import img2 from '../Img/img2.jpg'
import img3 from '../Img/img3.jpg'
import img4 from '../Img/blub img4.jpg'
import img5 from '../Img/blub img5.jpg'
import '../Resources/Home.css'
import FunFactCarousel from "../Components/Questionaire";
import VideoCarousel from "../Components/VideoCarousel";


const image = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 },{url: img5}];
export default function Home() {
    return (
        <div>
            <Header/>
            <div className="slides">
            <Slider images={image} />
            <section>
                <FunFactCarousel/>
            </section>
            <section>
            </section>
            <section>
                <VideoCarousel/>
            </section>
            <footer style ={{paddingBottom:'30px'}}>
                <p>Copyright 2025 &#169;</p>
                <div style ={{display:'flex', flexDirection:'column'}}>

                <span>
                <a href="https://www.blubtheblob.com/" target="_blank" rel="noopener noreferrer" id="blub">
      Visit Blub The Blob
    </a>
                </span>
                <span>
                <a href="https://x.com/Yinka_TC" target="_blank" rel="noopener noreferrer" id="kaizen">
      kaizen &#8482;
    </a>
                </span>
                </div>
            </footer>
            </div>

        </div>
    )
}

