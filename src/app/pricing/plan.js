import React from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";

const features = [
  { icon: "/images/true.svg", text: "25 Credits Per Month" },
  {
    icon: "/images/true.svg",
    text: "Credits Never Expire",
  },
  {
    icon: "/images/true.svg",
    text: "25 Credits → 25 Conversions",
  },
  { icon: "/images/true.svg", text: "The Essential AI Vocal Tool Kit" },
  {
    icon: "/images/true.svg",
    text: "Create Shareable Videos",
  },
  { icon: "/images/true.svg", text: "Text to Speech Access" },
];

export default function SinglePlan() {
  return (
    <>
      <Box
        as={"article"}
        borderRadius={"30px"}
        width={"-webkit-fill-available"}
        overflow={"hidden"}
        display={"flex"}
        flexDirection={"column"}
        justifycontent={"center"}
        backgroundColor={"rgba(16, 15, 18, 1)"}
      >
        <Box
          component={"h4"}
          display={"flex"}
          alignItems={"center"}
          fontSize="16px"
          fontWeight={800}
          height={"45px"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#7E22CE" }}
        >
          Starter{" "}
        </Box>
        <Box
          display={"flex"}
          alignItems={"baseline"}
          gap={"10px"}
          justifyContent={"center"}
          marginTop={"41px"}
          marginBottom={"20px"}
        >
          <Box componet={"h5"} fontSize="36px" fontWeight={700}>
            $1.99
          </Box>
          <Box componet={"p"} fontSize="16px" fontWeight={700}>
            /month.
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            p: 0,
            fontSize: "16px",
            height: "48px",
            fontWeight: 600,
            background: "#7E22CE",
            borderRadius: "14px",
            color: "#fff",
            textTransform: "none",
            margin: "auto",
            maxWidth: "85%",
            width: "356px",
            "&.MuiButton-root:hover": { background: "#7E22CE" },
          }}
        >
          Get Started
        </Button>
        <Box
          component={"p"}
          fontSize="13px"
          fontWeight={700}
          color={"#7E22CE"}
          textAlign={"center"}
          sx={{ opacity: "80%", marginTop: "8px" }}
        >
          No commitment - cancel anytime!
        </Box>
        <Box marginX={"65px"} mt={"40px"} mb={"80px"}>
          <Box componet={"h6"} fontSize={"14px"} fontWeight={700} mb={"14px"}>
            WHAT YOU GET
          </Box>
          <Box
            component={"ul"}
            display={"flex"}
            gap={"8px"}
            flexDirection={"column"}
          >
            {features.map((item) => (
              <Box
                component={"li"}
                key={item.text}
                sx={{ display: "flex", listStyle: "none", gap: "10px" }}
              >
                <Image src={item.icon} alt={"icon"} width={24} height={24} />
                <Box
                  component={"p"}
                  fontSize={"16px"}
                  fontWeight={400}
                  color={"#fff"}
                >
                  {item.text}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
