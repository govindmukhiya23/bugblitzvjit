"use client"; // This tells Next.js this is a Client Component

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import styles from '../styles/Banner.module.css';

const slides = [
  {
    image: "/images/bg.jpg",
    title: "Welcome to Our Service",
    description: "Experience the best with us.",
    buttonText: "Join",
    buttonLink: "https://docs.google.com/forms/d/your-google-form-id/viewform"
  },
  {
    image: "/images/bg1.webp",
    title: "Your Trusted Partner",
    description: "We provide reliable solutions.",
    buttonText: "Our Services",
    buttonLink: "https://docs.google.com/forms/d/your-google-form-id/viewform"
  },
  {
    image: "/images/bg.jpg",
    title: "Get In Touch",
    description: "Contact us for more details.",
    buttonText: "Contact Us",
    buttonLink: "/contact"
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality with pause-on-hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <div
      className={styles.banner}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${currentSlide === index ? styles.activeSlide : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {currentSlide === index && (
            <div className={styles.overlay}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href={slide.buttonLink} className={styles.button}>
                {slide.buttonText}
              </a>
            </div>
          )}
        </div>
      ))}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${currentSlide === index ? styles.activeIndicator : ""}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
