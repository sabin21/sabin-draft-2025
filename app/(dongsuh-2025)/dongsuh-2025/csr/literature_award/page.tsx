"use client"

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
// import { useState, useEffect } from 'react';



gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BrandsList(){

  const tlViewer = gsap.timeline();
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(()=>{

    ScrollTrigger.create({
      trigger: ".csr-content-section",
        start: "top 50%",
        end: "+=300",
        animation: tlViewer
        .to('.full-hero-wrap', { scale:0.8, duration:2})
        .to('.back-color',{backgroundColor:'#F2E9DE'}, -2),
        scrub: true,
    }); 

    const cards = sectionRef.current?.querySelectorAll('.csr-content-block');
    
    if(cards){
      cards.forEach((card)=>{
        gsap.to(card,{
          y: 0,
          duration: 0.5,
          scrollTrigger:{
            trigger: card,
            start:"top bottom-=100",
            end: "bottom 80%",
            scrub:true
          }
        })
      })
    }

    ScrollTrigger.create({
      trigger: ".past-event-section",
        start: "top 70%",
        end: "+=300",
        animation: gsap.to('.back-color',{backgroundColor:'#554539'}),
        scrub: true,
    }); 
    
  
  });

  return(
    <div className='page-inner-wrap'>

      <span className="back-color"></span>

      <div className="full-hero-wrap hero-rounded">
        <div className="full-img csr-1"></div>
        <div className="hero-title">
          <h1>삶의 향기 동서문학상</h1>
          <p className='desc'>여성들의 문학활동을 지원하는<br />삶의 향기 동서문학상</p>
        </div>
      </div>

      <section className="csr-content-section">
        <div className="container narrow" ref={sectionRef}>

          <div className="csr-content-block">
            <div className="picture">
              <img src="/dongsuh/img/csr/csr_1_1.png" alt="" />
            </div>
            <div className="text-block">
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

    </div>
  )
}