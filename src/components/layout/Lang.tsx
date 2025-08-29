"use client";
// react/next
import { useState, useEffect, useRef } from "react";
// json
import { useI18n } from "@/context/i18nContext";
// icon
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

export default function Lang() {
  // const { locale, changeLocale } = useI18n();
  const { locale } = useI18n();
  const [isLangShown, setIsLangShown] = useState(false);
  const popRef = useRef<HTMLDivElement | null>(null);

  const fnLang = () => {
    setIsLangShown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(e.target as Node)) {
        setIsLangShown(false);
      }
    };
    if (isLangShown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangShown]);

  return (
    <div className="lang-wrap" ref={popRef}>
      <button className="btn-lang gnb-link" type="button" onClick={fnLang}>
        <LanguageOutlinedIcon />
      </button>
      {isLangShown && (
        <div className="lang-pop">
          {["en", "kr", "de"].map((lang) => (
            <button
              key={lang}
              onClick={() => {
                localStorage.setItem("lang", lang);
                location.reload();
              }}
              className={locale === lang ? "active" : ""}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
