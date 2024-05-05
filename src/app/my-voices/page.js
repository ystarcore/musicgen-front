"use client";
import { Box, Divider, Tabs, Tab } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ContactUs() {
  const [tab, setTab] = React.useState("TRAINED");
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box as={"main"} mt={{ xs: "100px", md: "164px" }} mb={"450px"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"h1"}
          fontSize={"36px"}
          color={"#fff"}
          fontWeight={700}
          textAlign={"center"}
        >
          My Voices
        </Box>
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          aria-label="wrapped label tabs example"
          sx={{
            marginTop: "10px",
            "& .MuiTabs-indicator": { backgroundColor: "#fff" },
            "& .Mui-selected": { color: "rgba(255, 255, 255, 1) !important" },
          }}
        >
          <Tab
            label="TRAINED"
            value="TRAINED"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "14px",
              fontWeight: 700,
              paddingInline: 0,
              marginInline: "15px",
            }}
          />
          <Tab
            label="UPLOADED"
            value="UPLOADED"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "14px",
              fontWeight: 700,
              paddingInline: 0,
              marginInline: "15px",
            }}
          />
          <Tab
            label="SAVED"
            value="SAVED"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "14px",
              fontWeight: 700,
              paddingInline: 0,
              marginInline: "15px",
            }}
          />
        </Tabs>
        {
          {
            TRAINED: (
              <Box
                as={"section"}
                mt={"65px"}
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={{ xs: "30px", md: "55px" }}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  sx={{
                    maxWidth: "660px",
                    width: { xs: "90%", md: "80%" },
                    height: "146px",
                    borderRadius: "10px",
                    background: "rgba(16, 15, 18, 1)",
                  }}
                >
                  <Image
                    src={"/images/plus.svg"}
                    alt={"plus"}
                    width={14}
                    height={14}
                  />
                  <Box
                    as={"p"}
                    mt={"8px"}
                    fontWeight={400}
                    fontSize={"16px"}
                    color={"rgba(255, 255, 255, 0.7)"}
                  >
                    New Voice
                  </Box>
                </Box>
                <Divider
                  sx={{ background: "#fff", width: "90%", maxWidth: "983px" }}
                />
                <Box
                  as={"p"}
                  fontWeight={700}
                  fontSize={"14px"}
                  paddingInline={"30px"}
                  textAlign={"center"}
                  color={"rgba(255, 255, 255, 0.7)"}
                >
                  UPGRADE TO UNLOCK CUSTOM VOICE CLONING AND ADDITIONAL MODEL
                  SLOTS.
                </Box>
              </Box>
            ),
            UPLOADED: (
              <Box
                as={"section"}
                width={{ xs: "90%", md: "75%" }}
                mt={"65px"}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: "20px",
                }}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  sx={{
                    height: "146px",
                    borderRadius: "10px",
                    background: "rgba(16, 15, 18, 1)",
                  }}
                >
                  <Image
                    src={"/images/plus.svg"}
                    alt={"plus"}
                    width={14}
                    height={14}
                  />
                  <Box
                    as={"p"}
                    mt={"8px"}
                    fontWeight={400}
                    fontSize={"16px"}
                    color={"rgba(255, 255, 255, 0.7)"}
                  >
                    Upload your first Voice
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  sx={{
                    height: "146px",
                    borderRadius: "10px",
                    background: "rgba(16, 15, 18, 0.6)",
                  }}
                ></Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  sx={{
                    height: "146px",
                    borderRadius: "10px",
                    background: "rgba(16, 15, 18, 0.6)",
                  }}
                ></Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  sx={{
                    height: "146px",
                    borderRadius: "10px",
                    background: "rgba(16, 15, 18, 0.6)",
                  }}
                ></Box>
              </Box>
            ),
            SAVED: (
              <Box
                as={"h4"}
                mt={"160px"}
                fontWeight={700}
                fontSize={{ xs: "24px", md: "46px" }}
                textAlign={"center"}
                sx={{ maxWidth: "515px" }}
              >
                Voice models you save will show up here.
              </Box>
            ),
          }[tab]
        }
      </Box>
    </Box>
  );
}
