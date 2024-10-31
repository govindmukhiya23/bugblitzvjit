// app/components/Footer.js

import React from 'react';
import styles from '../styles/Footer.module.css'; // Import styles

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Bug Blitz VJIT. All rights reserved.</p>
                
            </div>
        </footer>
    );
};

export default Footer;