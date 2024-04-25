"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import Drawer from "../../../components/Drawer";

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
  {
    title: "Do I need to upload an acapella?",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

export default function SingleVoice() {
  const [voice, setVoice] = useState("create");
  return (
    <>
      <Box
        component={"section"}
        display={"flex"}
        sx={{
          margin: {
            sm: "25px 15px",
            md: "50px 25px",
            lg: "150px 50px 100px 50px",
          },
          flexDirection: { md: "row", lg: "row" },
        }}
      >
        <Box
          display={"flex"}
          component={"div"}
          width={"100%"}
          justifyContent={"space-between"}
          fontWeight={500}
        >
          <Box
            component={"div"}
            display={"flex"}
            gap={"38px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            fontWeight={500}
            fontSize={"36px"}
          >
            <Box>
              <Image
                height={130}
                src={"/images/imageOne.png"}
                width={130}
                title="green iguana"
                alt="VoiceCard"
                style={{
                  borderRadius: "100px",
                }}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"7px"}>
              <Box
                component={"h1"}
                fontWeight={900}
                sx={{ fontSize: { sm: "16px", md: "26px", lg: "36px" } }}
              >
                AI Donald Trump Model
              </Box>
              <Box
                component={"h2"}
                fontWeight={500}
                sx={{ fontSize: { sm: "8px", md: "10px", lg: "16px" } }}
              >
                Uploaded By{" "}
                <Typography variant={"span"} color="#AD00FF">
                  BurntKnight
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            gap={"30px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            fontWeight={500}
            fontSize={"14px"}
            sx={{
              gap: { sm: "10px", md: "20px" },
            }}
          >
            <Box
              textAlign={"center"}
              display={"flex"}
              flexDirection={"column"}
              gap={"6px"}
            >
              <Box>
                <Image
                  height={30}
                  src={"/images/voice.svg"}
                  width={30}
                  title="green iguana"
                  alt={"voice"}
                  style={{
                    borderRadius: "100px",
                  }}
                />
              </Box>
              <Box fontSize={"14px"}>42.3K Uses</Box>
            </Box>
            <Box
              textAlign={"center"}
              display={"flex"}
              flexDirection={"column"}
              gap={"6px"}
            >
              <Box>
                <Image
                  height={30}
                  src={"/images/Like.svg"}
                  width={30}
                  alt={"Like"}
                  title="green iguana"
                  style={{
                    borderRadius: "100px",
                  }}
                />
              </Box>
              <Box fontSize={"14px"}>972 Likes</Box>
            </Box>
            <Box
              textAlign={"center"}
              display={"flex"}
              flexDirection={"column"}
              gap={"6px"}
            >
              <Box>
                <Image
                  height={30}
                  src={"/images/Share.svg"}
                  width={30}
                  alt={"Share"}
                  title="green iguana"
                  style={{
                    borderRadius: "100px",
                  }}
                />
              </Box>
              <Box fontSize={"14px"}>Share</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        component={"section"}
        display={"flex"}
        flexDirection={"column"}
        gap={"15px"}
        sx={{
          margin: { sm: "25px 15px", md: "50px 25px", lg: "100px 50px" },
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={"30px"}>
          <Box
            component={"h1"}
            fontWeight={voice !== "speech" ? 700 : 400}
            onClick={() => setVoice("create")}
            sx={{
              opacity: voice !== "speech" ? "" : "60%",
              fontSize: { sm: "15px", md: "20px", lg: "20px" },
              cursor: "pointer",
            }}
          >
            Create Conversion
          </Box>
          <Box
            component={"h2"}
            fontWeight={voice === "speech" ? 700 : 400}
            onClick={() => setVoice("speech")}
            sx={{
              opacity: voice === "speech" ? "" : "60%",
              fontSize: { sm: "15px", md: "20px", lg: "20px" },
              cursor: "pointer",
            }}
          >
            Text-To-Speech
          </Box>
        </Box>
        {
          {
            create: (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontWeight={500}
                fontSize={"14px"}
                sx={{
                  border: "2px dotted",
                  borderRadius: "24px",
                  height: { sm: "250px", md: "275px", lg: "325px" },
                }}
              >
                <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
                  <Box display={"flex"} gap={"40px"} alignItems={"center"}>
                    <Box>
                      <Image
                        height={58}
                        src={"/images/Music.svg"}
                        width={58}
                        alt={"Music"}
                        title="green iguana"
                        style={{
                          borderRadius: "100px",
                        }}
                      />
                    </Box>
                    <Box
                      component={"h3"}
                      fontWeight={600}
                      sx={{
                        fontSize: { md: "28px", lg: "32px" },
                      }}
                    >
                      Provide an input for Donald Trump
                    </Box>
                  </Box>
                  <Box
                    component={"div"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box
                      component={"div"}
                      display={"flex"}
                      alignItems={"center"}
                      gap={"20px"}
                      sx={{
                        borderRadius: "16px",
                        backgroundColor: "#100F12",
                        padding: "11px 20px",
                      }}
                    >
                      <Box>
                        <Image
                          height={30}
                          src={"/images/YouTube.svg"}
                          width={30}
                          alt={"YouTube"}
                          title="green iguana"
                        />
                      </Box>
                      <Box
                        component={"h3"}
                        fontWeight={500}
                        sx={{
                          opacity: "50%",
                          fontSize: { sm: "10px", md: "12px", lg: "16px" },
                        }}
                      >
                        Paste a YouTube link...
                      </Box>
                    </Box>
                    <Box
                      sx={{ fontSize: { sm: "10px", md: "12px", lg: "16px" } }}
                    >
                      or
                    </Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      alignItems={"center"}
                      gap={"20px"}
                      sx={{
                        borderRadius: "16px",
                        backgroundColor: "#100F12",
                        padding: "11px 20px",
                      }}
                    >
                      <Box>
                        <Image
                          height={30}
                          src={"/images/MusicFile.svg"}
                          width={30}
                          title="green iguana"
                          alt={"MusicFile"}
                        />
                      </Box>
                      <Box
                        component={"h3"}
                        fontSize={"16px"}
                        fontWeight={500}
                        sx={{
                          opacity: "50%",
                          fontSize: { sm: "10px", md: "12px", lg: "16px" },
                        }}
                      >
                        Drop an audio file...
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ),
            speech: (
              <Box
                display={"flex"}
                flexDirection={"column"}
                fontWeight={500}
                fontSize={"14px"}
                sx={{
                  mt: "20px",
                  gap: "12px",
                }}
              >
                <Box
                  component={"h1"}
                  fontWeight={400}
                  sx={{
                    fontSize: { sm: "15px", md: "20px", lg: "20px" },
                  }}
                >
                  Text to speech
                </Box>
                <Box component={"div"}>
                  <FormControl fullWidth>
                    <TextField
                      multiline
                      minRows={6}
                      fullWidth
                      id={"message"}
                      placeholder={"Enter the text you want your model to say!"}
                      type={"text"}
                      sx={{
                        backgroundColor: "rgba(16, 15, 18, 1)",
                        borderRadius: "24px",
                        fontSize: "16px",
                        fontWeight: 400,
                        "& textarea": { color: "#fff" },
                      }}
                    />
                  </FormControl>
                </Box>
                <Box
                  component={"div"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    component={"div"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{
                      gap: "10px",
                    }}
                  >
                    <Button
                      variant="contained"
                      endIcon={
                        <Image
                          height={17}
                          src={"/images/DownTriangle.svg"}
                          width={17}
                          alt={"Share"}
                          title="DownTriangle"
                          style={{
                            borderRadius: "100px",
                          }}
                        />
                      }
                      sx={{
                        fontSize: "16px",
                        height: "45px",
                        width: "132px",
                        background: "#fff",
                        borderRadius: "10px",
                        fontWeight: 500,
                        color: "#7E22CE",
                        textTransform: "none",
                        "&.MuiButton-root:hover": { background: "#fff" },
                      }}
                    >
                      American
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={
                        <Image
                          height={17}
                          src={"/images/DownTriangle.svg"}
                          width={17}
                          alt={"Share"}
                          title="DownTriangle"
                          style={{
                            borderRadius: "100px",
                          }}
                        />
                      }
                      sx={{
                        fontSize: "16px",
                        height: "45px",
                        width: "132px",
                        background: "#fff",
                        borderRadius: "10px",
                        fontWeight: 500,
                        color: "#7E22CE",
                        textTransform: "none",
                        "&.MuiButton-root:hover": { background: "#fff" },
                      }}
                    >
                      Expression
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={
                        <Image
                          height={17}
                          src={"/images/DownTriangle.svg"}
                          width={17}
                          alt={"Share"}
                          title="DownTriangle"
                          style={{
                            borderRadius: "100px",
                          }}
                        />
                      }
                      sx={{
                        fontSize: "16px",
                        height: "45px",
                        width: "132px",
                        background: "#fff",
                        borderRadius: "10px",
                        fontWeight: 500,
                        color: "#7E22CE",
                        textTransform: "none",
                        "&.MuiButton-root:hover": { background: "#fff" },
                      }}
                    >
                      Speed
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        // p: 0,
                        fontSize: "16px",
                        height: "45px",
                        width: "132px",
                        background: "#7E22CE",
                        borderRadius: "10px",
                        fontWeight: 500,
                        color: "#fff",
                        textTransform: "none",
                        "&.MuiButton-root:hover": { background: "#7E22CE" },
                      }}
                    >
                      Create
                    </Button>
                  </Box>
                </Box>
              </Box>
            ),
          }[voice]
        }
      </Box>
      <Box
        component={"section"}
        sx={{
          margin: "50px",
        }}
      >
        <Drawer list={faqs} />
      </Box>
    </>
  );
}
