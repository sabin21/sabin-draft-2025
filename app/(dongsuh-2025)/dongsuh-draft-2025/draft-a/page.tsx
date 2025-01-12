"use client"

import Image from "next/image";
import "../../styles/draft_a.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DraftAHome() {
  return (
      <main className="main">
        <section className="section-hero">
          {/* <div className="video-wrap hero-video">
            <video muted autoPlay loop playsInline preload="none" src="/dongsuh_2025/hero_1.mp4" className="video-wrap">
            </video>
          </div> */}
          <div className="hero-swiper-container">
            <Swiper
              modules={[EffectFade, Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              effect={'fade'}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="hero-slide">
                <video muted autoPlay loop playsInline preload="none" src="/dongsuh_2025/hero_mite.mp4" className="hero-video">
                </video>
              </SwiperSlide>
              <SwiperSlide className="hero-slide">
                <video muted autoPlay loop playsInline preload="none" src="/dongsuh_2025/hero_maxim_white.mp4" className="hero-video">
                </video>
              </SwiperSlide>
              <SwiperSlide className="hero-slide">
                <video muted autoPlay loop playsInline preload="none" src="/dongsuh_2025/hero_kanu.mp4" className="hero-video">
                </video>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
      

  );
}
