"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../components/navbar";
import {
  Box,
  FormControl,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VoiceCard from "../components/VoiceCard";

const skills = [
  "Music",
  "Cartoon",
  "Anime",
  "Gaming",
  "Public figure",
  "German",
];
export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
  };
  return (
    <main className={styles.main}>
      <NavBar />

      <Box
        component={"section"}
        sx={{ height: { xs: `calc(100vh - 65px)`, md: `calc(693px - 65px)` } }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          height={"inherit"}
          backgroundColor={"rgba(255, 255, 255, 0.08)"}
          sx={{
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          <Box
            component={"h1"}
            width={"90%"}
            fontWeight={500}
            fontSize={"54px"}
            sx={{
              textAlign: { md: "center", lg: "center" },
            }}
          >
            Make my own AI song covers!
          </Box>
          <Box
            component={"h2"}
            width={"90%"}
            fontWeight={400}
            fontSize={"18px"}
            mt={"24px"}
            sx={{
              textAlign: { md: "center", lg: "center" },
            }}
          >
            The #1 platform for making high quality AI covers in seconds!
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            marginTop={"70px"}
            sx={{
              width: { md: "50%", lg: "50%" },
              maxWidth: "584px",
            }}
          >
            <FormControl fullWidth>
              <TextField
                fullWidth
                placeholder={"search all voices..."}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Image
                        src="/images/search.svg"
                        width={20}
                        height={20}
                        alt="search"
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: "50px",
                    border: "none",
                    height: "54px",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                  },
                }}
              />
            </FormControl>
          </Box>
          <Box
            display={"flex"}
            gap={"14px"}
            justifyContent={"center"}
            mt={"34px"}
            width={"90%"}
            flexWrap={"wrap"}
          >
            {skills.map((item, index) => (
              <Box
                component={"h3"}
                key={index}
                textAlign={"center"}
                padding={"8px 23px"}
                color={"#7F00EE"}
                backgroundColor={"#fff"}
                borderRadius={"50px"}
                fontWeight={500}
                fontSize={"15px"}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box component={"section"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            padding: {
              sm: "54px 0 54px 20px",
              md: "54px 0 54px 40px",
              lg: "54px 0 54px 60px",
            },
          }}
          height={"inherit"}
          backgroundColor={"rgba(255, 255, 255, 0.08)"}
        >
          <Box
            display={"flex"}
            textAlign={"center"}
            alignItems={"center"}
            component={"div"}
            sx={{
              paddingRight: { sm: "20px", md: "40px", lg: "60px" },
            }}
            width={"100%"}
            justifyContent={"space-between"}
            fontWeight={500}
          >
            <Box
              component={"h3"}
              fontWeight={500}
              sx={{
                fontSize: { sm: "20px", md: "30px", lg: "36px" },
              }}
            >
              Featured AI Voices
            </Box>
            <Button
              sx={{
                textTransform: "none",
                color: "white",
                border: "1px solid white",
                borderRadius: "3px",
                fontSize: { sm: "12px", md: "12px", lg: "15px" },
                fontWeight: 500,
                padding: "0 18px 0 18px",
                height: { sm: "30px", md: "30px", lg: "34px" },
              }}
            >
              View all
            </Button>
          </Box>
          <Box marginTop={"50px"} component={"div"}>
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele, index) => {
                return (
                  <Box key={ele}>
                    <VoiceCard
                      key={ele}
                      title={"Juice wrld (Better)"}
                      description={"15.5K uses · 286 likes · Logpoma"}
                      imageUrl={"/images/imageOne.png"}
                    />
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>
      </Box>
      <Box
        component={"section"}
        sx={{
          height: "330px",
          padding: { md: "54px 60px", lg: "54px 60px" },
        }}
      >
        <Box
          component={"div"}
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            borderRadius: "32px",
            padding: { md: "45px 0 54px 60px", lg: "45px 0 54px 60px" },
            height: "222px",
            position: "relative",
          }}
          backgroundColor={"rgba(255, 255, 255, 0.08)"}
        >
          <Box
            sx={{
              position: "absolute",
              right: "5%",
              bottom: 0,
              display: { md: "block", lg: "block" },
            }}
          >
            <Image
              src="/images/MiceImage.svg"
              width={318}
              height={328}
              alt="MiceImage"
            />
          </Box>
          <Box
            component={"div"}
            display={"flex"}
            flexDirection={"column"}
            sx={{
              gap: "53px",
            }}
          >
            <Box
              fontWeight={700}
              sx={{
                fontSize: { md: "36px", lg: "36px" },
              }}
            >
              Create your own custom voice!
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  p: 0,
                  fontSize: "14px",
                  height: "36px",
                  width: "215px",
                  background: "#fff",
                  borderRadius: "40px",
                  fontWeight: 600,
                  color: "#7E22CE",
                  textTransform: "none",
                  "&.MuiButton-root:hover": { background: "#fff" },
                }}
              >
                Create New Voice &nbsp;
                <Image
                  src="/images/RightArrow.svg"
                  width={18}
                  height={18}
                  alt="RightArrow"
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
