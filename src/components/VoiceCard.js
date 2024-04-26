"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, Typography, Box } from "@mui/material";
import styles from "./component.module.css";

export default function VoiceCard({ imageUrl, title, description }) {
  const router = useRouter();
  return (
    <Card
      className={styles.imageContainer}
      sx={{
        width: "100%",
        boxShadow: "none",
        cursor: "pointer",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: "18px",
      }}
      onClick={() => {
        router.push(`ai-voices/${1}`);
      }}
    >
      <Box sx={{ position: "relative", width: "100%", aspectRatio: "1.24" }}>
        <Image
          src={imageUrl}
          fill
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
