import { useEffect } from 'react';
import Gate from './components/Gate/Gate';
import Navbar from './components/Navbar/Navbar';
import DeliveryRoad from './components/DeliveryRoad/DeliveryRoad';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Journey from './components/Journey/Journey';
import Builds from './components/Builds/Builds';
import Principles from './components/Principles/Principles';
import WhySde from './components/WhySde/WhySde';
import Skills from './components/Skills/Skills';
import Life from './components/Life/Life';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { profile } from './data/content';

export default function App() {
  useEffect(() => {
    // A little hello for the engineers who open DevTools.
    console.log('%c📦 Hey Amazon engineer!', 'font-size:20px;font-weight:800;color:#FF9A1F');
    console.log(
      `%cYou opened DevTools. I would have too; that's how I rebuilt my validation engine API-first.\n— Sonakshi · ${profile.email}`,
      'font-size:13px;color:#465063'
    );
  }, []);

  return (
    <>
      <Gate />
      <Navbar />
      <DeliveryRoad />
      <main>
        <Hero />
        <Stats />
        <Journey />
        <Builds />
        <Principles />
        <WhySde />
        <Skills />
        <Life />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
