import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

const HeroVideoCarousel = () => {

  const slides = [
    {
      video: "/dongsuh/videos/hero_mite.mp4",
      headline: "부드러운 거품속 더 진해진 초콜릿맛",
      headlineHtml: '<h2>부드러운 거품속 <br />더 진해진 초콜릿맛</h2>',
      imageSrc: "/dongsuh/img/home/hero_logo_mite.png",
      paginationText: "Slide 1"
    },
    {
      video: "/dongsuh/videos/hero_maxim_white.mp4",
      headline: "Slide 2 Headline",
      headlineHtml: '<h2>나에게 더 부드럽게 <br />맥심 화이트골드</h2>',
      imageSrc: "/dongsuh/img/home/hero_logo_maxim.png",
      paginationText: "Slide 2"
    },
    {
      video: "/dongsuh/videos/hero_kanu.mp4",
      headline: "Slide 3 Headline",
      headlineHtml: '<h2>나를 찾는 순간, <br />나를 찾는 커피</h2>',
      imageSrc: "/dongsuh/img/home/hero_logo_kanu.png",
      paginationText: "Slide 3"
    },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (swiper: any) => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.currentTime = 0;
      }
    });

    const currentVideo = videoRefs.current[swiper.realIndex];
    if (currentVideo) {
      setProgress(0);
      const playPromise = currentVideo.play();
      if (playPromise !== undefined) {
        playPromise
          playPromise.catch((error) => {
            console.error("비디오 재생 실패:", error);
          });
      }
    }
  };

  const handleVideoEnded = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  const handleTimeUpdate = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (currentVideo && currentVideo.duration > 0) {
      const currentProgress = (currentVideo.currentTime / currentVideo.duration) * 100;
      setProgress(currentProgress); 
    }
  };

  useEffect(() => {
    // 초기 로드 시 첫 번째 비디오 재생
    if (videoRefs.current.length > 0 && videoRefs.current[0]) {
      const playPromise = videoRefs.current[0].play();
      if (playPromise !== undefined) {
        playPromise
          playPromise.catch((error) => {
            console.error("초기 비디오 재생 실패:", error);
          });
      }
    }
  }, []);

  return (
    <div className="home-hero-wrap">
      <Swiper
        modules={[Pagination]}
        loop={true}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          el: '.hero-pagination',
          clickable: true,
          // renderBullet: (index, className) => {
          //   return `<span class="${className}">${slides[index].paginationText}</span>`;
          // },
          
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full relative">
            {index === swiperRef.current?.realIndex && (
              <div
                className="home-hero-video-bar"
                style={{ width: `${progress}%` }}
              ></div>
            )}
            <video
              ref={(el) => {
                videoRefs.current[index] = el as HTMLVideoElement | null;
              }}
              className="w-full h-full object-cover"
              muted
              onEnded={handleVideoEnded}
              preload="none"
              data-keepplaying
              onTimeUpdate={() => handleTimeUpdate(index)}
            >
              <source src={slide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="home-hero-title"
            >
              <img src={slide.imageSrc} alt="" />
              <div className="hero-title-row" dangerouslySetInnerHTML={{ __html: slide.headlineHtml }}>

              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="hero-pagination swiper-pagination"></div>
      </Swiper>

      
    </div>
  );
};

export default HeroVideoCarousel;
