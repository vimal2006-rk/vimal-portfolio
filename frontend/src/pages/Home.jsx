import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Internship from '../components/Internship';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import {
  getProfile,
  getSkills,
  getProjects,
  getExperience,
  getEducation,
  getCertifications
} from '../services/api';

import '../styles/global.css';
import '../styles/home.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState(null);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Fetch all portfolio datasets (with built-in offline/static fallback)
    async function loadPortfolio() {
      const [prof, skl, prj, exp, edu, cert] = await Promise.all([
        getProfile(),
        getSkills(),
        getProjects(),
        getExperience(),
        getEducation(),
        getCertifications()
      ]);

      setProfile(prof);
      setSkills(skl);
      setProjects(prj);
      setExperience(exp);
      setEducation(edu);
      setCertifications(cert);
    }

    loadPortfolio();
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app-root">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Internship experience={experience} />
        <Education education={education} />
        <Certifications certifications={certifications} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </div>
  );
}
