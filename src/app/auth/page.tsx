"use client";

// react/next
import * as React from "react";
import { JSX } from "react";
// json
import { useI18n } from "@/context/i18nContext";
import Breadcrumb from "@/components/layout/BreadCrumb";
// mui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";

const snsList = ["google", "apple", "instagram"];
const iconMap: Record<string, JSX.Element> = {
  google: <GoogleIcon />,
  apple: <AppleIcon />,
  instagram: <InstagramIcon />,
  // facebook: <FacebookIcon />,
};

export default function Auth() {
  const { msg } = useI18n();

  return (
    <div className="auth in">
      <Breadcrumb />
      <div className="in-b">
        <h2 className="title-2">{msg.auth.signIn}</h2>
        <div className="form-field">
          <div className="input-area">
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField required id="outlined-required" label="Required" />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </Box>
          </div>
          <button type="button" className="prm btn rd xl">
            {msg.auth.signIn}
          </button>
        </div>
        <div className="sns-field">
          <ul>
            {snsList.map((item) => (
              <li key={item}>
                <button
                  className={`${item} type-line btn cc lg`}
                  title={item}
                  type="button"
                >
                  {iconMap[item]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
