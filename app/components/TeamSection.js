"use client"; // This line enables client component rendering

import React, { useEffect, useState } from "react";
import styles from "../styles/TeamSection.module.css";

const teamMembers = [
    {
        name: "Govind",
        role: "CEO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "M Govind Mukhiya",
        role: "Founder & president",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Emily Johnson",
        role: "CFO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Michael Brown",
        role: "CMO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Sarah Connor",
        role: "COO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Govind",
        role: "CEO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Jane Smith",
        role: "CTO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Emily Johnson",
        role: "CFO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Michael Brown",
        role: "CMO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Sarah Connor",
        role: "COO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Govind",
        role: "CEO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Jane Smith",
        role: "CTO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Emily Johnson",
        role: "CFO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Michael Brown",
        role: "CMO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Sarah Connor",
        role: "COO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Govind",
        role: "CEO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Jane Smith",
        role: "CTO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Emily Johnson",
        role: "CFO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Michael Brown",
        role: "CMO",
        photo: "/images/govind1.jpg",
    },
    {
        name: "Sarah Connor",
        role: "COO",
        photo: "/images/govind1.jpg",
    },

];

const TeamSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalMembers = teamMembers.length;

    // Automatic slide change every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalMembers);
        }, 800); // Adjust speed as needed

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <section className={styles.teamSection}>
            <h2 className={styles.title}>Meet Our Team</h2>
            <div className={styles.memberContainer}>
                <div 
                    className={styles.slides} 
                    style={{ transform: `translateX(-${currentIndex * (100 / totalMembers)}%)` }}
                >
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.member}>
                            <img
                                src={member.photo}
                                alt={member.name}
                                className={styles.photo}
                                onError={(e) => { e.target.src = '/images/default.jpg'; }} // Fallback image
                            />
                            <h3 className={styles.name}>{member.name}</h3>
                            <p className={styles.role}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.navigation}>
                {teamMembers.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;