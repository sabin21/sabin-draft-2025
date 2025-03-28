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
        pinSpacing: false,
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
          <li className='chip-item'><a href="">동서식품 소개</a></li>
          <li className='chip-item'><a href="">연혁</a></li>
          <li className='chip-item'><a href="">사업현황</a></li>
          <li className='chip-item'><a href="">부문역량</a></li>
          <li className='chip-item active'><a href="">관계사</a></li>
          <li className='chip-item'><a href="">CI</a></li>
          <li className='chip-item'><a href="">오시는 길</a></li>
        </ul>
      </div>

      <div className="page-wrap" ref={containerRef}>

        <section className='container flow-padding'>
          <div className="reveal-hero-copy-wrap">
            <div className="screen headline-screen">
              <div className="title-wrap">
                <img src="/dongsuh/img/company/family_logo_dongsuh.png" className="family-logo" />
                <h2>인간중심을 통해<br />미래가치를 창출, 사회에 공헌하는<br />세계적인 종합 식품회사</h2>
              </div>
            </div>

            <div className="visual-screen-outer">
              <div className="screen visual-screen">
                <div className="back-image-wrap">
                  <img src="/dongsuh/img/company/hero_dongsuh.jpg" className="back-image" />
                </div>
                <span className="overlay"></span>
              </div>
            </div>
            
            <div className="screen copy-screen">
              <div className="copy-wrap white">
                <p>
                  1975년에 설립된 주식회사 동서는 사회에 공헌하는 미래가치 창출을 기업 이념으로 
                  삼고 포장 제품 제조업을 기반으로 식자재 유통업, 해외 영업, 구매대행업으로 
                  사업 영역을 확대해왔으며, 1995년 코스닥 시장에 등록, 2017년 코스피에 등록되었습니다. <br/><br/>
                  
                  외형보다는 내실경영을 추구하여 건전한 재무구조와 경영의 투명성을 실현하고 있으며, 
                  고객 여러분의 건강증진과 생활편익을 도모하고자 끊임없는 기술개발에 매진하고 있습니다. 
                  21세기를 맞이하여 주식회사 동서 임직원은 급변하는 환경변화에 적극적이고 탄력적으로 
                  대응, 고객 여러분의 기대에 부응하는 동시에 업계를 주도하는 기업이 되겠습니다.
                </p>
                <ul className="info-box">
                  <li className='info-item'>
                    <span className='info-title'>홈페이지</span>
                    <span>
                      <a href="http://www.dongsuh.com" target="_blank">http://www.dongsuh.com</a>
                    </span>
                  </li>
                  <li className='info-item'>
                    <span className='info-title'>주소</span>
                    <span>
                      서울특별시 마포구 독막로 324(도화동, 동서빌딩) (우)04157
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='container flow-padding' style={{marginTop: "160px"}}>
          <div className="reveal-hero-copy-wrap">
            <div className="screen headline-screen">
              <div className="title-wrap">
                <img src="/dongsuh/img/company/family_logo_mondelez.png" className="family-logo" />
                <h2>전세계 165개국에 진출해 있는<br />초일류 식품기업</h2>
              </div>
            </div>

            <div className="visual-screen-outer">
              <div className="screen visual-screen">
                <div className="back-image-wrap">
                  <img src="/dongsuh/img/company/hero_mondelez.jpg" className="back-image" />
                </div>
                <span className="overlay"></span>
              </div>
            </div>
            
            <div className="screen copy-screen">
              <div className="copy-wrap white">
                <p>
                  Mondelez는 100여년의 역사와 전통을 자랑하는 Kraft에서 2012년 10월 11일 분사되어 
                  전세계 165개국에 진출해 있는 초일류 식품기업입니다.
                  즐거움이 있는 맛있는 순간을 만드는 것이 꿈인 Mondelez는 맛있는 커피, 비스킷, 초콜릿, 캔디, 
                  에너지음료, 껌 등의 식품을 제조하여 판매하고 있습니다.<br/><br/>
                    
                  Mondelez는 Mondelez 국제 재단을 통해 10억 달러 이상의 현금과 식품을 25년 동안 
                  기부해 오고 있으며, 지식이 풍부한 현지 전문가들과 협력하여 다양한 지역사회 
                  프로그램을 진행하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    
    </div>
  )
}