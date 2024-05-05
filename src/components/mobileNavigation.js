"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useScreenInfo } from "../Utils/useScreenInfo";
import { usePathname } from "next/navigation";
const paths = ["/", "/duets", "/custom-voices", "/ai-voices"];
const navMenus = [
  { name: "Home", pathName: "/", icon: "/images/NavbarIcon/home.svg" },
  {
    name: "Models",
    pathName: "/ai-voices",
    icon: "/images/NavbarIcon/microphone.svg",
  },
  {
    name: "Duets",
    pathName: "/duets",
    icon: "/images/NavbarIcon/musicnote.svg",
  },
  {
    name: "Voices",
    pathName: "/custom-voices",
    icon: "/images/NavbarIcon/voice-square.svg",
  },
];
export default function MobileNavigation() {
  const { isDesktop } = useScreenInfo();
  const pathName = usePathname();
  function showNavMenu() {
    return paths.includes(pathName) || /^\/ai-voices\/\d+$/i.test(pathName);
  }

  function activeMenu(path) {
    if (
      (path === pathName || /^\/ai-voices\/\d+$/i.test(pathName)) &&
      (path.includes("ai-voices") || /^\/ai-voices\/\d+$/i.test(path))
    )
      return true;
    return pathName === path;
  }
  return (
    <>
      <Box
        as={"nav"}
        display={!isDesktop && showNavMenu() ? "flex" : "none"}
        width={"-webkit-fill-available"}
        position={"fixed"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        height={"71px"}
        bottom={"30px"}
        marginInline={{ xs: "17px", sm: "22px" }}
        sx={{ background: "rgba(17, 19, 20, 1)", borderRadius: "1000px" }}
      >
        {navMenus.map((ele, index) => (
          <Link href={ele.pathName} passHref key={ele.name}>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={"3px"}
            >
              <Image
                style={{ opacity: activeMenu(ele.pathName) ? 1 : 0.5 }}
                src={ele.icon}
                alt={"home"}
                width={24}
                height={24}
              />
              <Box
                component={"span"}
                fontSize={12}
                fontWeight={400}
                sx={{
                  color: activeMenu(ele.pathName)
                    ? "#fff"
                    : "rgba(255, 255, 255, 0.5)",
                }}
              >
                {ele.name}
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
}
