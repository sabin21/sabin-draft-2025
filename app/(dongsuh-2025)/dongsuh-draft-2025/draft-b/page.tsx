"use client"


// import { useRef } from 'react';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../../styles/draft_b.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function DraftBHome() {
  // const main = useRef<HTMLElement | any>();
  useGSAP(() => {
    // const tlHeroVideo = gsap.timeline({
    //   ScrollTrigger: {
    //     trigger: ".section-hero",
    //     start: "+=600",
    //     end: "+=800 center",
    //     scrub: 0.5,
    //   },
    // });
    ScrollTrigger.create({
      trigger: ".section-hero",
      animation:gsap.to(".hero-video-wrap",{
        width: "100vw", height: "100vh", top:0, right:0
      }),
      scrub:0.5,
      start: "+=10",
      end: "+=800",
      pin: true,
      pinSpacing: false
    })

  });

  return (
      <main className="main">

        <header className="app-header">
          <div className="inner">
            <div className="logo">
              <img src="/dongsuh_2025/logo_default.png" />
            </div>
            <ul className="nav-menu">
              <li className="menu-item">회사소개</li>
              <li className="menu-item">제품안내</li>
              <li className="menu-item">홍보센터</li>
              <li className="menu-item">사회공헌</li>
              <li className="menu-item">고객센터</li>
            </ul>
            <div className="right-util">
              <img src="/dongsuh_2025/b_header_right.png" />
            </div>
          </div>
        </header>

        <section className="section section-hero">
          <div className="hero-title">
            <div className="hero-title-inner">
              <img src="/dongsuh_2025/a_hero_title.png" />
              <div className="hero-video-wrap">
                <video src="/dongsuh_2025/hero_1.mp4" muted loop autoPlay className="hero-video"></video>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          
          
        </section>

      </main>
      

  );
}
