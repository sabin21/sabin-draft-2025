"use client"

import React from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BrandsList(){
 
  const tlHeroVideo = gsap.timeline();
  const tlBackEnd = gsap.timeline();
  
  useGSAP(() => {

    const sectionTvcf = document.querySelector('.brand-section-tvcf');
    const sectionSns = document.querySelector('.brand-section-sns');

    ScrollTrigger.create({
      trigger: ".brand-hero",
      animation: tlHeroVideo.to(".brand-hero-visual",{
        width: "100%", height: "100vh", top:0, right:0, borderRadius:0
      }).to('.brand-overlay',{opacity:0.6}, '-=0.8'),
      scrub:1,
      start: "top top",
      end: "bottom bottom",
    });

    ScrollTrigger.create({
      trigger: ".brand-hero",
      endTrigger: ".brand-section-copy",
      animation: gsap.to(".brand-copy",{opacity:1}),
      scrub:1,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false
    });

    ScrollTrigger.create({
      trigger: ".brand-section-product",
      animation: gsap.to(".back-shape-big",{
        scale:6, left:"0%",ease: "none"
      }),
      scrub:1,
      start: "center center",
      end: "bottom bottom",
    });

    if (sectionTvcf !== null && sectionTvcf.classList.contains('brand-section-tvcf')) {
      ScrollTrigger.create({
        trigger: ".brand-section-tvcf",
        animation: gsap.to(".back-shape-big",{
          backgroundColor:"#FFEAC6", ease: "none"
        }),
        scrub:1,
        start: "top 30%",
        end: "center 70%",
      });
    }

    if (sectionSns !== null && sectionSns.classList.contains('brand-section-sns')) {
      ScrollTrigger.create({
        trigger: ".brand-section-sns",
        animation: tlBackEnd.to(".back-color-chip",{
          opacity:0.1, ease: "none"
        }).to(".back-shape-big",{
          opacity:0, ease: "none"
        }, '-=0.3'),
        scrub:1,
        start: "top 30%",
        end: "+=200",
      });
    }
  });

  return(
    <>
      <div className="brand-background-wrap">
        <span className='back-shape back-shape-second'></span>
        <span className='back-shape back-shape-small'></span>
        <span className='back-shape back-shape-big'></span>
        <span className='back-color-chip'></span>
      </div>

      <div className="container">  
        <div className='brand-intro-head'>
          <img src="/dongsuh/img/brand_logo_transperent/brand_color_maxim.png" className="brand-logo" />
          <h2 className='brand-headline'>
            <span className='brand-headline-row'>언제 어디서나</span>
            <span className='brand-headline-row'>좋은 커피 맥심</span>
          </h2>
        </div>
      </div>

      <section className='brand-hero'>
        <div className="brand-hero-visual">
          <video muted loop autoPlay playsInline className='visual'>
            <source src="/dongsuh/videos/hero_maxim_white.mp4" />
          </video>
          <span className="brand-overlay"></span>
        </div>
      </section>

      <section className='brand-copy-wrap brand-section-copy'>
        <div className='brand-copy'>
          1980년 발매된 이후 동서식품의 주력 브랜드로 성장한 맥심은 한국의 커피시장을 선도하는 
          시장점유율 1위의 No.1 브랜드로 확고한 위치를 차지하고 있습니다. 맥심은 국내 커피 역사를 
          이끌어 온 정통성과 세계적인 기술력, 커피전문가의 노하우로 고품질의 커피 본연의 맛과 향을 
          즐길 수 있는 좋은 커피입니다.<br/><br/>
          맥심은 일상 속 작은 휴식과 여유이며, 새로운 기운을 불어 넣어줍니다. 
          마음과 마음이 이어지는 순간 맥심은 행복을 전해주는 좋은 커피로 다가갑니다.
        </div>
      </section>

      <section className='brand-intro-section brand-section-product'>

        <div className="container">

          <div className="brand-section-title">
            대표 제품
          </div>

          <div className="brand-content-outer">
            <div className="brand-content-wrap">
              <div className="brand-product-card">
                <a href="">
                  <img src="/dongsuh/img/brand_products/Maxim_img_product_view_500x500_21.png" alt="" />
                  <h4>맥심 모카골드 마일드 커피믹스</h4>
                </a>
              </div>
              <div className="brand-product-card">
                <a href="">
                  <img src="/dongsuh/img/brand_products/Maxim_img_product_view_500x500_51.png" alt="" />
                  <h4>맥심 모카골드 마일드 커피믹스</h4>
                </a>
              </div>
              <div className="brand-product-card">
                <a href="">
                  <img src="/dongsuh/img/brand_products/Maxim_img_product_view_500x500_31.png" alt="" />
                  <h4>맥심 모카골드 마일드 커피믹스</h4>
                </a>
              </div>
              <div className="brand-product-card">
                <a href="">
                  <img src="/dongsuh/img/brand_products/img_product_view_500x500_67.png" alt="" />
                  <h4>맥심 모카골드 마일드 커피믹스</h4>
                </a>
              </div>
            </div>
            <div className='btn-bar'>
              <button className='btn btn-basic'>전체제품 보기</button>
            </div> 
          </div>
          
        </div>

      </section>

      <section className='brand-intro-section brand-section-tvcf'>

        <div className="container">

          <div className="brand-section-title">
            관련 TV CF
          </div>

          <div className="brand-content-outer">
            <div className="brand-content-wrap">
              <div className="card-basic card-tvcf">
                <a href="">
                  <div className="card-thumb">
                    <img src="/dongsuh/img/tvcf_thumb/cf_1.png" alt="" />
                  </div>
                  <div className="card-body">
                    <h4 className='title'>진하게 부드럽게 라떼처럼 즐겨봐!</h4>
                    <span className="desc">맥심 모카골드</span>
                  </div>
                </a>
              </div>
              <div className="card-basic card-tvcf">
                <a href="">
                  <div className="card-thumb">
                    <img src="/dongsuh/img/tvcf_thumb/cf_2.png" alt="" />
                  </div>
                  <div className="card-body">
                    <h4 className='title'>진하게 부드럽게 라떼처럼 즐겨봐!</h4>
                    <span className="desc">맥심 모카골드</span>
                  </div>
                </a>
              </div>
              <div className="card-basic card-tvcf">
                <a href="">
                  <div className="card-thumb">
                    <img src="/dongsuh/img/tvcf_thumb/cf_3.png" alt="" />
                  </div>
                  <div className="card-body">
                    <h4 className='title'>진하게 부드럽게 라떼처럼 즐겨봐!</h4>
                    <span className="desc">맥심 모카골드</span>
                  </div>
                </a>
              </div>
              <div className="card-basic card-tvcf">
                <a href="">
                  <div className="card-thumb">
                    <img src="/dongsuh/img/tvcf_thumb/cf_4.png" alt="" />
                  </div>
                  <div className="card-body">
                    <h4 className='title'>진하게 부드럽게 라떼처럼 즐겨봐!</h4>
                    <span className="desc">맥심 모카골드</span>
                  </div>
                </a>
              </div>
              
            </div>
          </div>
          
        </div>
        
      </section>

      <section className='brand-intro-section brand-section-sns'>

        <div className="container">

          <div className="brand-section-title">
            SNS 소식
          </div>

          <div className="brand-content-outer">
            <div className="brand-content-wrap">
              <div className="card-basic brand-sns-card">
                <img src="/dongsuh/img/brand_sns_dummy.png" alt="" />
              </div>
              <div className="card-basic brand-sns-card">
                <img src="/dongsuh/img/brand_sns_dummy.png" alt="" />
              </div>
              <div className="card-basic brand-sns-card">
                <img src="/dongsuh/img/brand_sns_dummy.png" alt="" />
              </div>
              <div className="card-basic brand-sns-card">
                <img src="/dongsuh/img/brand_sns_dummy.png" alt="" />
              </div>

            </div>
          </div>
          
        </div>
        
      </section>
      
    </>
  )
}