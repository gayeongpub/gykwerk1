"use client";

// import Image from "next/image";
// import { notFound } from "next/navigation";
// json
import { useI18n } from "@/context/i18nContext";
import Breadcrumb from "@/components/layout/BreadCrumb";

// number
import { fnAddComma, getDiscountPercent } from "@/utils/number";

export default function PdDetail() {
  const { msg } = useI18n();

  return (
    <div className="page-detail in">
      <Breadcrumb />
      <div className="top">
        <div className="thumb-area">
          <div className="thumb-sm">thumb sm - Swiper</div>
          <div className="thumb-lg">thumb lg - Swiper</div>
        </div>
        <div className="desc-area">
          <span className="tag">Tag</span>
          <h2 className="name">아이템 명</h2>
          <span className="ctgr">카테고리 명</span>
          <div className="price-per">
            <em className="discount">{getDiscountPercent(500, 620)}</em>
            <span className="price">{`${msg.unit}${fnAddComma(580)}`}</span>
            <span className="old">{`${msg.unit}${fnAddComma(620)}`}</span>
          </div>
          <p>---상품설명---</p>
        </div>
      </div>
      <div className="bottom">Tabs and tables</div>
    </div>
  );
}
