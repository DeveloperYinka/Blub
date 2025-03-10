import React, { useRef, useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "../Resources/VideoCarousel.css";
import "react-alice-carousel/lib/alice-carousel.css";

// Import video files (Replace with actual paths)
import video1 from "../Videos/blob video 1.mp4";
import video2 from "../Videos/blob video 2.mp4";

const VideoCarousel = () => {
  const carouselRef = useRef(null);
  const videoRefs = useRef([]); // Array of video refs
  const [mainIndex, setMainIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Handle video progress for the current video
  useEffect(() => {
    const video = videoRefs.current[mainIndex];
    if (!video) return;

    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [mainIndex]);

  // Auto-play the video whenever the mainIndex changes
  useEffect(() => {
    const video = videoRefs.current[mainIndex];
    if (video) {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [mainIndex]);

  // Move to the next video or loop back to the first video
  const handleVideoEnd = () => {
    const nextIndex = (mainIndex + 1) % videoRefs.current.length;
    setMainIndex(nextIndex);
    carouselRef.current.slideTo(nextIndex);
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRefs.current.forEach((video) => {
      if (video) video.muted = !isMuted;
    });
  };

  const items = [
    <div className="item" key="video1">
      <video
        ref={(el) => (videoRefs.current[0] = el)}
        width="100%"
        autoPlay
        muted={isMuted}
        className="media"
        onEnded={handleVideoEnd} // Move to next video when finished
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>,
    <div className="item" key="video2">
      <video
        ref={(el) => (videoRefs.current[1] = el)}
        width="100%"
        autoPlay
        muted={isMuted}
        className="media"
        onEnded={handleVideoEnd} // Move to next video when finished
      >
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>,
  ];

  return (
    <div className="carousel">
      <AliceCarousel
        ref={carouselRef}
        items={items}
        activeIndex={mainIndex}
        disableDotsControls
        disableButtonsControls
        infinite={false} // We handle looping manually in handleVideoEnd
      />

      {/* Speaker Button */}
      <button className="speaker-btn" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"}
      </button>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default VideoCarousel;
