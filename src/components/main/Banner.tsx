// app/page.tsx or pages/index.tsx
"use client";

// react/next
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// json
// import { useI18n } from "@/context/i18nContext";
// swiper
import ComSwiper from "@/components/com/Swiper";
import { SwiperClass, SwiperSlide } from "swiper/react";
// mui icons
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const swiperOptions = {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  pagination: {
    el: ".btn-paging",
    clickable: true,
  },
  autoplay: { delay: 8000 },
};

export default function Banner() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  type Banner = {
    alt: string;
    link: string;
    desc: string;
  };
  type Sections = {
    mainBanner?: Banner[];
  };
  function useI18n(): {sections: Sections}{
    return {sections: {mainBanner: []}};
  }
  
  const { sections } = useI18n();
  const bannerList: Banner[] = sections.mainBanner ?? [];
  const [isPlaying, setIsPlaying] = useState(true);

  // pause/play func
  const handlePlay = () => {
    if(!swiperRef.current) return;
    if(isPlaying){
      swiperRef.current.autoplay.stop();
    }else {
      swiperRef.current.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <ComSwiper className="main-banner" {...swiperOptions} onSwiper={(swiper) => (swiperRef.current = swiper)}>
      {bannerList.map((banner, index: number) => (
        <SwiperSlide key={banner.alt}>
          <Link href={banner.link}>
            <div className="img">
              <Image
                src={`/img/main/main-banner-${index + 1}.webp`}
                alt={banner.alt}
                width={1920}
                height={600}
              />
            </div>
            <div className="text">
              <strong>{banner.alt}</strong>
              <span>{banner.desc}</span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
      <div className="btn-area">
        <div className="btn-prev" ref={prevRef}>
          <KeyboardArrowLeftIcon />
          <span className="blind">Prev</span>
        </div>
        <div className="btn-paging" ref={paginationRef}></div>
        <div className="btn-next" ref={nextRef}>
          <KeyboardArrowRightIcon />
          <span className="blind">Next</span>
        </div>
        <div className="autoplay">
          <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
        </div>
      </div>
    </ComSwiper>
  );
}
