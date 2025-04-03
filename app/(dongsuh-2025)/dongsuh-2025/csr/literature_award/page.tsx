"use client"

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
// import { useState, useEffect } from 'react';



gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BrandsList(){

  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(()=>{
    const sections = gsap.utils.toArray<HTMLElement>('.left-reveal-stagger-wrap');
    
    
    const imgAnimation = gsap.to(".left-img-wrap:not(:first-child)", {
      height:"100%", duration:1, stagger:1
    });

    sections.forEach((section) => {
      const wrapEle = section.querySelector(".left-reveal-stagger-wrap .right-scroll-track");
      const imgEle = section.querySelector(".left-reveal-stagger-wrap .left-img-track");
      gsap.set(".left-img-wrap:not(:first-child)", {height:0});

      ScrollTrigger.create({
        trigger:wrapEle,
        start:"top top",
        end:"bottom bottom",
        pin:imgEle,
        animation: imgAnimation,
        scrub:true,
        pinSpacing:false,
        // markers:true
      })
    });
  });

  return(
    <div className='page-inner-wrap'>

      <div className="full-hero-wrap hero-rounded">
        <div className="full-img csr-1"></div>
        <div className="hero-title">
          <h1>삶의 향기 동서문학상</h1>
          <p className='desc'>여성들의 문학활동을 지원하는<br />삶의 향기 동서문학상</p>
        </div>
      </div>

      <section className="container flow-padding grid-col1-2 left-reveal-stagger-wrap" ref={containerRef}>

        <div className="left-img-track">
          <div className="left-img-viewer">
            <div className="left-img-wrap">
              <img src="/dongsuh/img/csr/csr_1_1.png" alt="" />
            </div>
            <div className="left-img-wrap">
              <img src="/dongsuh/img/csr/csr_1_2.png" alt="" />
            </div>
            <div className="left-img-wrap">
              <img src="/dongsuh/img/csr/csr_1_3.png" alt="" />
            </div>
          </div>
        </div>

        <div className="right-scroll-track">
          <div className="csr-content-block">
            <div className="picture">
              <img src="/dongsuh/img/csr/csr_1_1.png" alt="" />
            </div>
            <div className="text-block">
              <h2 className='title-csr'>
                <span className='text'>삶의 향기 동서문학상이란?</span>
              </h2>
              <h4 className="sub-title">
                여성들의 문학활동을 지원하기 위해 동서식품이 제정한 문화후원사업입니다.
              </h4>
              <p>
                삶의 향기가 문학이 됩니다.2024년 17회를 맞이한 ‘삶의향기 동서문학상’은 
                지난 16회 총 18,539편의 작품 응모수를 기록하며 국내 최대 규모의 여성 신인 
                문학상으로 위치를 굳건히 하게 되었습니다.
              </p>
            </div>
          </div>

          <div className="csr-content-block">
            <div className="picture">
              <img src="/dongsuh/img/csr/csr_1_2.png" alt="" />
            </div>
            <div className="text-block">
              <p>
                1973년 ‘주부에세이’로 시작해 1989년 ‘동서커피문학상’으로 제정되어 36년이란 
                오랜 시간 동안 문학을 사랑하시는 여러분과 함께해온 삶의향기 동서문학상은 
                그간의 성과에 안주하지 않고 문학의 향기, 삶의 향기를 더욱 널리 퍼지게 하기 
                위해 지속적으로 노력하고 있습니다.
              </p>
            </div>
          </div>

          <div className="csr-content-block">
            <div className="picture">
              <img src="/dongsuh/img/csr/csr_1_3.png" alt="" />
            </div>
            <div className="text-block">
              <p>
                17회 문학상에서도 꾸준한 여성 문인 발굴 및 후원으로 한국 문학을 대표하는 
                여성 문인의 산실로 자리매김하기 위해 작가와 함께 하는 온라인 멘토링 
                클래스 / 멘토링 게시판 등의 행사들을 통해 다채로운 문화의 장을 마련하였습니다.
                <br /><br />
                앞으로도 ‘삶의향기 동서문학상’이 여러분의 작품 속 삶의 향기를 많은 이들과 
                나누는 가교 역할을 할 수 있기를 기대합니다.
              </p>
            </div>
          </div>

        </div>
      </section>
      
      <section className='past-event-section'>
        <div className="container">

          <div className="past-event-wrap">
            <h3>개최내역</h3>
            <div className="past-event-nav">
              <div className="past-event-nav-wrap">
                <button className='past-event-nav-item active'>17회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
                <button className='past-event-nav-item'>16회</button>
              </div>
            </div>

            <div className="past-event-card">

            </div>
          </div>

        </div>
      </section>

      <section className="container flow-padding grid-col1-2 left-reveal-stagger-wrap" ref={containerRef}>

        <div className="left-img-track">
          <div className="left-img-viewer">
            <div className="left-img-wrap">
              <img src="/dongsuh/img/csr/csr_1_4.png" alt="" />
            </div>
            {/* <div className="left-img-wrap">
              <img src="/dongsuh/img/csr/csr_1_5.png" alt="" />
            </div> */}
          </div>
        </div>

        <div className="right-scroll-track">
          <div className="csr-content-block">
            <div className="picture">
              <img src="/dongsuh/img/csr/csr_1_4.png" alt="" />
            </div>
            <div className="text-block">
              <h2 className='title-csr'>
                <span className='text'>동서문학회</span>
              </h2>
              <h4 className="sub-title">
                동서문학회는 삶의향기 동서문학상 수상자들이 자체적으로 결성한 모임입니다.
              </h4>
              <p>
                시, 소설, 수필, 아동문학에 관심 있는 회원들이 서로의 생활 체험과 문화적 정서를 함께 나누는 문학 사랑방의 역할을 하고 있습니다.
                동서식품이 문학강연, 문학기행, 동인지 발간 등의 문학활동을 지원하고 있습니다.
              </p>
              <p>
              전국 각지에서 회원들이 활동하고 있으며 동서문학회를 디딤돌 삼아 문단에 진출하여 작가로서 활발한 활동을 펴고 있는 회원들도 늘어나고 있습니다.

앞으로도 동서문학회를 성원하여 주시고 많은 관심을 보내 주시길 바랍니다.
              </p>
            </div>
          </div>

          

        </div>
      </section>

    </div>
  )
}