"use client"

// import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import "../../styles/draft_b.css";

export default function DraftBHome() {

  const heroMenu = ['찬바람 불때 미떼', '나에게 더 부드럽게', '나를 찾는 순간']

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
                renderBullet: function (index) {
                  return '<span class="' + "pagination-item"  + '">' + (heroMenu[index]) + '</span>';
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
              <div className="hero-pagination swiper-pagination">
                {/* <a className="pagination-item swiper-pagination-bullet">
                  <span className="title">찬바람 불때 <br/> 미떼</span>
                </a>
                <a className="pagination-item swiper-pagination-bullet">
                  <span className="title">ㅇㄻㅇㄹ <br/> 미떼</span>
                </a>
                <a className="pagination-item swiper-pagination-bullet">
                  <span className="title">찬바람 불때 <br/> 미떼</span>
                </a> */}
              </div>
            </Swiper>

        </section>

        <section className="section section-product">
          <div className="section-title-wrap">
            <img src="/dongsuh_2025/draft_b/section_title_product.png" className="section-title-img" />
          </div>
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
        </section>

        <section className="section section-brands">
          <div className="section-title-wrap">
            <img src="/dongsuh_2025/draft_b/section_title_brand.png" className="section-title-img" />
          </div>
          <img src="/dongsuh_2025/draft_b/brands_logo_img.png" alt="" />
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
        <img src="/dongsuh_2025/draft_b/footer.png" className="full-img" />
      </footer>
      </div>
      
      

  );
}
