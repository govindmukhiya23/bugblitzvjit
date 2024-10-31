'use client'; // This tells Next.js this is a Client Component

import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/Contact.module.css'; // Import styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Loader from '../loading'; // Import the Loader component
import Navbar from '../components/Navbar'; // Import the Navbar component

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mdkoaoqg");

    if (state.succeeded) {
        return <p className={styles.successMessage}>Thanks for joining!</p>;
    }

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Full Name</label>
                <input
                    className={styles.input}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your first and last name"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Your Email Address</label>
                <input
                    className={ styles.input}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@doe.com"
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Your Message</label>
                <textarea
                    className={styles.textarea}
                    id="message"
                    name="message"
                    placeholder="Enter your message..."
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className={styles.formGroup}>
                <button type="submit" className={styles.submitButton} disabled={state.submitting}>
                    Send
                </button>
            </div>
        </form>
    );
};

const ContactPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating a loading delay (e.g., fetching data)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the time as needed

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return (
        <div className={styles.container}>
            {loading ? (
                <Loader /> // Show the loader while loading
            ) : (
                <>
                    <Navbar /> {/* Add the Navbar component here after loading */}
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.description}>
                        We would love to hear from you! Please fill out the form below.
                    </p>
                    <ContactForm />
                    <div className={styles.contactInfo}>
                        <h2>Contact Information</h2>
                        <div className={styles.infoItem}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> email@example.com</span>
                        </div>
                        <div className={styles.infoItem}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span> +1 (234) 567-890</span>
                        </div>
                        <div className={styles.infoItem}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span> 123 Main St, City, Country</span>
                        </div>
                        <div className={styles.socialMedia}>
                            <h2>Follow Us</h2>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.mapContainer}>
                        <h2>Our Location</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.144144144144!2d-122.406414!3d37.785841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857f9f1c79e2b%3A0x9e4a4f7a1a2c681!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sus!4v1658153431341!5m2!1sen!2sus"
                            title="Google Maps Embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ContactPage;