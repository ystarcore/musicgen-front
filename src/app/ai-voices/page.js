"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  FormControl,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import VoiceCard from "../../components/VoiceCard";
//import { promises as fs } from "fs";
import { title } from "process";
import voiceData from "../ai-voices/data.js";
const skills = [
  "Music",
  "Cartoon",
  "Anime",
  "Gaming",
  "German",
  "Korean",
  "French",
  "Italian",
  "Public figure",
];

export default function AiVoiceList() {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [playingId, setPlayingId] = useState(null);
  const handlePlayAudio = (id, audioUrl) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    if (playingId === id) {
      setCurrentAudio(null);
      setPlayingId(null);
      return;
    }
    const newAudio = new Audio(audioUrl);
    newAudio.play();
    setCurrentAudio(newAudio);
    setPlayingId(id);

    newAudio.onended = () => {
      setPlayingId(null);
    };
  };
  return (
    <>
      <main>
        <Box
          component={"section"}
          pb={{ xs: "41px", md: 0 }}
          sx={{
            paddingTop: { xs: "100px", md: "151px" },
            borderBottomLeftRadius: { xs: "12px", md: "none" },
            borderBottomRightRadius: { xs: "12px", md: "none" },
            backgroundImage: {
              xs: `url('/images/background.png')`,
              md: "none",
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundColor: { xs: "black", md: "unset" },
          }}
        >
          <Box
            display={"flex"}
            gap={{ xs: "10px", md: "19px" }}
            alignItems={"center"}
            width={"93%"}
            margin={"auto"}
          >
            <FormControl fullWidth>
              <TextField
                placeholder={"Search AI Models"}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Image
                        src="/images/search.svg"
                        width={24}
                        height={24}
                        alt="search"
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  "& fieldset": { border: "none" },
                  "& input": {
                    color: "#fff",
                    paddingY: { xs: "14.5px", md: "17px" },
                  },
                }}
              />
            </FormControl>
            <Button
              variant={"contained"}
              sx={{
                height: { xs: "52px", md: "57px" },
                backgroundColor: "#7E22CE",
                "&.MuiButton-root:hover": { backgroundColor: "#7E22CE" },
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 500,
                width: "132px",
              }}
            >
              Create
            </Button>
          </Box>
          <Box
            display={"flex"}
            gap={{ xs: "10px", md: "14px" }}
            justifyContent={"center"}
            m={"auto"}
            mt={"34px"}
            width={"90%"}
            flexWrap={"wrap"}
          >
            {skills.map((item, index) => (
              <Box
                component={"h3"}
                key={index}
                textAlign={"center"}
                padding={{ xs: "8px 16px", md: "8px 23px" }}
                color={"#7F00EE"}
                backgroundColor={"#fff"}
                borderRadius={"50px"}
                fontWeight={500}
                fontSize={{ xs: "13px", md: "15px" }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          component={"section"}
          sx={{
            maxWidth: { xs: "87.69%", md: "96%" },
            margin: "auto",
            mt: { xs: "40px", md: "92px" },
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              gridAutoColumns: { xs: "350px", md: "315px" },
              gridTemplateColumns: {
                xs: "repeat(auto-fill,350px)",
                md: "repeat(auto-fill,315px)",
              },
              gap: { xs: "20px", md: "40px" },
              display: { xs: "block", md: "grid" },
            }}
          >
            {voiceData?.map((data) => {
              return (
                <VoiceCard
                  key={data.id}
                  id={data.id}
                  // description={data.detail}
                  title={data.title}
                  imageUrl={data.img}
                  audioUrl={data.audio}
                  isMedia={true}
                  isPlaying={playingId === data.id}
                  onPlay={handlePlayAudio}
                />
              );
            })}
          </Box>
        </Box>
      </main>
    </>
  );
}
