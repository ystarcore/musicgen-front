"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Box } from "@mui/material";

export default function Home() {
  const waveformRef = useRef(null);
  let wavesurfer;
  const [playPause, setPlayPause] = useState();

  useEffect(() => {
    wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#34374B",
      progressColor: "#F90",
      url: "/sample.wav",
      dragToSeek: true,
      width: "35vw",
      hideScrollbar: true,
      normalize: true,
      barGap: 5,
      height: 16,
      barHeight: 20,
      barRadius: 20,
      barWidth: 4,
    });
    // wavesurfer.load('/sample.wav');

    // wavesurfer.on("finish", () => {
    //     console.log("song finished");
    // });

    // wavesurfer.on("ready", () => {
    //     console.log("Waveform is ready");
    // });
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

  const handleMute = () => {
    if (wavesurfer) {
      console.log("muted");
      wavesurfer.toggleMute(); // Toggle mute state
    }
  };

  return (
    <Box>
      <div onClick={handlePlay} ref={waveformRef} />
      <Image
        src={"/images/Volume.svg"}
        width={24}
        height={24}
        alt={"sound"}
        onClick={handleMute}
      />
    </Box>
  );
}
