import React from "react";
import { Box, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const settings = [
  {
    icon: "/images/voice-square-white.svg",
    title: "My Voices",
    path: "/my-voices",
  },
  {
    icon: "/images/repeat-circle-white.svg",
    title: "My Conversions",
    path: "/my-conversions",
  },
  { icon: "/images/wallet-white.svg", title: "Manage Subscription", path: "/" },
  { icon: "/images/account-white.svg", title: "Edit Account", path: "/" },
  { icon: "/images/delete-white.svg", title: "Delete Account", path: "/" },
  { icon: "/images/logOut-white.svg", title: "Sign Out", path: "/" },
];
export default function SideBar({ page, setPage }) {
  return (
    <Box
      as={"aside"}
      sx={{
        width: { xs: "100%", md: "auto" },
        background: "black",
        color: "#fff",
      }}
    >
      {settings.map((setting, index) => (
        <Link href={setting.path} passHref>
          <MenuItem
            key={setting.title}
            onClick={() => {
              setPage(setting.title);
            }}
            sx={{
              paddingBlock: "14px",
              minWidth: "290px",
              paddingInline: "9px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background:
                page === setting.title
                  ? "linear-gradient(to right, rgba(43, 17, 115, 1), rgba(89, 26, 216, 1), rgba(239, 26, 204, 1))"
                  : "",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image
                src={setting.icon}
                alt={setting.title}
                width={24}
                height={24}
              />
              <Typography
                textAlign="center"
                color="#fff"
                fontWeight={700}
                fontSize="20px"
              >
                {setting.title}
              </Typography>
            </Box>
            {index !== settings.length - 1 && (
              <Image
                src={"/images/arrow-right-white.svg"}
                alt={setting.title}
                width={24}
                height={24}
              />
            )}
          </MenuItem>
        </Link>
      ))}
    </Box>
  );
}
