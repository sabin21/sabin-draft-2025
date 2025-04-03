"use client"

import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  
  const newsPosts = [
    {
      thumbnail: "/dongsuh/img/news_thumb_1.png",
      headline: "동서식품 ‘카누 이노베이션’ 실시",
      date: "2025.01.15",
      alt: "News Image"
    },
    {
      thumbnail: "/dongsuh/img/news_thumb_2.png",
      headline: "동서식품 ‘카누 이노베이션’ 실시",
      date: "2025.01.15",
      alt: "News Image"
    },
    {
      thumbnail: "/dongsuh/img/news_thumb_3.png",
      headline: "동서식품 ‘카누 이노베이션’ 실시",
      date: "2025.01.15",
      alt: "News Image"
    }
  ];

  // Carousel 네비게이션 효과
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);
  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const swiperRef = useRef<any>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;

    const rect = carouselRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY + rect.height/4;
    console.log(e.clientY)
    const width = rect.width;

    // setCursorPos({ x, y });
    setShowPrev(x < width / 2);
    setShowNext(x > width / 2);
  };

  const handleMouseLeave = () => {
    setShowPrev(false);
    setShowNext(false);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };


  return(
    <>

      <section className="section-hero relative w-full min-h-screen overflow-hidden bg-[#999]">
        <HeroVideoCarousel />
      </section>

      <section className='home-product-section'>
        <div className="home-title-big">
          <div className="inner-wrap">
            <h2 className='eng'>Products</h2>
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
                <span className="brand-name">Kanu</span>
                <h4>카누 싱글오리진 <br /> 에티오피아</h4>
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
                <span className="brand-name">Kanu</span>
                <h4>카누 싱글오리진 <br /> 에티오피아</h4>
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
                <span className="brand-name">Kanu</span>
                <h4>카누 싱글오리진 <br /> 에티오피아</h4>
              </div>
            </span>
          </div>
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_4.png" alt="" />
              </div>
              <div className="card-body">
                <span className="brand-name">Kanu</span>
                <h4>카누 싱글오리진 <br /> 에티오피아</h4>
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
                <span className="brand-name">Kanu</span>
                <h4>카누 싱글오리진 <br /> 에티오피아</h4>
              </div>
            </span>
          </div>
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_6.png" alt="" />
              </div>
              <div className="card-body">
                <span className="brand-name">Kanu</span>
                <h4>카누 싱글오리진 <br /> 에티오피아</h4>
              </div>
            </span>
          </div>
          <div className="home-product-card">
            <span className='inner-wrap'>
              <div className="thumb-img">
                <img src="/dongsuh/img/home/product_7.png" alt="" />
              </div>
              <div className="card-body">
                <span className="brand-name">Kanu</span>
                <h4>카누 싱글오리진 <br /> 에티오피아</h4>
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
                <span className="brand-name">Kanu</span>
                <h4>카누 싱글오리진 <br /> 에티오피아</h4>
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
            <h2 className='eng'>Brands</h2>
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
            <h2>사회공헌</h2>
            <p className='copy'>
              따뜻한 함께하는 사회를 위한<br />
              동서식품의 사회공헌 활동
            </p>
          </div>
        </div>

        <div 
          className="csr-carousel-wrap"
          ref={carouselRef}
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
          ref={swiperRef}
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
            onClick={handlePrev}
          />
          <div
            className="swiper-button-next"
            // style={{
            //   display: showNext ? 'block' : 'none',
            //   position: 'absolute',
            //   left: `${cursorPos.x}px`,
            //   top: `${cursorPos.y}px`,
            //   transform: 'translate(-50%, -50%)',
            // }}
            onClick={handleNext}
          />

        </div>
      </section>

      <section className="home-news-section">
        <div className='container'>
          <div className="section-title">
            <h2 className="section-title">Dongsuh News</h2>
            <button className='btn-more'>더보기</button>
          </div>
          <div className="news-wrap">
            {newsPosts.map((post, index) => (
              <a key={index} className="news-item" href="#">
                <div className='news-thumb'>
                  <img src={post.thumbnail} alt={post.alt} />
                </div>
                <div className="news-item-body">
                  <h2 className="news-title">{post.headline}</h2>
                  <p className="news-date">{post.date}</p>
                </div> 
              </a>
            ))}
            
          </div>
        </div>
      </section>
      </>
      // </ReactLenis>
  )
}