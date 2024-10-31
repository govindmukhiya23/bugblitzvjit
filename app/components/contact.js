import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/Contact.module.css'; // Import styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mdkoaoqg");
    const [customMessage, setCustomMessage] = useState('');

    // Use useEffect to set the success message only when the state changes
    useEffect(() => {
        if (state.succeeded) {
            setCustomMessage("Thank you for your message! We'll get back to you soon.");
        }
    }, [state.succeeded]); // Dependency array ensures this runs only when state.succeeded changes

    const handleCustomMessageClear = () => {
        setCustomMessage('');
    };

    return (
        <>
            {customMessage && (
                <p className={styles.successMessage} onClick={handleCustomMessageClear}>
                    {customMessage}
                </p>
            )}
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
                        className={styles.input}
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
        </>
    );
};

const ContactPage = () => {
    return (
        <div className={styles.container}>
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
        </div>
    );
};

export default ContactPage;