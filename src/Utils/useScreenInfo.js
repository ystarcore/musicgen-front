"use client";
import { useMediaQuery } from "@mui/material";

export function useScreenInfo() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const isDesktop = useMediaQuery("(min-width:900px)");

  return { isMobile, isDesktop };
}
