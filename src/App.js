import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Cloud, Database, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import './App.css';
import Hero from './Components/Hero';
import AboutSection from './Components/AboutSection';
import Services from './Components/Services';
import WorkProcess from './Components/WorkProcess';
import WhyChooseUs from './Components/WhyChooseUs';
import ContactPage from './Components/ContactPage';
import FAQ from './Components/FAQ';
import NewsletterPage from './Components/NewsletterPage';

export default function App() {
  


  return (
    <div className="website">
     
      <Hero/>
      <AboutSection/>
      <Services/>
      <WorkProcess/>
      <WhyChooseUs/>
      <ContactPage/>
      <FAQ/>
      <NewsletterPage/>

    </div>
  );
}