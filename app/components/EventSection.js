import React from 'react';
import styles from '../styles/EventSection.module.css'; // Import styles

const events = [
    {
        tag: 'New',
        image: 'images/bg.jpg', // Place this image in the public folder
        name: 'Event Name 1',
        title: 'Event Title 1',
        description: 'Description of Event 1.',
        dateTime: 'Date & Time',
    },
    {
        tag: 'Featured',
        image: 'images/bg.jpg', // Place this image in the public folder
        name: 'Event Name 2',
        title: 'Event Title 2',
        description: 'Description of Event 2.',
        dateTime: 'Date & Time',
    },
    // Add more events with their images
];

const EventCard = ({ event }) => {
    return (
        <div className={styles.eventCard}>
            <div className={styles.tag}>{event.tag}</div>
            <img src={event.image} alt={event.name} className={styles.eventImage} />
            <h3 className={styles.eventName}>{event.name}</h3>
            <p className={styles.eventTitle}>{event.title}</p>
            <p className={styles.eventDescription}>{event.description}</p>
            <p className={styles.eventDateTime}>{event.dateTime}</p>
            <button className={styles.joinButton}>Join</button>
        </div>
    );
};

const EventSection = () => {
    return (
        <div className={styles.eventSection}>
            <h2 className={styles.title}>Upcoming Events</h2>
            <div className={styles.eventList}>
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </div>
    );
};

const HomePage = () => {
    return (
        <div>
            <EventSection />
        </div>
    );
};

export default HomePage;
