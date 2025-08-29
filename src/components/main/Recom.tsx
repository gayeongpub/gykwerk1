"use client";
// json
import { useI18n } from "@/context/i18nContext";

// react/next
import Image from "next/image";
import Link from "next/link";

export default function Recom() {
  const { sections } = useI18n();

  return (
    <div className="recom-area">
      <div className="bg-img">
        <Link href="/" className="cover">
          <Image
            src="/img/main/bg-cook.webp"
            alt="kitchen pic"
            width="1000"
            height="1000"
          />
        </Link>
        <div className="tit-sec">
          <h2 className="title-2">{sections.recom.left.title}</h2>
          <span>{sections.recom.left.desc1}</span>
          <span>{sections.recom.left.desc2}</span>
        </div>
      </div>
      <div className="bg-img">
        <Link href="/" className="cover">
          <Image
            src="/img/main/bg-bread-coffee.webp"
            alt="kitchen pic"
            width="1000"
            height="1000"
          />
        </Link>
        <div className="tit-sec">
          <h2 className="title-2">{sections.recom.right.title}</h2>
          <span>{sections.recom.right.desc1}</span>
          <span>{sections.recom.right.desc2}</span>
        </div>
      </div>
    </div>
  );
}
