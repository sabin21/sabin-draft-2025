"use client"
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import "../../styles/draft_b.css";

gsap.registerPlugin(ScrollTrigger);

export default function DraftBHome() {
  
  const heroMenu = ['찬바람 불때 미떼', '나에게 더 부드럽게', '나를 찾는 순간'];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.product-card .product-img');

      gsap.fromTo(cards, {
        x:300
      },{
        x: 0,
        duration: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      });
    }
  }, []);

  return (
    <div>
      <main className="main">

        <header className="app-header">
          <div className="inner">
            <div className="logo">
              <img src="/dongsuh_2025/logo_white.png" />
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

        <section className="section-hero">
          
            <Swiper
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              pagination={{
                el: '.hero-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + "pagination-item " + className + '">' + (heroMenu[index]) + '</span>';
                },
              }}
              className="hero-swiper-container" >
              <SwiperSlide className="hero-slide">
                <video muted autoPlay loop playsInline preload="none" src="/dongsuh_2025/hero_mite.mp4" className="hero-video">
                </video>
                <div className="hero-title-wrap">
                  <img src="/dongsuh_2025/draft_b/hero_logo_mite.png" className="hero-logo" />
                  <h2>부드러운 거품속 <br />더 진해진 초콜릿맛</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero-slide">
                <video muted autoPlay loop playsInline preload="none" src="/dongsuh_2025/hero_maxim_white.mp4" className="hero-video">
                </video>
                <div className="hero-title-wrap">
                <img src="/dongsuh_2025/draft_b/hero_logo_maxim.png" className="hero-logo" />
                  <h2>나에게 더 부드럽게 <br />맥심 화이트골드</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero-slide">
                <video muted autoPlay loop playsInline preload="none" src="/dongsuh_2025/hero_kanu.mp4" className="hero-video">
                </video>
                <div className="hero-title-wrap">
                <img src="/dongsuh_2025/draft_b/hero_logo_kanu.png" className="hero-logo" />
                  <h2>나를 찾는 순간, <br />나를 찾는 커피</h2>
                </div>
              </SwiperSlide>
              <div className="hero-pagination swiper-pagination"></div>
            </Swiper>

        </section>

        <section className="section section-product" ref={containerRef} >
          <div className="section-title-wrap">
            <img src="/dongsuh_2025/draft_b/section_title_product.png" className="section-title-img" />
          </div>
          <a href="/dongsuh-draft-2025/draft-b-depth">
            <div className="product-card-wrap">
              <div className="product-card color-1">
                <img src="/dongsuh_2025/draft_b/product_1.png" className="product-img" />
                <img src="/dongsuh_2025/draft_b/badge_new.png" className="badge-new" />
              </div>
              <div className="product-card color-2">
                <img src="/dongsuh_2025/draft_b/product_2.png" className="product-img" />
                <img src="/dongsuh_2025/draft_b/badge_new.png" className="badge-new" />
              </div>
              <div className="product-card color-3">
                <img src="/dongsuh_2025/draft_b/product_3.png" className="product-img" />
              </div>
              <div className="product-card color-4">
                <img src="/dongsuh_2025/draft_b/product_4.png" className="product-img" />
                <img src="/dongsuh_2025/draft_b/badge_new.png" className="badge-new" />
              </div>
              <div className="product-card color-4">
                <img src="/dongsuh_2025/draft_b/product_5.png" className="product-img" />
              </div>
              <div className="product-card color-3">
                <img src="/dongsuh_2025/draft_b/product_6.png" className="product-img" />
              </div>
              <div className="product-card color-2">
                <img src="/dongsuh_2025/draft_b/product_7.png" className="product-img" />
                <img src="/dongsuh_2025/draft_b/badge_new.png" className="badge-new" />
              </div>
              <div className="product-card color-1">
                <img src="/dongsuh_2025/draft_b/product_8.png" className="product-img" />
              </div>
            </div>
          </a>
        </section>

        <section className="section section-brands">
          <div className="section-title-wrap">
            <img src="/dongsuh_2025/draft_b/section_title_brand.png" className="section-title-img" />
          </div>
          <div className="brands-track-wrap">
            <div className="brands-track">
              <img src="/dongsuh_2025/draft_b/logo_maxim_1.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_maxwell.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_kanu.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_top.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_maxim_2.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_kanu_2.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_zeti.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_starbuck.png" alt="" />
            </div>
            <div className="brands-track">
              <img src="/dongsuh_2025/draft_b/logo_maxim_1.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_maxwell.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_kanu.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_top.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_maxim_2.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_kanu_2.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_zeti.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_starbuck.png" alt="" />
            </div>
          </div>

          <div className="brands-track-wrap reverse">
            <div className="brands-track">
              <img src="/dongsuh_2025/draft_b/logo_tarra.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_frima.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_mite.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_phila.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_tea_1.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_tea_2.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_post.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_tio.png" alt="" />
            </div>
            <div className="brands-track">
              <img src="/dongsuh_2025/draft_b/logo_tarra.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_frima.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_mite.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_phila.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_tea_1.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_tea_2.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_post.png" alt="" />
              <img src="/dongsuh_2025/draft_b/logo_tio.png" alt="" />
            </div>
          </div>

          {/* <img src="/dongsuh_2025/draft_b/brands_logo_img.png" alt="" /> */}
        </section>

        <section className="section section-csr">
          <div className="section-title-wrap">
            <img src="/dongsuh_2025/draft_b/section_title_csr.png" className="section-title-img" />
          </div>
          <img src="/dongsuh_2025/draft_b/csr_img.png" alt="" />
        </section>
        
        <section className="section section-news">
          <img src="/dongsuh_2025/draft_b/news_full.png" className="full-img" />
        </section>
        
      </main>

      <footer className="footer">
        <img src="/dongsuh_2025/draft_b/footer_content.png" className="full-img" />
      </footer>
    </div>
      
      

  );
}
