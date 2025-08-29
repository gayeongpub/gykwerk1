"use client";

// react/next
import React from "react";
import Link from "next/link";

// json
import { useI18n } from "@/context/i18nContext";

export default function All() {
  const { categories } = useI18n();

  return (
    <ul className="depth-wrap in">
      {categories.arr.map((item) => (
        <li key={item.title} className="list-depth1">
          <Link href="/" className="tit">
            {item.title}
          </Link>
          <ol>
            {item.depth2.map((param) => (
              <li key={param.tit} className="list-depth2">
                <Link href="/" className="list">
                  {param.tit}
                </Link>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ul>
  );
}
