"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import AudioWave from "../../components/audioWave";
export default function MyAudios() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"21px"}
        padding={"10.22px 15.72px 10.22px 15.72px"}
        sx={{ background: "rgba(16, 15, 18, 1)" }}
      >
        {[1, 2, 3].map((item, index) => (
          <Box key={index}>
            <Box as={"p"} fontWeight={400} fontSize={"20px"} mb={"3px"}>
              My Love
            </Box>
            <AudioWave />
            <Box
              as={"p"}
              fontWeight={400}
              fontSize={"16px"}
              textAlign={"end"}
              mt={"8px"}
            >
              Date: 20-03-2024
            </Box>
          </Box>
        ))}
      </Box>
      <Box marginTop="31px" display={"flex"}>
        <Button
          sx={{
            color: "#fff",
            height: "34px",
            fontSize: "16px",
            fontWeight: 600,
            width: "79px",
            background:
              "linear-gradient(to right, rgba(43, 17, 115, 1), rgba(89, 26, 216, 1), rgba(239, 26, 204, 1))",
            borderRadius: "8px",
            margin: "auto",
          }}
        >
          More
        </Button>
      </Box>
    </>
  );
}
