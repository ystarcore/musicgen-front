import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Box display={"flex"} justifyContent={"space-evenly"} marginTop={"67px"}>
        <Box
          component={"ul"}
          sx={{ listStyle: "none" }}
          display={"flex"}
          gap={"12px"}
          flexDirection={"column"}
        >
          <Image
            src="/images/whiteLogo.svg"
            width={20}
            height={20}
            alt="brand"
          />
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Home
          </Box>
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Settings
          </Box>
        </Box>
        <Box
          component={"ul"}
          display={"flex"}
          sx={{ listStyle: "none" }}
          gap={"12px"}
          flexDirection={"column"}
        >
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Links
          </Box>
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Pricing
          </Box>
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Login
          </Box>
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Sign Up
          </Box>
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Forgot Password
          </Box>
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            History
          </Box>
        </Box>
        <Box
          component={"ul"}
          sx={{ listStyle: "none" }}
          display={"flex"}
          gap={"12px"}
          flexDirection={"column"}
        >
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Legal
          </Box>
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Terms of Use
          </Box>
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Privacy Policy
          </Box>
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            DMCA Policy
          </Box>
          <Box component={"li"} fontSize={"14px"} lineHeight={"21px"}>
            Refund Policy
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"85%"}
        maxWidth={"1200px"}
        margin={"auto"}
        marginTop={"67px"}
        borderTop={"1px solid #fff"}
        height={"65px"}
      >
        <Box component={"p"} opacity={0.4} fontSize={"16px"}>
          &#169; Copyright 2024
        </Box>
      </Box>
    </footer>
  );
}
