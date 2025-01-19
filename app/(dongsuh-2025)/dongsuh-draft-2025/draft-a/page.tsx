"use client"

// import React, { useRef, useState, useEffect } from 'react';
// import { useMouse } from 'react-use';

import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../../styles/draft_a.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function DraftBHome() {
  
  const tlHeroVideo = gsap.timeline();

  useGSAP(() => {
    
    ScrollTrigger.create({
      trigger: ".section-hero",
      endTrigger: ".section-2",
      animation:tlHeroVideo.to(".hero-video-wrap",{
        width: "100vw", height: "100vh", top:0, right:0, borderRadius:0, ease: "none"
      }).add(() =>{}, "+=0.4"),
      // animation:tlHeroVideo.fromTo(".hero-video-wrap",{width: '196px', height: '137px', top: "calc(50% - 145px)", right:"calc(50% - 370px)" },{
      //   width: "100vw", height: "100vh", top:0, right:0, borderRadius:0, ease: "none"
      // }).add(() =>{}, "+=0.4"),
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

        <section className="section section-hero" >
          <div className="hero-title">
            <div className="hero-title-inner">
              <img src="/dongsuh_2025/a_hero_title.png" />
              
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

        <section className="section section-product">
          <span className="back-gradient"></span>
          <div className="back-shape">
            <span className="big-circle"></span>
            <span className="point-circle">
              <span className="text">HOT</span>
            </span>
          </div>
          <div className="section-title title-product">
            <img src="/dongsuh_2025/a_title_product.png" className="title-img" />
          </div>
        
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={72}
              slidesPerView={4}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}             
               className="product-swiper-container"
            >
              <SwiperSlide className="product-slide">
                <Link href="/dongsuh-draft-2025/draft-a-depth">
                <div className="product-slide-inner">
                  <img src="/dongsuh_2025/product_1.png" />
                  <h4>카누 마일드로스트 아메리카노</h4>
                </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="product-slide">
                <Link href="/dongsuh-draft-2025/draft-a-depth">
                <div className="product-slide-inner">
                  <img src="/dongsuh_2025/product_2.png" />
                  <h4>맥심 티오피 스모키 블랙</h4>
                </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="product-slide">
              <Link href="/dongsuh-draft-2025/draft-a-depth">
                <div className="product-slide-inner">
                  <img src="/dongsuh_2025/product_3.png" />
                  <h4>카누 싱글오리진 에티오피아</h4>
                </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="product-slide">
              <Link href="/dongsuh-draft-2025/draft-a-depth">
                <div className="product-slide-inner">
                  <img src="/dongsuh_2025/product_4.png" />
                  <h4>카누 에스프레소 쇼콜라 라떼</h4>
                </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="product-slide">
              <Link href="/dongsuh-draft-2025/draft-a-depth">
                <div className="product-slide-inner">
                  <img src="/dongsuh_2025/product_5.png" />
                  <h4>포스트 단백질바 미니</h4>
                </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="product-slide">
              <Link href="/dongsuh-draft-2025/draft-a-depth">
                <div className="product-slide-inner">
                  <img src="/dongsuh_2025/product_6.png" />
                  <h4>맥심 화이트골드 커피믹스</h4>
                </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="product-slide">
              <Link href="/dongsuh-draft-2025/draft-a-depth">
                <div className="product-slide-inner">
                  <img src="/dongsuh_2025/product_7.png" />
                  <h4>맥심 슈프림골드 커피믹스</h4>
                </div>
                </Link>
              </SwiperSlide> 
            </Swiper>
        </section>

        <section className="section section-csr border">
          <div className="section-title title-csr">
            <img src="/dongsuh_2025/a_title_csr.png" className="title-img" />
            <img src="/dongsuh_2025/a_csr_btn.png" className="btn-img" />
          </div>
          <div className="csr-row">
            <div className="row-track">
              <div className="card-csr">
                <img src="/dongsuh_2025/a_csr_1.png" className="img" />
              </div>
              <div className="card-csr">
                <img src="/dongsuh_2025/a_csr_2.png" className="img" />
              </div>
              <div className="card-csr">
                <img src="/dongsuh_2025/a_csr_3.png" className="img" />
              </div>
              <div className="card-csr">
                <img src="/dongsuh_2025/a_csr_4.png" className="img" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-news">
          <div className="section-title title-news">
            <img src="/dongsuh_2025/a_title_news.png" className="title-img" />
            <img src="/dongsuh_2025/a_more_btn.png" className="btn-img" />
          </div>
          <div className="content-wrap">
            <img src="/dongsuh_2025/a_news.png" alt="" />
          </div>
          
        </section>
        
        <section className="section section-webzine">
          <span className="back-color"></span>
          <Image src={"/dongsuh_2025/webzine_full.png"} alt="" width={1402} height={1320} className="full-img"></Image>
        </section>

        <section className="section section-sns">
          <Image src={"/dongsuh_2025/sns_full.png"} alt="" width={1402} height={560} className="full-img"></Image>
        </section>
      </main>

      <footer className="footer">
        <img src="/dongsuh_2025/draft_b/footer.png" className="full-img" />
      </footer>
    </div>

  );
}
