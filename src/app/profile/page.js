"use client";
import React, { useState } from "react";
import MyAudios from "./audios";
import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import SideBar from "./sideBar";

export default function Profile() {
  const [page, setPage] = useState("My Voices");
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "20px",
        flexDirection: "column",
        paddingInline: { xs: "20px", md: "100px" },
        marginTop: { xs: "100px", md: "200px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar sx={{ width: "74px", height: "74px" }}>H</Avatar>
          <Typography>Michel Josh</Typography>
          <Box sx={{ position: "absolute", top: -10, right: -10 }}>
            <Image
              src={"/images/edit.svg"}
              alt={"edit"}
              width={24}
              height={24}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", width: "100%", gap: "40px", marginTop: "40px" }}
      >
        <SideBar page={page} setPage={setPage} />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            width: "100%",
          }}
        >
          {{ "My Voices": <MyAudios /> }[page]}
        </Box>
      </Box>
    </Box>
  );
}
