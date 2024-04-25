"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  FormControl,
  TextField,
  InputAdornment,
  Button,
  useMediaQuery,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const maxWidth1500 = useMediaQuery("(max-width:1500px)");
  const maxWidth1200 = useMediaQuery("(max-width:1200px)");
  const maxWidth1100 = useMediaQuery("(max-width:1100px)");
  const maxWidth950 = useMediaQuery("(max-width:950px)");
  const maxWidth840 = useMediaQuery("(max-width:840px)");
  const maxWidth430 = useMediaQuery("(max-width:430px)");
  function getSlidesToShow() {
    switch (true) {
      case maxWidth430:
        return 0.99;
      case maxWidth840:
        return 3.5;
      case maxWidth950:
        return 2.5;
      case maxWidth1100:
        return 3.1;
      case maxWidth1200:
        return 3.5;
      case maxWidth1500:
        return 4.1;
      default:
        return 5.1;
    }
  }
  function getSlidesToShow2() {
    switch (true) {
      case maxWidth430:
        return 0.99;
      case maxWidth840:
        return 3.5;
      case maxWidth950:
        return 2.5;
      case maxWidth1100:
        return 3.1;
      case maxWidth1200:
        return 3.5;
      case maxWidth1500:
        return 4.1;
      default:
        return 3;
    }
  }
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    afterChange: (current) => setActiveSlide(current),
    customPaging: function (index) {
      return (
        <div
          style={{
            backgroundColor: index === activeSlide ? "white" : "white",
            color: index === activeSlide ? "white" : "black",
            borderRadius: index === activeSlide ? 10 : " 60%",
            width: index === activeSlide ? 40 : 10,
            height: index === activeSlide ? 10 : 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            marginTop: 54,
            marginRight: 5,
          }}
          key={index}
          onClick={() => handleButtonClick(index)}
        />
      );
    },
  };
  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: getSlidesToShow2(),
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    afterChange: (current) => setActiveSlide2(current),
    customPaging: function (index) {
      return (
        <div
          style={{
            backgroundColor: index === activeSlide2 ? "white" : "white",
            color: index === activeSlide2 ? "white" : "black",
            borderRadius: index === activeSlide2 ? 10 : " 60%",
            width: index === activeSlide2 ? 40 : 10,
            height: index === activeSlide2 ? 10 : 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            marginTop: 54,
            marginRight: 5,
          }}
          key={index}
          onClick={() => handleButtonClick2(index)}
        />
      );
    },
  };
  const handleButtonClick = (index) => {
    setActiveSlide(index);
  };
  const handleButtonClick2 = (index) => {
    setActiveSlide2(index);
  };
  return (
    <main className={styles.main}>
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
            backgroundImage: `url('/images/homeGradiant.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundColor: "black",
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
        >
          <Box
            marginTop={"50px"}
            component={"div"}
            sx={{
              gap: "40px",
            }}
          >
            <Slider {...settings2}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele, index) => {
                return (
                  <Box key={ele}>
                    {index === activeSlide2 ? (
                      <Card
                        sx={{
                          display: "flex",
                          width: "748px",
                          height: "318px",
                          backgroundColor: "#100F12",
                          color: "white",
                          justifyContent: "space-between",
                          borderRadius: "18px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "50px 32px 50px 32px",
                          }}
                        >
                          <CardContent sx={{ flex: "1 0 auto" }}>
                            <Typography
                              component="div"
                              variant="h5"
                              sx={{
                                fontSize: "12px",
                                fontWeight: 400,
                              }}
                            >
                              15.5K uses · 286 likes
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.white"
                              component="div"
                              sx={{
                                fontSize: "36px",
                                fontWeight: 700,
                              }}
                            >
                              Alastor
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.white"
                              component="div"
                              sx={{
                                fontSize: "12px",
                                fontWeight: 400,
                              }}
                            >
                              Logpoma
                            </Typography>
                          </CardContent>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Button
                              variant="contained"
                              sx={{
                                // p: 0,
                                fontSize: "14px",
                                height: "48px",
                                width: "204px",
                                background: "#7E22CE",
                                borderRadius: "12px",
                                fontWeight: 600,
                                color: "#fff",
                                textTransform: "none",
                                display: "flex",
                                justifyContent: "space-between",
                                "&.MuiButton-root:hover": {
                                  background: "#7E22CE",
                                },
                              }}
                            >
                              <Image
                                src="/images/voice.svg"
                                width={20}
                                height={20}
                                alt="RightArrow"
                              />
                              <Typography
                                variant="subtitle1"
                                color="text.white"
                                component="div"
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: 700,
                                }}
                              >
                                Jammable Alstor
                              </Typography>{" "}
                            </Button>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            position: "relative",
                          }}
                        >
                          <Image
                            height={318}
                            src={"/images/imageOne.png"}
                            width={480}
                            title="green iguana"
                            alt="VoiceCard"
                          />
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              position: "absolute",
                              right: { md: "3%", lg: "5%" },
                              top: { md: "3%", lg: "5%" },
                            }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                fontSize: "14px",
                                height: "34px",
                                width: "110px",
                                background: "#7E22CE",
                                borderRadius: "8px",
                                fontWeight: 700,
                                color: "#fff",
                                textTransform: "none",
                                padding: "5px 16px 5px 16px",
                                "&.MuiButton-root:hover": {
                                  background: "#7E22CE",
                                },
                              }}
                            >
                              🔥 Trendy{" "}
                            </Button>
                          </Box>
                        </Box>
                      </Card>
                    ) : (
                      <VoiceCard
                        key={ele}
                        title={"Juice wrld (Better)"}
                        description={"15.5K uses · 286 likes · Logpoma"}
                        imageUrl={"/images/imageOne.png"}
                      />
                    )}
                  </Box>
                );
              })}
            </Slider>
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
              onClick={() => {
                router.push(`ai-voices`);
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
              right: { md: "3%", lg: "5%" },
              bottom: 0,
              display: { md: "block", lg: "block" },
            }}
          >
            <Image
              src="/images/MiceImage.svg"
              width={318}
              height={318}
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
