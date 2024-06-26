"use client";
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import styles from "./component.module.css";
import { PauseCircle, PlayCircle } from "@mui/icons-material";

export default function VoiceCard({
  id,
  imageUrl,
  title,
  description,
  audioUrl,
  isMedia,
  isPlaying,
  onPlay,
}) {
  const router = useRouter();
  //const [isPlay, setIsPlay] = useState(false);
  //const [Id, setId] = useState(0);

  // const audio = useMemo(() => {
  //   if (typeof window !== "undefined") {
  //     return new Audio(audioUrl);
  //   }
  //   return null;
  // }, [audioUrl]);

  const handlePlay = (e) => {
    e.stopPropagation(); // Prevent card click
    onPlay(id, audioUrl);
  };

  // const toggleAudio = () => {
  //   if (isPlay) {
  //     audio.pause();
  //     setIsPlay(false);
  //   } else {
  //     audio.play();
  //     setIsPlay(true);
  //   }
  // };
  // const toggleAudio = () => {
  //   const audios = document.querySelectorAll("audio");
  //   audios.forEach((audio) => {
  //     if (audio.id === id) {
  //       if (audio.paused) {
  //         audio.play();
  //         setIsPlaying(true);
  //       } else {
  //         audio.pause();
  //         setIsPlaying(false);
  //       }
  //     } else {
  //       audio.pause();
  //       setIsPlaying(false);
  //     }
  //   });
  // };

  return (
    <Card
      className={styles.imageContainer}
      sx={{
        width: "100%",
        boxShadow: "none",
        cursor: "pointer",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: "18px",
        marginBottom: { xs: "20px" },
      }}
      onClick={() => {
        router.push(`ai-voices/${id}`);
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: { xs: "1.55", md: "1.24" },
        }}
      >
        {isMedia && (
          // <IconButton size="large" onMouseDown={toggleAudio}>
          <IconButton size="large" onMouseDown={handlePlay}>
            {isPlaying ? (
              <PauseCircle
                className={styles.icon}
                sx={{ fontSize: 40, color: "gray" }}
              />
            ) : (
              <PlayCircle
                className={styles.icon}
                sx={{ fontSize: 40, color: "gray" }}
              />
            )}
          </IconButton>
        )}

        <Image
          src={imageUrl}
          fill
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = "/images/juice.png"; // Display a fallback image
          }}
          className={styles.image}
          title="green iguana"
          alt="VoiceCard"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      <CardContent
        sx={{ paddingInline: "30px", paddingBlock: "16px", color: "white" }}
      >
        <Typography fontSize={"20px"} fontWeight={500} as="h4">
          {title}
        </Typography>
        <Typography fontSize={"12px"} mt={"5px"} fontWeight={400}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
