"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import Drawer from "../../../components/Drawer";
import VoiceCard from "../../../components/VoiceCard";
import voiceData from "../data.js";
import faqsData from "./faqsData.js";
import VoiceCardAI from "./VoiceCardAI";

export default function SingleVoice() {
  const params = useParams();
  const key = params.voiceId;
  console.log(key);

  const [voice, setVoice] = useState("create");

  console.log(voiceData.id);
  const selectedData = voiceData.find(
    (data) => String(data.id) === String(key)
  );
  console.log(selectedData);

  return (
    <>
      <Box
        component={"section"}
        display={"flex"}
        sx={{
          margin: { xs: "50px 15px 25px 15px", md: "150px 50px 100px 50px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          display={"flex"}
          component={"div"}
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
          width={"100%"}
          justifyContent={"space-between"}
          fontWeight={500}
        >
          <Box
            component={"div"}
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              gap: { xs: "20px", md: "38px" },
              flexDirection: { xs: "column", md: "row" },
            }}
            alignItems={"center"}
            fontWeight={500}
            fontSize={"36px"}
          >
            <Box>
              {/* <Image
                height={130}
                src={"/images/imageOne.png"}
                width={130}
                title="green iguana"
                alt="VoiceCard"
                style={{
                  borderRadius: "100px",
                }}
              /> */}
              <VoiceCardAI
                key={selectedData.id}
                Id={selectedData.id}
                title={selectedData.title}
                imageUrl={selectedData.img}
                audioUrl={selectedData.audio}
                isMedia={true}
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"7px"}
              sx={{
                alignItems: { xs: "center", md: "start" },
              }}
            >
              <Box
                component={"h1"}
                fontWeight={900}
                sx={{ fontSize: { xs: "22px", md: "26px", lg: "36px" } }}
              >
                {/* AI Donald Trump Model */}
                AI {selectedData.title} Model
              </Box>
              <Box
                component={"h2"}
                fontWeight={500}
                sx={{ fontSize: { xs: "14px", lg: "16px" } }}
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
            alignItems={"center"}
            fontWeight={500}
            fontSize={"14px"}
            sx={{
              justifyContent: { xs: "space-around", md: "space-between" },
              marginTop: { xs: "50px", md: 0 },
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
          margin: { xs: "25px 15px", md: "50px 25px", lg: "100px 50px" },
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={"30px"}>
          <Box
            component={"h1"}
            fontWeight={voice !== "speech" ? 700 : 400}
            onClick={() => setVoice("create")}
            sx={{
              opacity: voice !== "speech" ? "" : "60%",
              fontSize: { xs: "12px", md: "20px", lg: "20px" },
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
              fontSize: { xs: "12px", md: "20px", lg: "20px" },
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
                  border: "2px dashed",
                  borderRadius: "24px",
                  paddingBlock: { xs: "30px", md: "50px" },
                  height: "auto",
                }}
              >
                <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    sx={{
                      flexDirection: { xs: "column", md: "row" },
                      gap: { xs: "14px", md: "40px" },
                    }}
                  >
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
                        textAlign: { xs: "center" },
                      }}
                    >
                      Provide an input for {selectedData.title}
                    </Box>
                  </Box>
                  <Box
                    component={"div"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{
                      flexDirection: { xs: "column", md: "row" },
                      gap: "6px",
                    }}
                    alignItems={"center"}
                  >
                    <Box
                      component={"div"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"20px"}
                      sx={{
                        width: { xs: "auto", md: "auto" },
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
                          fontSize: "16px",
                        }}
                      >
                        Paste a YouTube link...
                      </Box>
                    </Box>
                    <Box sx={{ fontSize: "16px" }}>or</Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"20px"}
                      sx={{
                        width: { xs: "auto", md: "auto" },
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
                          fontSize: "16px",
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
                    fontSize: { xs: "15px", md: "20px", lg: "20px" },
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
                  sx={{
                    flexDirection: { xs: "column", md: "row" },
                    marginTop: { xs: "20px", md: 0 },
                    justifyContent: "space-between",
                    gap: "20px",
                    alignItems: "center",
                    width: { xs: "-webkit-fill-available", md: "auto" },
                  }}
                >
                  <Box
                    component={"div"}
                    display={"flex"}
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
                        fontSize: { xs: "12px", md: "16px" },
                        height: { xs: "33px", md: "45px" },
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
                        fontSize: { xs: "12px", md: "16px" },
                        height: { xs: "33px", md: "45px" },
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
                        fontSize: { xs: "12px", md: "16px" },
                        height: { xs: "33px", md: "45px" },
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
                        fontSize: { xs: "12px", md: "16px" },
                        height: { xs: "33px", md: "45px" },
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
          margin: { xs: "20px", md: "50px" },
        }}
      >
        <Drawer list={faqsData(selectedData.title)} />
      </Box>
    </>
  );
}
