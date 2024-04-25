"use client";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Drawer from "../../components/Drawer";
const faqs = [
  {
    title: "How do I make AI Donald Trump covers?",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "What input can I use for my AI Donald Trump covers?",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "How long will my AI Donald Trump cover take?",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "How many credits does each AI Donald Trump cover use?",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

export default function CustomVoice() {
  const handleOnDropFile = (files) => {};
  const handleChangeInputFile = (e) => {
    e.preventDefault();
    handleOnDropFile(e.target.files);
  };

  return (
    <main>
      <Box
        margin={"auto"}
        mt={"186px"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"50px"}
        maxWidth="1220px"
        width={"85%"}
      >
        <Box as={"h1"} fontWeight={500} fontSize={"48px"} textAlign={"center"}>
          Convert any voice to any voice...
        </Box>
        <Box
          width="100%"
          as={"section"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              as={"h2"}
              fontWeight={700}
              fontSize={"48px"}
              textAlign={"start"}
            >
              Custom Voices
            </Box>
            <Box
              as={"p"}
              fontWeight={500}
              fontSize={"16px"}
              textAlign={"center"}
            >
              Share to the community or keep private for your own use.
            </Box>
          </Box>
          <Box
            component="div"
            display="flex"
            alignItems="center"
            data-test-id="drop-id"
            flexDirection="column"
            justifyContent="center"
            sx={{
              height: "325px",
              maxWidth: "675px",
              width: "47%",
              border: "2px solid #D6D6D6 doted",
              borderStyle: "dashed",
              borderRadius: "24px",
              gap: "14px",
            }}
            onDrop={(e) => {
              e.preventDefault();
              handleOnDropFile(e.dataTransfer.files);
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              id="fileInput"
              data-test-id="fileInput"
              style={{ display: "none" }}
              onChange={handleChangeInputFile}
              accept="image/png, image/jpg, image/jpeg,"
            />
            <Image
              src={"/images/MusicFile.svg"}
              alt="music"
              width={29.5}
              height={36.5}
            />
            <Box
              as="p"
              align="center"
              className="drag-text"
              fontWeight={600}
              fontSize={"24px"}
            >
              Drop your voice here
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width={"100%"} height={"262px"} position="relative" my={"50px"}>
        <Image
          src={"/images/lineGradiant.svg"}
          alt={"background"}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        as={"h3"}
        fontWeight={700}
        fontSize={"48px"}
        textAlign={"center"}
        mb={"24px"}
      >
        FAQs
      </Box>
      <Box
        component={"section"}
        maxWidth={"90%"}
        margin={"auto"}
        border={"1px solid #fff"}
        borderRadius={"20px"}
        padding={"40px"}
      >
        <Drawer list={faqs} />
      </Box>
    </main>
  );
}
