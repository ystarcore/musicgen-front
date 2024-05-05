"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Box } from "@mui/material";

export default function AudioWave() {
  const waveformRef = useRef(null);
  let wavesurfer;
  const [playPause, setPlayPause] = useState();

  useEffect(() => {
    wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#FFF",
      progressColor: "#F90",
      url: "/sample.wav",
      dragToSeek: true,
      width: "100%",
      hideScrollbar: true,
      normalize: true,
      barGap: 5,
      height: 32,
      barHeight: 45,
      barRadius: 20,
      barWidth: 4,
    });
    return () => {
      wavesurfer.destroy();
    };
  }, []);

  const handlePause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  const handlePlay = () => {
    if (wavesurfer) {
      wavesurfer.play();
      setPlayPause(true);
    }
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={"12px"}
      sx={{
        borderRadius: "24px",
        padding: "8px 12px 8px 8px",
        background:
          "linear-gradient(to right, rgba(43, 17, 115, 1), rgba(89, 26, 216, 1), rgba(239, 26, 204, 1))",
      }}
    >
      <Image
        src={"/images/Play.svg"}
        width={32}
        height={32}
        alt={"sound"}
        onClick={handlePlay}
      />
      <div ref={waveformRef} style={{ width: "100%" }} />
      <Box as={"span"} fontWeight={400} fontSize={"14px"}>
        0:08
      </Box>
      <Image src={"/images/Speaker.svg"} width={24} height={24} alt={"sound"} />
    </Box>
  );
}
