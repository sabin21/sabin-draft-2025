"use client"

import React from 'react';
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BrandsList(){
 
  return(
    <div className='page-inner-wrap'>
    
      {/* <div className='page-title-wrap'>
        <h2 className='page-title'>브랜드</h2>
      </div> */}

      <section className="new-product-carousel">
        <div className="back-shape">
          <span className="big-circle"></span>
          <span className="point-circle">
            <span className="text">HOT</span>
          </span>
        </div>        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={
              { 
                769:{
                slidesPerView: 3
              },
              1281:{
                slidesPerView: 4
              },
              1921:{
                slidesPerView: 5
              }
            }
          }             
            className="product-swiper-container"
        >
          <SwiperSlide className="product-slide">
            <Link href="">
            <div className="product-slide-inner">
              <img src="/dongsuh_2025/product_1.png" />
              <h4>카누 마일드로스트 아메리카노</h4>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="product-slide">
            <Link href="">
            <div className="product-slide-inner">
              <img src="/dongsuh_2025/product_2.png" />
              <h4>맥심 티오피 스모키 블랙</h4>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="product-slide">
          <Link href="">
            <div className="product-slide-inner">
              <img src="/dongsuh_2025/product_3.png" />
              <h4>카누 싱글오리진 에티오피아</h4>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="product-slide">
          <Link href="">
            <div className="product-slide-inner">
              <img src="/dongsuh_2025/product_4.png" />
              <h4>카누 에스프레소 쇼콜라 라떼</h4>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="product-slide">
          <Link href="">
            <div className="product-slide-inner">
              <img src="/dongsuh_2025/product_5.png" />
              <h4>포스트 단백질바 미니</h4>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="product-slide">
          <Link href="">
            <div className="product-slide-inner">
              <img src="/dongsuh_2025/product_6.png" />
              <h4>맥심 화이트골드 커피믹스</h4>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="product-slide">
          <Link href="">
            <div className="product-slide-inner">
              <img src="/dongsuh_2025/product_7.png" />
              <h4>맥심 슈프림골드 커피믹스</h4>
            </div>
            </Link>
          </SwiperSlide> 
        </Swiper>
      </section>

      <div className="container">

        <div className="product-nav-bar">
          <button className='product-nav-item'>
            브랜드별 제품보기
            <span className="product-nav-arrow">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='product-nav-arrow-svg'>
                <path d="M14 2L8 8L2 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
          <button className='product-nav-item'>
            유형별 제품보기
            <span className="product-nav-arrow">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='product-nav-arrow-svg'>
                <path d="M14 2L8 8L2 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>

        <ul className="product-list-wrap">

          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_1.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>
          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_2.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>
          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_3.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>

          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_4.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>
          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_5.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>
          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_6.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>

          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_1.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>
          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_2.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>
          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_3.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>

          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_7.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>
          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_6.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>
          <li className="card-basic product-list-card">
            <a href="">
              <div className="thumb">
                <img src="/dongsuh/img/products/product_4.png" alt="" />
              </div>
              <div className="card-body">
                <h4 className='title'>카누 에스프레소 쇼콜라 라떼</h4>
                <span className="desc">KANU</span>
              </div>
            </a>
          </li>
        </ul>
        <div className='btns-row center'>
          <button className="btn btn-basic secondary-outline">
            <span>더보기</span>
          </button>
        </div>
      </div>
      </div>
  )
}