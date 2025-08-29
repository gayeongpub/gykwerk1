"use client";

// common
import { SITE_NAME } from "@/constants/site";
// json
import { useI18n } from "@/context/i18nContext";
// react/next
import * as React from "react";
import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
// mui
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
// cmp
import BtnLang from "@/components/layout/Lang";
import AllMenu from "@/components/layout/All";
import CustomDrawer from "@/components/com/Drawer";
// search
// import ComTextField from "@/components/com/TextField";
// import { type } from "./../../../node_modules/rollup/node_modules/@types/estree/index.d";

const gnbItems = [
  { href: "cart", label: "Cart", count: 3 },
  // { href: "favorites", label: "Favorites" },
  { href: "noti", label: "Notification", count: 5 },
  { href: "auth", label: "My Page" },
];
const iconMap: Record<string, JSX.Element> = {
  cart: <ShoppingCartOutlinedIcon />,
  // favorites: <FavoriteBorderOutlinedIcon />,
  noti: <NotificationsNoneSharpIcon />,
  auth: <PermIdentityOutlinedIcon />,
};

export default function Header() {
  const { categories } = useI18n();
  const [open, setOpen] = React.useState(false);

  const fnOpen = () => {
    setOpen(true);
  };
  const fnClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="header-wrap">
        <header className="header in-m">
          <div className="logo-area">
            <h1>
              <Link href="/" title={SITE_NAME}>
                <Image
                  src="/logo.svg"
                  alt={`${SITE_NAME} Logo Image`}
                  width={200}
                  height={40}
                />
              </Link>
            </h1>
            {/* <div className="search-area">
              <ComTextField size="small" name="name" />
            </div> */}
            <nav className="gnb-area">
              <ul>
                <li className="lang">
                  <BtnLang />
                </li>
                {gnbItems.map(({ href, label, count }) => (
                  <li key={href} className={href}>
                    <Link href={`/${href}`} className="gnb-link">
                      {iconMap[href]}
                      <span className="blind">{label}</span>
                      {count ? <em className="count">{count}</em> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header-menu">
            <nav className="menu-area">
              <ul>
                <li className="btn-all-menu">
                  <button type="button" onClick={fnOpen}>
                    <MenuIcon />
                    <span className="hidden">All menus</span>
                  </button>
                </li>
                {categories.arr.map((item) => (
                  <li key={item.title}>
                    <Link href="/">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {/* drawer: all menus */}
      <CustomDrawer
        open={open}
        onClose={fnClose}
        title={categories.title}
        className="all-menu w-full"
      >
        <AllMenu />
      </CustomDrawer>
    </>
  );
}
