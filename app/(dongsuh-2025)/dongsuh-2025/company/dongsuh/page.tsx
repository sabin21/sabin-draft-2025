"use client"

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
// import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SectorList(){

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.reveal-hero-copy-wrap');

    sections.forEach((section) => {
      const element = section.querySelector(".visual-screen");
      const overlay = section.querySelector(".overlay");
      const visualScreen = section.querySelector(".visual-screen-outer");
      const copyScreen = section.querySelector(".copy-screen");
      const visualTl = gsap.timeline();
      const overlayTl = gsap.timeline();

      if (!element) return;

      ScrollTrigger.create({
        trigger: section,
        animation: visualTl.to(element, {width:"100%", height:"100%"}),
        scrub: 1,
        start: "top 40%",
        end: "+=200",
      });

      ScrollTrigger.create({
        trigger: visualScreen,
        endTrigger: copyScreen,
        scrub:1,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        animation: overlayTl.to(overlay, {opacity: 1})
      });
    });

  }, { scope: containerRef });

  return(
    <div className='page-inner-wrap'>
      
      <div className='page-title-wrap'>
        <h2 className='page-title'>동서식품</h2>
      </div>

      <div className="chip-nav-wrap">
        <ul className='chip-nav'>
          <li className='chip-item active'><a href="">동서식품 소개</a></li>
          <li className='chip-item'><a href="">연혁</a></li>
          <li className='chip-item'><a href="">사업현황</a></li>
          <li className='chip-item'><a href="">부문역량</a></li>
          <li className='chip-item'><a href="">관계사</a></li>
          <li className='chip-item'><a href="">CI</a></li>
          <li className='chip-item'><a href="">오시는 길</a></li>
        </ul>
      </div>

      <div className="page-wrap" ref={containerRef}>

        <section className='container flow-padding'>
          <div className="reveal-hero-copy-wrap">
            <div className="screen headline-screen">
              <div className="title-wrap">
                <h2>동서식품은 1968년 5월 23일<br /> 첫 출범을 한 이후 꾸준한 발전을<br />거듭해 왔습니다.</h2>
              </div>
            </div>

            <div className="visual-screen-outer">
              <div className="screen visual-screen">
                <div className="back-image-wrap">
                  <img src="/dongsuh/img/company/hero_intro.jpg" className="back-image" />
                </div>
                <span className="overlay"></span>
              </div>
            </div>
            
            <div className="screen copy-screen">
              <div className="copy-wrap white">
                <p>
                  다양한 계열의 커피제품들과 커피크리머, 녹차, 곡물차, 시리얼, 벌꿀, 치즈, 비스킷 등 
                  최고 품질의 제품들로 한국 식품 문화의 선진화를 선도해 오고 있는 동서식품은 
                  끊임없는 투자와 연구개발로 항상 고객만족을 위해 최선을 다하고 있습니다. <br/><br/>
                  
                  늘 고객을 최우선으로 생각하고 고품질의 제품 생산, 사회적 책임실현, 환경을 
                  생각하는 경영으로 여러분의 삶에 향기를 가져다 드리는 식품 회사가 되도록 노력하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='section-ceo'>



        </section>

      </div>
    
    </div>
  )
}