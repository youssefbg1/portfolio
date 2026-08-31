import { useState, useEffect } from 'react';
import Hero from '../components/hero/Hero.jsx';
import ProjectSection from '../components/projects/ProjectSection.jsx';
import AboutSection from '../components/about/AboutSection.jsx';
import Timeline from '../components/experience/Timeline.jsx';
import SkillsSection from '../components/skills/SkillsSection.jsx';
import ContactSection from '../components/contact/ContactSection.jsx';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

export default function Home() {
  const prefersReduced = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.title = 'Youssef Ben Ghorbel // Game & VR Developer';
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReduced) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 15; // Max 15px shift
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  return (
    <div className="page-enter" onMouseMove={handleMouseMove}>
      <Hero mousePos={mousePos} />
      <AboutSection />
      <ProjectSection />
      <Timeline />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

