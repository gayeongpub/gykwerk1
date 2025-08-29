// components/CommonSwiper.tsx
"use client";

import { Swiper, type SwiperProps } from "swiper/react";
import { swiperModules } from "@/libs/swiperConfig";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "swiper/css/zoom";

interface CommonSwiperProps extends SwiperProps {
  children: React.ReactNode;
}

export default function CommonSwiper({
  children,
  ...props
}: CommonSwiperProps) {
  return (
    <Swiper modules={swiperModules} {...props}>
      {children}
    </Swiper>
  );
}
