"use client";
import { Box, Tabs, Tab, Button } from "@mui/material";
import React from "react";
import CommonTable from "../../components/Table";

export default function ContactUs() {
  const [tab, setTab] = React.useState("AI MODELS");
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <Box as={"main"} mt={{ xs: "100px", md: "164px" }}>
      <Box
        sx={{
          display: "flex",
          paddingInline: "40px",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          component={"h1"}
          sx={{
            fontSize: { xs: "24px", sm: "24px", md: "36px", lg: "36px" },
          }}
          color={"#fff"}
          fontWeight={700}
          textAlign={"center"}
        >
          My Conversions
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            right: 40,
            top: 20,
          }}
        >
          <Button
            variant={"contained"}
            sx={{
              padding: "2px 14px",
              fontSize: "14px",
              height: "36px",
              width: "106px",
              background: "#fff",
              borderRadius: "40px",
              fontWeight: 700,
              color: "#000",
              textTransform: "none",
              "&.MuiButton-root:hover": { background: "#fff" },
            }}
          >
            Download
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          aria-label="wrapped label tabs example"
          sx={{
            marginTop: "10px",
            overflowX: "auto",
            "& .MuiTabs-indicator": { backgroundColor: "#fff" },
            "& .Mui-selected": { color: "rgba(255, 255, 255, 1) !important" },
          }}
        >
          <Tab
            label="AI MODELS"
            value="AI MODELS"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "14px",
              fontWeight: 700,
              paddingInline: 0,
              marginInline: "15px",
            }}
          />
          <Tab
            label="VOCAL REMOVER"
            value="VOCAL REMOVER"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "14px",
              fontWeight: 700,
              paddingInline: 0,
              marginInline: "15px",
            }}
          />
          <Tab
            label="AI MASTERING"
            value="AI MASTERING"
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
            "AI MODELS": <CommonTable />,
            "VOCAL REMOVER": <CommonTable />,
            "AI MASTERING": <CommonTable />,
          }[tab]
        }
      </Box>
    </Box>
  );
}
