"use client"

import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import HeroVideoCarousel from './components/heroVideoCarousel';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper 스타일 import
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

export default function Home(){

  const containerRef1 = useRef<HTMLDivElement | null>(null);
  const contentRef1 = useRef<HTMLDivElement | null>(null);
  const containerRef2 = useRef<HTMLDivElement | null>(null);
  const contentRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const setupMarquee = (
      containerRef: React.RefObject<HTMLDivElement | null>,
      contentRef: React.RefObject<HTMLDivElement | null>
    ) => {
      if (!containerRef.current || !contentRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.offsetWidth;

      const cloneCount = Math.ceil(containerWidth / contentWidth) + 1;

      for (let i = 0; i < cloneCount; i++) {
        const clone = contentRef.current.cloneNode(true);
        containerRef.current.appendChild(clone);
      }
    };

    setupMarquee(containerRef1, contentRef1);
    setupMarquee(containerRef2, contentRef2);
  }, []);

  // const homeBackWrap = useRef<HTMLDivElement | null>(null);
  // const homeBackBig = useRef<HTMLDivElement | null>(null);

  useGSAP(()=>{
    const homeBackBig = document.querySelector(".big-one");
    ScrollTrigger.create({
      trigger:".home-csr-section",
      start:"top center",
      end:"+=600",
      animation: gsap.from(homeBackBig, {scale:0.5, backgroundColor:"#FCF5E6", duration:1}),
      scrub:true,
      // markers:true
    });
    ScrollTrigger.create({
      trigger:".home-news-section",
      start:"top center",
      end:"+=600",
      animation: gsap.to(homeBackBig, {bottom:"-10vw", right:'40vw', opacity:0.6 , duration:1}),
      scrub:true,
      // markers:true
    });
  }
);

  return(
    <>

      <section className="section-hero relative w-full min-h-screen overflow-hidden bg-[#999]">
        <HeroVideoCarousel />
      </section>

      <section className='home-product-section'>
        <div className="home-title-big">
          <div className="inner-wrap">
            <div className="headline-row">
              <h2 className='eng'>Products</h2>
              <button className="btn btn-home-more">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 15L13.5 10L8.5 5" stroke="black" strokeWidth="1.3334" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <p className='copy'>
              삶에 향기를 더하는 새로운<br />
              동서식품의 제품들
            </p>
          </div>
          
        </div>
        <div className="home-product-wrap">
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_1.png" alt="" />
              </div>
              <div className="card-body">
                <span className="card-body-inner">
                  <span className="brand-name">Kanu</span>
                  <h4>카누 싱글오리진 <br /> 에티오피아</h4>
                </span>
              </div>
              <div className="tag-new"></div>
            </span>
          </div>
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_2.png" alt="" />
              </div>
              <div className="card-body">
                <span className="card-body-inner">
                  <span className="brand-name">Kanu</span>
                  <h4>카누 싱글오리진 <br /> 에티오피아</h4>
                </span>
              </div>
              <div className="tag-new"></div>
            </span>
          </div>
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_3.png" alt="" />
              </div>
              <div className="card-body">
                <span className="card-body-inner">
                  <span className="brand-name">Kanu</span>
                  <h4>카누 싱글오리진 <br /> 에티오피아</h4>
                </span>
              </div>
            </span>
          </div>
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_4.png" alt="" />
              </div>
              <div className="card-body">
                <span className="card-body-inner">
                  <span className="brand-name">Kanu</span>
                  <h4>카누 싱글오리진 <br /> 에티오피아</h4>
                </span>
              </div>
              <div className="tag-new"></div>
            </span>
          </div>
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_5.png" alt="" />
              </div>
              <div className="card-body">
                <span className="card-body-inner">
                  <span className="brand-name">Kanu</span>
                  <h4>카누 싱글오리진 <br /> 에티오피아</h4>
                </span>
              </div>
            </span>
          </div>
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_6.png" alt="" />
              </div>
              <div className="card-body">
                <span className="card-body-inner">
                  <span className="brand-name">Kanu</span>
                  <h4>카누 싱글오리진 <br /> 에티오피아</h4>
                </span>
              </div>
            </span>
          </div>
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_7.png" alt="" />
              </div>
              <div className="card-body">
                <span className="card-body-inner">
                  <span className="brand-name">Kanu</span>
                  <h4>카누 싱글오리진 <br /> 에티오피아</h4>
                </span>
              </div>
              <div className="tag-new"></div>
            </span>
          </div>
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_8.png" alt="" />
              </div>
              <div className="card-body">
                <span className="card-body-inner">
                  <span className="brand-name">Kanu</span>
                  <h4>카누 싱글오리진 <br /> 에티오피아</h4>
                </span>
              </div>
            </span>
          </div>
        </div>
      </section>

      <section className='home-brand-section'>
        <span className='back-shape'>
          <span className='back-circle white'></span>
          <span className='back-circle orange'></span>
        </span>

        <div className="home-title-big">
          <div className="inner-wrap">
            <div className="headline-row">
              <h2 className='eng'>Brands</h2>
              <button className="btn btn-home-more">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 15L13.5 10L8.5 5" stroke="black" strokeWidth="1.3334" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <p className='copy'>
              생활속에 향기와 건강을 더하는<br />
              동서식품 브랜드들
            </p>
          </div>
          
        </div>

        <div className="brands-track-outer">
          <div className="brands-track-wrap" ref={containerRef1}>
            <div className="brands-track" ref={contentRef1}>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_maxim_1.png" alt="" />
              </span>
              <span className="track-item">
              <img src="/dongsuh/img/home/logo_maxwell.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_kanu.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_top.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_maxim_2.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_kanu_2.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_zeti.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_starbuck.png" alt="" />
              </span>
            </div>
          </div>

          <div className="brands-track-wrap track-2" ref={containerRef2}>
            <div className="brands-track marquee-back" ref={contentRef2}>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_tarra.png" alt="" />
              </span>
              <span className="track-item">
              <img src="/dongsuh/img/home/logo_frima.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_mite.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_phila.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_tea_1.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_tea_2.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_post.png" alt="" />
              </span>
              <span className="track-item">
                <img src="/dongsuh/img/home/logo_tio.png" alt="" />
              </span>
            </div>
          </div>
        </div>

      </section>

      <section className='home-csr-section'>
        <div className="home-title-big">
          <div className="inner-wrap">
            <div className="headline-row">
              <h2>사회공헌</h2>
            </div>
            
            <p className='copy'>
              따뜻한 함께하는 사회를 위한<br />
              동서식품의 사회공헌 활동
            </p>
          </div>
        </div>

        <div 
          className="csr-carousel-wrap"
        >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={
            {
              100:{
                slidesPerView:1.2,
                spaceBetween: 12,
              },
              1025:{
                slidesPerView:2,
                spaceBetween: 48,
              }
            }
          } 
          
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          autoplay={{
              delay: 3000
          }}
          speed={ 800 }
        >
        <SwiperSlide>
          <a className='home-csr-card' href='#'>
            <span className='back-img-wrap'>
              <img src="/dongsuh/img/csr/csr_1_hero.jpg" className="back-img" />
            </span>
            <div className="title-wrap">
              <h3>
                <span>삶의향기 동서문학상</span>
              </h3>
              <p>여성들의 문학활동을 지원하는 삶의향기 동서문학상</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className='home-csr-card' href='#'>
            <span className='back-img-wrap'>
              <img src="/dongsuh/img/csr/csr_2_hero.jpg" className="back-img" />
            </span>
            <div className="title-wrap">
              <h3>
                <span>맥심커피배 입신최강전</span>
              </h3>
              <p>국내 바둑 최강자를 가리는 맥심커피배 입신최강전</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className='home-csr-card' href='#'>
            <span className='back-img-wrap'>
              <img src="/dongsuh/img/csr/csr_3_hero.jpg" className="back-img" />
            </span>
            <div className="title-wrap">
              <h3>
                <span>동서커피클래식</span>
              </h3>
              <p>함께하는 삶의향기 동서커피클래식</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className='home-csr-card' href='#'>
            <span className='back-img-wrap'>
              <img src="/dongsuh/img/csr/csr_4_hero.jpg" className="back-img" />
            </span>
            <div className="title-wrap">
              <h3>
                <span>동서식품 장학회</span>
              </h3>
              <p>인재를 양성하여 국가발전에 기여하는 동서식품 장학회</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a className='home-csr-card' href='#'>
            <span className='back-img-wrap'>
              <img src="/dongsuh/img/csr/csr_5_hero.jpg" className="back-img" />
            </span>
            <div className="title-wrap">
              <h3>
                <span>맥심 사랑의 향기</span>
              </h3>
              <p>인생의 향기를 나누는 맥심 사랑의 향기</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className='home-csr-card' href='#'>
            <span className='back-img-wrap'>
              <img src="/dongsuh/img/csr/csr_6_hero.jpg" className="back-img" />
            </span>
            <div className="title-wrap">
              <h3>
                <span>동서식품 꿈의 도서관</span>
              </h3>
              <p>어린이들에게 도서를 기증하고 쾌적한 독서 환경을 조성</p>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
      <div
            className="swiper-button-prev"
          />
          <div
            className="swiper-button-next"
          />

        </div>
      </section>

      <div className="home-page-back">
        <span className="big-one"></span>
      </div>

      <section className='home-news-section'>
        <div className="container left-padding-container">
          <div className="title-red-circle">
            <span className='small-title'>DONGSUH</span>
            <h3 className='eng'>NEWS</h3>
            <button className='sub-circle-btn'>
              <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon-more-next-arrow'>
                <path d="M1 1L11 11L1 21" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className="inner-wrap">
            <div className="card-basic card-tvcf">
              <a href="">
                <div className="card-thumb">
                  <img src="/dongsuh/img/news_thumb_1.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className='title'>진하게 부드럽게 라떼처럼 즐겨봐!</h4>
                  <span className="desc">2024.12.10</span>
                </div>
              </a>
            </div>
            <div className="card-basic card-tvcf">
              <a href="">
                <div className="card-thumb">
                  <img src="/dongsuh/img/news_thumb_2.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className='title'>진하게 부드럽게 라떼처럼 즐겨봐!</h4>
                  <span className="desc">2024.12.10</span>
                </div>
              </a>
            </div>
            <div className="card-basic card-tvcf">
              <a href="">
                <div className="card-thumb">
                  <img src="/dongsuh/img/news_thumb_3.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className='title'>진하게 부드럽게 라떼처럼 즐겨봐!</h4>
                  <span className="desc">2024.12.10</span>
                </div>
              </a>
            </div>
            <div className="card-basic card-tvcf">
              <a href="">
                <div className="card-thumb">
                  <img src="/dongsuh/img/news_thumb_1.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className='title'>진하게 부드럽게 라떼처럼 즐겨봐!</h4>
                  <span className="desc">2024.12.10</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='home-tvcf-section'>
        <div className="container left-padding-container">
          <div className="title-red-circle">
            <span className='small-title'>DONGSUH</span>
            <h3 className='eng'>TV CF</h3>
            <button className='sub-circle-btn'>
              <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon-more-next-arrow'>
                <path d="M1 1L11 11L1 21" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className="inner-wrap">
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
      </section>

      </>
      // </ReactLenis>
  )
}