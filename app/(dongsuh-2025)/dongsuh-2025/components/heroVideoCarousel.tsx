import { useEffect, useRef, useState } from "react";

const HeroVideoCarousel = () => {
  const videos = [
    "/dongsuh/videos/hero_mite.mp4", 
    "/dongsuh/videos/hero_maxim_white.mp4",
    "/dongsuh/videos/hero_kanu.mp4", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 비디오가 끝났을 때 다음 비디오로 이동
  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setProgress(0);
  };

  // 이전 비디오로 이동
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? videos.length - 1 : prevIndex - 1 );
    setProgress(0);
  };

  // 다음 비디오로 이동
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setProgress(0);
  };

  // 현재 인덱스가 바뀔 때마다 비디오 재생
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentIndex]);

  // 비디오 재생 시간 업데이트 시 진행률 계산
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100); // 진행률 계산 (0~100)
      }
    }
  };

  return (
    <div className="relative overflow-hidden w-screen mx-auto h-screen">
      {/* 슬라이드 Wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out w-full h-full bg-red-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // 슬라이드 이동
        }}
      >
        {videos.map((video, index) => (
          <div key={index} className="flex-none w-full h-full">
            <div className="absolute top-0 left-0 h-1 bg-red-500" style={{ width: `${index === currentIndex ? progress : 0}%` }}></div>
            <video
              ref={index === currentIndex ? videoRef : null} // 현재 슬라이드만 참조
              onEnded={handleVideoEnd}
              onTimeUpdate={handleTimeUpdate}
              className="obsolute w-full h-full object-cover"
              muted 
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      {/* 이전 버튼 */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded focus:outline-none hover:bg-opacity-75"
      >
        이전
      </button>

      {/* 다음 버튼 */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded focus:outline-none hover:bg-opacity-75"
      >
        다음
      </button>
    </div>
  );
};

export default HeroVideoCarousel;
