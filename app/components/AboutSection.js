import React from "react";
import styles from "../styles/AboutSection.module.css";


const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>About Bug Blitz</h2>
        <p className={styles.motto}>
          <em>“Exploring Tomorrow’s Tech, Today”</em>
        </p>
        
        <p>
        <strong>Bug Blitz VJIT</strong>  is a student-run tech club focused on innovation through real-world beta testing of cutting-edge technologies. We empower students with hands-on experience, helping companies refine their products while developing essential technical skills and building portfolios. Our members benefit from networking opportunities with industry professionals and gain exposure to internships and job prospects.
        </p>

        <p>
       ⭐ Through workshops, feedback sessions, and events, we foster a collaborative environment where tech enthusiasts can thrive. Join Bug Blitz VJIT to be part of a community shaping the future of technology, today. 
        </p>

        <p className={styles.conclusion}>
          Join Bug Blitz and become part of the tribe that’s Exploring Tomorrow’s Tech, Today!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
