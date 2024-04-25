"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function VoiceCard({ imageUrl, title, description }) {
  const router = useRouter();
  return (
    <Card
      sx={{
        width: "276px",
        boxShadow: "none",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: "18px",
        cursor: "pointer",
      }}
      onClick={() => {
        router.push(`ai-voices/${1}`);
      }}
    >
      <Image
        height={222}
        src={imageUrl}
        width={276}
        title="green iguana"
        alt="VoiceCard"
      />
      <CardContent style={{ marginLeft: "15px", color: "white" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography fontSize={"12px"} color="text.white">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
