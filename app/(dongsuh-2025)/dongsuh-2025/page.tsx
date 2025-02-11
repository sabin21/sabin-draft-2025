"use client"

import React, { useEffect, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AppHeader from "./components/header";
import HeroVideoCarousel from './components/heroVideoCarousel';

gsap.registerPlugin(ScrollTrigger);

export default function Home(){
  // const [isGhost, setIsGhost] = useState(true);
  return(
    <>
      <AppHeader isGhost={true} />
      <section className="section-hero relative w-full min-h-screen overflow-hidden bg-[#999]">
        <HeroVideoCarousel />
      </section>
    </>
  )
}