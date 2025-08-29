// app/page.tsx or pages/index.tsx
"use client";

// json
import { useI18n } from "@/context/i18nContext";
// react/next
import React from "react";
import Image from "next/image";
import Link from "next/link";
// swiper
import ComSwiper from "@/components/com/Swiper";
import { SwiperSlide } from "swiper/react";

const swiperOptions = {
  spaceBetween: 10,
  slidesPerView: 10,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  pagination: {
    el: ".btn-navi",
    clickable: true,
  },
  //   autoplay: { delay: 2000 },
  loop: true,
};

export default function Category() {
  const { categories } = useI18n();

  return (
    <div className="ctgr-area">
      <ComSwiper {...swiperOptions}>
        {categories.arr.map((item, index) => (
          <SwiperSlide key={item.title} className={`type-${item.type}`}>
            <Link href="/">
              <div className="img">
                <Image
                  src={`/img/main/ctgr-${index + 1}.webp`}
                  alt={item.title}
                  width={300}
                  height={500}
                />
              </div>
              <div className="text">{item.title}</div>
            </Link>
          </SwiperSlide>
        ))}
      </ComSwiper>
    </div>
  );
}
