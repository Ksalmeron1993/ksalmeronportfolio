import React, { useState } from "react";
import { FaGitlab } from "react-icons/fa";

function getSafe(fn, defaultVal) {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}

const ImageSlider = ({ slides }) => {
  if (!slides) {
    console.error("Slides is undefined or null");
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "500px",
    position: "relative",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "2px",
  };

  const slideStyles = slides?.[currentIndex]
    ? {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${getSafe(() => slides[currentIndex]?.url, "")})`,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
    : {};

  const arrowStyles = {
    position: "absolute",
    top: "50%",
    fontSize: "25px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const leftArrowStyles = {
    ...arrowStyles,
    left: "0",
    transform: "translate(-120%, -50%)",
  };

  const rightArrowStyles = {
    ...arrowStyles,
    right: "0",
    transform: "translate(120%, -50%)",
  };

  const dotsContainerStyles = {
    display: "flex",
    bottom: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 9px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const gitlabLink = getSafe(
    () => slides[currentIndex]?.gitlabLink,
    "defaultGitlabLink"
  );

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        {" "}
        ⇦{" "}
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        {" "}
        ⇨{" "}
      </div>
      <div style={slideStyles}>
        {gitlabLink && (
          <a
            href={gitlabLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              bottom: "520px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <div className="neon-outline">
              {FaGitlab && <FaGitlab size={40} color="#fff" />}
            </div>
          </a>
        )}
      </div>
      <div style={dotsContainerStyles}>
        {slides &&
          slides.length > 0 &&
          slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={dotStyles}
              onClick={() => goToSlide(slideIndex)}
            >
              ◉{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageSlider;
