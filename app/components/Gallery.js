// components/Gallery.js

import React, { useEffect, useState } from 'react';
import styles from '../styles/Gallery.module.css';

const images = [
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/govind1.jpg',
    '/images/pic.jpeg',
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/govind1.jpg',
    '/images/pic.jpeg',
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/govind1.jpg',
    '/images/pic.jpeg',
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/govind1.jpg',
    '/images/pic.jpeg',
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/govind1.jpg',
    '/images/pic.jpeg',
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/govind1.jpg',
    '/images/pic.jpeg',
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/govind1.jpg',
    '/images/pic.jpeg',
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/govind1.jpg',
    '/images/pic.jpeg',
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/govind1.jpg',
    '/images/pic.jpeg',

    // Add more images as needed...
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    // Automatic slide change every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 100); // Change this value for speed
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.galleryContainer}>
            <h2 className={styles.galleryHeading}>Gallery</h2> {/* Added heading */}
            <div className={styles.gallery}>
                <div className={styles.slides} style={{ transform: `translateX(-${(currentIndex + 1) * (100 / (totalImages + 2))}%)` }}>
                    {/* Duplicate the images for seamless looping */}
                    <div className={styles.card}>
                        <img src={images[totalImages - 1]} alt={`Slide ${totalImages}`} className={styles.image} />
                    </div>
                    {images.map((src, index) => (
                        <div key={index} className={styles.card}>
                            <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
                        </div>
                    ))}
                    <div className={styles.card}>
                        <img src={images[0]} alt={`Slide 1`} className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;