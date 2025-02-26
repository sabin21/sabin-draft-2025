"use client"

import React from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroVideoCarousel from './components/heroVideoCarousel';

gsap.registerPlugin(ScrollTrigger);

export default function Home(){
  
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


  return(
    <>

      <section className="section-hero relative w-full min-h-screen overflow-hidden bg-[#999]">
        <HeroVideoCarousel />
      </section>

      <section className="section-news relative w-full min-h-[840px] flex justify-center align-middle">
        <div className='w-full max-w-[1332px] flex justify-center align-middle flex-col'>
          <div className="section-title-wrap w-full pb-12">
            <h2 className="section-title uppercase font-bold text-4xl text-gray-900 poppins">Dongsuh News</h2>
          </div>
          <div className="news-wrap flex justify-between">
            {newsPosts.map((post, index) => (
              <div key={index} className="news-item">
                <div className='w-full aspect-w-16 aspect-h-12'>
                  <img src={post.thumbnail} alt={post.alt} />
                </div>
                <div className="news-item-body py-4">
                  <h2 className="news-title text-body-xxl font-medium text-gray-900">{post.headline}</h2>
                  <p className="news-desc text-gray-600">{post.date}</p>
                </div> 
              </div>
            ))}
            
          </div>
        </div>
      </section>
      </>
      // </ReactLenis>
  )
}