"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import "../../styles/draft_b.css";

export default function DraftBHome() {

  const heroMenu = ['찬바람 불때 미떼', '나에게 더 부드럽게', '나를 찾는 순간']
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const handleSlideChange = () => {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const video = activeSlide.querySelector('video') as HTMLVideoElement | null;
      if (video) {
        video.currentTime = 0;
        video.play().catch(error => console.error('Video playback error:', error));
      }
    };

    const handleVideoEnded = () => {
      swiper.slideNext();
    };

    swiper.on('slideChange', handleSlideChange);

    const videos = document.querySelectorAll<HTMLVideoElement>('.hero-video');
    videos.forEach(video => {
      video.addEventListener('ended', handleVideoEnded);
    });

    return () => {
      swiper.off('slideChange', handleSlideChange);
      videos.forEach(video => {
        video.removeEventListener('ended', handleVideoEnded);
      });
    };
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
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              modules={[Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 11000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: '.hero-pagination',
                clickable: true,
                renderBullet: function (index: number, className: string) {
                  return '<span class="' + "pagination-item " + className + '">' + (heroMenu[index]) + '</span>';
                },
              }}
              className="hero-swiper-container" >
              <SwiperSlide className="hero-slide">
                <video muted playsInline preload="none" src="/dongsuh_2025/hero_mite.mp4" className="hero-video">
                </video>
                <div className="hero-title-wrap">
                  <img src="/dongsuh_2025/draft_b/hero_logo_mite.png" className="hero-logo" />
                  <h2>부드러운 거품속 <br />더 진해진 초콜릿맛</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero-slide">
                <video muted playsInline preload="none" src="/dongsuh_2025/hero_maxim_white.mp4" className="hero-video">
                </video>
                <div className="hero-title-wrap">
                <img src="/dongsuh_2025/draft_b/hero_logo_maxim.png" className="hero-logo" />
                  <h2>나에게 더 부드럽게 <br />맥심 화이트골드</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero-slide">
                <video muted playsInline preload="none" src="/dongsuh_2025/hero_kanu.mp4" className="hero-video">
                </video>
                <div className="hero-title-wrap">
                <img src="/dongsuh_2025/draft_b/hero_logo_kanu.png" className="hero-logo" />
                  <h2>나를 찾는 순간, <br />나를 찾는 커피</h2>
                </div>
              </SwiperSlide>
              <div className="hero-pagination swiper-pagination"></div>
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
