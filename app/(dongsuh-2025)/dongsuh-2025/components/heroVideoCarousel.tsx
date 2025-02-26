import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HeroVideoCarousel = () => {

  const slides = [
    {
      video: "/dongsuh/videos/hero_mite.mp4",
      headline: "Slide 1 Headline",
      image: "",
      paginationText: "Slide 1"
    },
    {
      video: "/dongsuh/videos/hero_maxim_white.mp4",
      headline: "Slide 2 Headline",
      image: "",
      paginationText: "Slide 2"
    },
    {
      video: "/dongsuh/videos/hero_kanu.mp4",
      headline: "Slide 3 Headline",
      image: "",
      paginationText: "Slide 3"
    },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (swiper: any) => {
    videoRefs.current.forEach((video) => {
      if (video) {
        // video.pause();
        video.currentTime = 0;
      }
    });

    const currentVideo = videoRefs.current[swiper.realIndex];
    if (currentVideo) {
      setProgress(0);
      const playPromise = currentVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("비디오 재생 시작");
          })
          .catch((error) => {
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
          .then(() => {
            console.log("초기 비디오 재생 시작");
          })
          .catch((error) => {
            console.error("초기 비디오 재생 실패:", error);
          });
      }
    }
  }, []);

  return (
    <div className="relative overflow-hidden w-screen mx-auto h-screen">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full relative">
            {index === swiperRef.current?.realIndex && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-red-500 transition-all ease-linear"
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
              onTimeUpdate={() => handleTimeUpdate(index)}
            >
              <source src={slide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-20 left-20 z-10 text-white text-4xl font-bold">
              {slide.headline}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
};

export default HeroVideoCarousel;
