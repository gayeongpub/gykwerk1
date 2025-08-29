"use client";

// common
import { SITE_NAME } from "@/constants/site";
// react/next
// import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// mui
// import Popper, { PopperPlacementType } from "@mui/material/Popper";
// import { PopperPlacementType } from "@mui/material/Popper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Fade from "@mui/material/Fade";
// import Paper from "@mui/material/Paper";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";

const ftMenuItems = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/sitemap", label: "Sitemap" },
];

const menuAll = [
  {
    title: "Account",
    arr: ["Sign in", "View Cart"],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const [msgOpen, setMsgOpen] = useState(false);
  // const fnMsgOpen = () => {
  //   setMsgOpen((prev) => !prev);
  // };

  // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
  //   null
  // );
  // const [open, setOpen] = React.useState(false);
  // const [placement, setPlacement] = React.useState<PopperPlacementType>();

  // const handleClick =
  //   (newPlacement: PopperPlacementType) =>
  //   (event: React.MouseEvent<HTMLButtonElement>) => {
  //     setAnchorEl(event.currentTarget);
  //     setOpen((prev) => placement !== newPlacement || !prev);
  //     setPlacement(newPlacement);
  //   };

  return (
    <>
      {/* <section className="all-menu section">
        <All />
      </section> */}
      <footer className="footer">
        <div className="in">
          <div className="top-wrap">
            <div className="left">
              <Link href="/" title={SITE_NAME}>
                <Image
                  src="/logo.svg"
                  alt={`${SITE_NAME} Logo Image`}
                  width={200}
                  height={100}
                />
              </Link>
            </div>
            <div className="middle">
              {menuAll.map((item) => (
                <div key={item.title} className="depth-1"></div>
              ))}
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom-wrap">
            <div className="left">
              <p>&copy; {`2025 ${SITE_NAME}. All rights reserved.`}</p>
              <ul className="menu-area">
                {ftMenuItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right">
              <div className="call-list">
                {/* icon */}
                <div>
                  <strong className="call">0123456789</strong>
                  <strong className="time">Working 09:00 - 17:00</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="quick">
        {/* <button
          type="button"
          className={`btn-msg ${msgOpen ? "close" : ""}`}
          title="Top"
          onClick={fnMsgOpen}
        >
          msg button
        </button>
        <Popper
          sx={{ zIndex: 1200 }}
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography sx={{ p: 2 }}>
                  The content of the Popper.
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Button onClick={handleClick("top-end")}>top-end</Button> */}
        <button
          type="button"
          className="btn-top btn"
          title="Top"
          onClick={scrollToTop}
        >
          <NorthOutlinedIcon />
        </button>
      </div>
    </>
  );
}
