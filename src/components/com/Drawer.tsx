"use client";

import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
  anchor?: "left" | "right" | "top" | "bottom"; // 기본값 설정 가능
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function CustomDrawer({
  open,
  onClose,
  anchor = "left",
  title,
  children,
  className,
}: Props) {
  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 320,
          p: 2,
          position: "relative",
          height: "100%",
        }}
        role="presentation"
        className={className}
      >
        {/* 닫기 버튼 */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {/* 타이틀 */}
        {title && (
          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            {title}
          </Typography>
        )}

        {/* 콘텐츠 */}
        {children}
      </Box>
    </Drawer>
  );
}
