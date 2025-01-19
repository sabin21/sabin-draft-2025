"use client"

import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import "../../styles/draft_a_mo.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function DraftBHome() {
  
  const tlHeroVideo = gsap.timeline();

  useGSAP(() => {
    
    ScrollTrigger.create({
      trigger: ".section-hero",
      endTrigger: ".section-2",
      animation:tlHeroVideo.to(".hero-video-wrap",{
        width: "100vw", height: "100vh", top:0, right:0, borderRadius:0, ease: "none"
      }).add(() =>{}, "+=0.6"),
      scrub:0.5,
      start: "+=5",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false
    });

  });

  return (
    <div>
      <main className="main">

        <header className="app-header">
          <div className="inner">
            <div className="logo">
              <img src="/dongsuh_2025/logo_default.png" />
            </div>
            <div className="right-util">
              <img src="/dongsuh_2025/b_header_right.png" />
            </div>
          </div>
        </header>

        <section className="section section-hero" >
          <div className="hero-title">
            <div className="hero-title-inner">
              <img src="/dongsuh_2025/a_hero_title_mo.png" />
              
            </div>
          </div>
          <div className="hero-video-wrap" >
            <video src="/dongsuh_2025/hero_1.mp4" muted loop autoPlay className="hero-video"></video>
          </div>
        </section>

        <section className="section section-2">
          <div className="video-title">
            <span className="copy-row copy-row-1">세상의 모든 순간이</span>
            <span className="copy-row copy-row-2">더 행복해지도록</span>
          </div>
        </section>

        <div className="a-home-mo-full bg-white">
          <a href="/dongsuh-draft-2025/draft-a-depth-mo">
            <Image src={'/dongsuh_2025/a_mo_full.png'} width={390} height={4635} alt="" className="full-img"></Image>
          </a>
        </div>
      </main>

    </div>

  );
}
