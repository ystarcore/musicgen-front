import React from "react";
import Image from "next/image";
import { Card, CardContent, Typography } from "@mui/material";

export default function VoiceCard({ imageUrl, title, description }) {
  return (
    <Card
      sx={{
        width: "276px",
        boxShadow: "none",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: "18px",
      }}
    >
      <Image
        height={222}
        src={imageUrl}
        width={276}
        title="green iguana"
        alt="VoiceCard"
        style={{
          aspectRatio: "16:9",
        }}
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
