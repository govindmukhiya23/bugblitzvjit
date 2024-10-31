"use client"; // This tells Next.js this is a Client Component

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import Gallery from './components/Gallery';
import EventSection from './components/EventSection';
import AboutPage from './about/page'; 
import ContactPage from './components/contact';
import Footer from './components/Footer';
import UserList from './components/UserList';
import Loader from './loading'; // Import the Loader component

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a data fetch
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false); // Update loading state
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <Loader />; // Show the loader while loading
  }

  return (
    <div>
      <Navbar />
      <Banner />
      <AboutSection />
      <TeamSection />
      <Gallery />
      <EventSection />
      <ContactPage />
      <Footer />
      
    </div>
  );
};

export default HomePage;