// src/context/i18nContext.tsx
"use client";

// mui
import AutorenewIcon from "@mui/icons-material/Autorenew";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

// common
type Messages = {
  terms: {
    termsOfService: string;
  };
  unit: string;
  auth: {
    id: string;
    pw: string;
    signIn: string;
  };
  buttons: {
    close: string;
    viewMore: string;
    viewDetails: string;
    goShop: string;
  };
  coupon: string;
  event: string;
  cart: {
    title: string;
    freeExchangesReturns: string;
    afterConfirmation: string;
  };
};

// gnb
type Categories = {
  title: string;
  featuredTitle: string;
  arr: {
    type: string;
    title: string;
    depth2: {
      tit: string;
      link: string;
    }[];
  }[];
};

// itemList (product1)
type ProductItem = {
  link: string;
  tag: string;
  src: string;
  ctgr: string;
  name: string;
  price: number;
  oldPrice: number;
};
type Products1 = ProductItem[];

type Orders = {
  order: string;
  freeReturnsExchanges: string;
  itemPrice: string;
  totalItemPrice: string;
  totalOrderPrice: string;
  shippingPrice: string;
  totalShippingCost: string;
};

type Sections = {
  mainBanner: {
    alt: string;
    desc: string;
    link: string;
  };
  favorites: {
    title: string;
  };
  recom: {
    left: {
      title: string;
      desc1: string;
      desc2: string;
    };
    right: {
      title: string;
      desc1: string;
      desc2: string;
    };
  };
  newArrivals: {
    title: string;
  };
  event: {
    title: string;
    desc: string;
    percent: string;
    alt: string;
  };
  season: {
    title: string;
  };
};

type I18nContextType = {
  msg: Messages;
  categories: Categories;
  prd1: Products1;
  orders: Orders;
  sections: Sections;
  locale: string;
  changeLocale: (lang: string) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

const checkResponse = async (res: Response) => {
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  return res.json();
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialLocale = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || "en";
    }
    return "en";
  };

  const [locale, setLocale] = useState(getInitialLocale);
  const [msg, setMsg] = useState<Messages | null>(null);
  const [prd1, setPrd1] = useState<Products1>([]);
  const [categories, setCategories] = useState<Categories | null>(null);
  const [orders, setOrders] = useState<Orders | null>(null);
  const [sections, setSections] = useState<Sections | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadMessages = useCallback(async (lang: string) => {
    setIsLoaded(false);
    try {
      const [msgRes, prd1Res, categoriesRes, ordersRes, sectionsRes] =
        await Promise.all([
          fetch(`/locales/${lang}/messages.json`),
          fetch(`/locales/${lang}/products1.json`),
          fetch(`/locales/${lang}/categories.json`),
          fetch(`/locales/${lang}/orders.json`),
          fetch(`/locales/${lang}/sections.json`),
        ]);

      const [msgData, prd1Data, categoriesData, ordersData, sectionsData] =
        await Promise.all([
          checkResponse(msgRes),
          checkResponse(prd1Res),
          checkResponse(categoriesRes),
          checkResponse(ordersRes),
          checkResponse(sectionsRes),
        ]);

      setMsg(msgData);
      setPrd1(prd1Data);
      setCategories(categoriesData);
      setOrders(ordersData);
      setSections(sectionsData);
      setIsLoaded(true);
    } catch (err) {
      console.error("Failed to load messages or categories:", err);
      // 필요에 따라 fallback 처리 가능
    }
  }, []);

  useEffect(() => {
    loadMessages(locale);
  }, [locale, loadMessages]);

  const changeLocale = (lang: string) => {
    setLocale(lang);
  };

  if (!isLoaded || !msg || !categories || !orders || !sections) {
    return (
      <div className="loading">
        <AutorenewIcon />
      </div>
    );
  }

  return (
    <I18nContext.Provider
      value={{ msg, prd1, categories, orders, sections, locale, changeLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
