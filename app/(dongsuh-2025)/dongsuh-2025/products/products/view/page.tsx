"use client"

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from 'react';

function useViewportWidth() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BrandsList(){

  const tlViewer = gsap.timeline();
  const viewportWidth = useViewportWidth();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
    if (viewportWidth >= 1024) {
      tlViewer
      .to('.product-viewer-img-wrap',{ bottom: 0, duration:0.3})
      // .to('.product-viewer',{backgroundColor:'#E6EAEE', duration: 0.2})
      .to('.product-info-wrap', { bottom:0, duration: 0.2});

      ScrollTrigger.create({
        trigger: ".product-viewer-wrap",
        endTrigger: ".product-related-container",
        start: "top top",
        end: "bottom 50%",
        pin: ".product-viewer-wrap",
        pinSpacing: false,
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: ".product-related-container",
          start: "top 50%",
          end: "+=100",
          animation: gsap.to('.product-info-wrap',{opacity:0}),
          scrub: true,
      }); 
    } 
  }, { dependencies: [viewportWidth], scope: container });

  
  return(
    <div className='page-inner-wrap' ref={container}>
    
      <div className="container product-view-page">

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

      </div>

      <div className="container">

        <div className="product-viewer-wrap">
          
          <div className='product-viewer-img-outer'>
            <div className="product-viewer">
              <span className='product-viewer-img-wrap'>
                <img src="/dongsuh/img/products/product_10.png" alt='' />
              </span>
            </div>
          </div>

          <div className="product-info-wrap">
            <h3 className='title'>카누 돌체라떼</h3>
            <p className='desc'>
              카누가 선사하는 부드러운 달콤함. 에스프레소 추출방식으로 추출한 에티오피아산 100% 
              카누 커피와 연유파우더, 라떼 크리머의 조화가 만들어내는 밝고 화사한 라떼를 즐길 수 있습니다.
            </p>
            <ul className='spec-list'>
              <li className="item">
                <span className='label'>용량</span>
                <span className='value'>138.4g (8개입) , 415.2g (24개입)</span>
              </li>
            </ul>
            <div className="btns-row">
              <button className="btn btn-basic secondary-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                  <g clipPath="url(#clip0_360_9001)">
                    <path d="M16.0003 3.16699C19.623 3.16699 20.075 3.18033 21.4963 3.24699C22.9163 3.31366 23.883 3.53633 24.7337 3.86699C25.6137 4.20566 26.355 4.66433 27.0963 5.40433C27.7743 6.07085 28.2989 6.87711 28.6337 7.76699C28.963 8.61633 29.187 9.58433 29.2537 11.0043C29.3163 12.4257 29.3337 12.8777 29.3337 16.5003C29.3337 20.123 29.3203 20.575 29.2537 21.9963C29.187 23.4163 28.963 24.383 28.6337 25.2337C28.2999 26.124 27.7752 26.9305 27.0963 27.5963C26.4296 28.2741 25.6234 28.7987 24.7337 29.1337C23.8843 29.463 22.9163 29.687 21.4963 29.7537C20.075 29.8163 19.623 29.8337 16.0003 29.8337C12.3777 29.8337 11.9257 29.8203 10.5043 29.7537C9.08433 29.687 8.11766 29.463 7.26699 29.1337C6.37676 28.7996 5.57036 28.2749 4.90433 27.5963C4.2262 26.9299 3.70157 26.1236 3.36699 25.2337C3.03633 24.3843 2.81366 23.4163 2.74699 21.9963C2.68433 20.575 2.66699 20.123 2.66699 16.5003C2.66699 12.8777 2.68033 12.4257 2.74699 11.0043C2.81366 9.58299 3.03633 8.61766 3.36699 7.76699C3.70064 6.87656 4.2254 6.07009 4.90433 5.40433C5.57055 4.72597 6.3769 4.2013 7.26699 3.86699C8.11766 3.53633 9.08299 3.31366 10.5043 3.24699C11.9257 3.18433 12.3777 3.16699 16.0003 3.16699ZM16.0003 9.83366C14.2322 9.83366 12.5365 10.536 11.2863 11.7863C10.036 13.0365 9.33366 14.7322 9.33366 16.5003C9.33366 18.2684 10.036 19.9641 11.2863 21.2144C12.5365 22.4646 14.2322 23.167 16.0003 23.167C17.7684 23.167 19.4641 22.4646 20.7144 21.2144C21.9646 19.9641 22.667 18.2684 22.667 16.5003C22.667 14.7322 21.9646 13.0365 20.7144 11.7863C19.4641 10.536 17.7684 9.83366 16.0003 9.83366V9.83366ZM24.667 9.50033C24.667 9.0583 24.4914 8.63438 24.1788 8.32181C23.8663 8.00925 23.4424 7.83366 23.0003 7.83366C22.5583 7.83366 22.1344 8.00925 21.8218 8.32181C21.5093 8.63438 21.3337 9.0583 21.3337 9.50033C21.3337 9.94235 21.5093 10.3663 21.8218 10.6788C22.1344 10.9914 22.5583 11.167 23.0003 11.167C23.4424 11.167 23.8663 10.9914 24.1788 10.6788C24.4914 10.3663 24.667 9.94235 24.667 9.50033ZM16.0003 12.5003C17.0612 12.5003 18.0786 12.9218 18.8288 13.6719C19.5789 14.422 20.0003 15.4395 20.0003 16.5003C20.0003 17.5612 19.5789 18.5786 18.8288 19.3288C18.0786 20.0789 17.0612 20.5003 16.0003 20.5003C14.9395 20.5003 13.922 20.0789 13.1719 19.3288C12.4218 18.5786 12.0003 17.5612 12.0003 16.5003C12.0003 15.4395 12.4218 14.422 13.1719 13.6719C13.922 12.9218 14.9395 12.5003 16.0003 12.5003V12.5003Z" fill="#343537"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_360_9001">
                      <rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
                <span>공식 인스타그램</span>
              </button>
              <button className="btn btn-basic secondary-outline">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_372_2513)">
                <path d="M18.6663 18.0003H21.9997L23.333 12.667H18.6663V10.0003C18.6663 8.62699 18.6663 7.33366 21.333 7.33366H23.333V2.85366C22.8983 2.79633 21.257 2.66699 19.5237 2.66699C15.9037 2.66699 13.333 4.87633 13.333 8.93366V12.667H9.33301V18.0003H13.333V29.3337H18.6663V18.0003Z" fill="#343537"/>
                </g>
                <defs>
                <clipPath id="clip0_372_2513">
                <rect width="32" height="32" fill="white"/>
                </clipPath>
                </defs>
              </svg>

                <span>공식 페이스북</span>
              </button>
              <button className="btn btn-basic secondary-outline">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H11M21 3L12 12M21 3H15M21 3V9" stroke="#343537" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>브랜드사이트</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="container product-related-container">

        <div className="product-related-content related-content-tvcf">
          <div className="product-related-title">
            <h4>관련 CF</h4>
          </div>
          <div className="grid-col1-2">
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
                  <img src="/dongsuh/img/tvcf_thumb/cf_2.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className='title'>진하게 부드럽게 라떼처럼 즐겨봐!</h4>
                  <span className="desc">맥심 모카골드</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="product-related-content related-content-related-product">
          <div className="product-related-title">
            <h4>같은 브랜드 제품</h4>
          </div>
          <div className="grid-col1-2">
            <div className="card-basic card-related-product">
              <a href="">
                <div className="card-thumb">
                  <img src="/dongsuh/img/products/product_1.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className='title'>카누 마일드로스트 아메리카노</h4>
                  <span className="desc">카누</span>
                </div>
              </a>
            </div>
            <div className="card-basic card-related-product">
              <a href="">
                <div className="card-thumb">
                  <img src="/dongsuh/img/products/product_1.png" alt="" />
                </div>
                <div className="card-body">
                <h4 className='title'>카누 마일드로스트 아메리카노</h4>
                <span className="desc">카누</span>
                </div>
              </a>
            </div>
            <div className="card-basic card-related-product">
              <a href="">
                <div className="card-thumb">
                  <img src="/dongsuh/img/products/product_1.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className='title'>카누 마일드로스트 아메리카노</h4>
                  <span className="desc">카누</span>
                </div>
              </a>
            </div>
            <div className="card-basic card-related-product">
              <a href="">
                <div className="card-thumb">
                  <img src="/dongsuh/img/products/product_1.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className='title'>카누 마일드로스트 아메리카노</h4>
                  <span className="desc">카누</span>
                </div>
              </a>
            </div>
          </div>
          <div className='btns-row center mt-32'>
            <button className="btn btn-basic secondary-outline">
              <span>브랜드 제품보기</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}