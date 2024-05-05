"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  FormControl,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingSlider from "../components/Sliders/trendingSlider";
import VoicesSlider from "../components/Sliders/voicesSlider";
import { useScreenInfo } from "../Utils/useScreenInfo";

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
  const { isMobile } = useScreenInfo();

  return (
    <main className={styles.main}>
      <Box
        component={"section"}
        sx={{ height: { xs: `100%`, md: `calc(693px - 65px)` } }}
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
            paddingBottom: { xs: "40px", md: "auto" },
            backgroundImage: `url('/images/homeGradiant.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundColor: "black",
            paddingTop: { xs: "100px" },
          }}
        >
          <Box
            component={"h1"}
            width={"90%"}
            fontWeight={500}
            fontSize={"54px"}
            sx={{
              textAlign: {
                xs: "start",
                sm: "start",
                md: "center",
                lg: "center",
              },
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
              textAlign: {
                xs: "start",
                sm: "start",
                md: "center",
                lg: "center",
              },
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
            mt={"34px"}
            width={"90%"}
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "center",
              },
              flexWrap: "wrap", //{xs:'no-wrap',sm:'no-wrap',md:'wrap',lg:'wrap'},
              // overflowX: {xs:'auto',sm:'auto',md:'hidden',lg:'hidden'},
              padding: {
                xs: "8px 16px",
                sm: "8px 16px",
                md: "8px 23px",
                lg: "8px 23px",
              },
            }}
          >
            {skills.map((item, index) => (
              <Box
                component={"h3"}
                key={index}
                textAlign={"center"}
                color={"#7F00EE"}
                backgroundColor={"#fff"}
                borderRadius={"50px"}
                fontWeight={500}
                sx={{
                  padding: {
                    xs: "8px 16px",
                    sm: "8px 16px",
                    md: "8px 23px",
                    lg: "8px 23px",
                  },
                }}
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
              xs: "14px 0 34px 20px",
              sm: "14px 0 34px 20px",
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
              gap: "20px",
            }}
          >
            <TrendingSlider />
          </Box>
        </Box>
      </Box>
      <Box component={"section"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            padding: {
              xs: "54px 0 54px 20px",
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
              paddingRight: { xs: "20px", sm: "20px", md: "40px", lg: "60px" },
            }}
            width={"100%"}
            justifyContent={"space-between"}
            fontWeight={500}
          >
            <Box
              component={"h3"}
              fontWeight={500}
              sx={{
                fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "36px" },
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
                fontSize: { xs: "10px", sm: "12px", md: "12px", lg: "15px" },
                fontWeight: 500,
                padding: "0 18px 0 18px",
                height: { xs: "30px", sm: "30px", md: "30px", lg: "34px" },
              }}
              onClick={() => {
                router.push(`ai-voices`);
              }}
            >
              View all
            </Button>
          </Box>
          <Box marginTop={"50px"} component={"div"}>
            <VoicesSlider />
          </Box>
        </Box>
      </Box>
      <Box
        component={"section"}
        sx={{
          height: "auto",
          padding: {
            xs: "34px 20px 0",
            sm: "44px 40px 0",
            md: "54px 60px",
            lg: "54px 60px",
          },
        }}
      >
        <Box
          component={"div"}
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            borderRadius: "32px",
            padding: {
              xs: "27px 0 34px 20px",
              sm: "27px 0 44px 40px",
              md: "45px 0 54px 60px",
              lg: "45px 0 54px 60px",
            },
            height: "222px",
            position: "relative",
            background: isMobile
              ? "linear-gradient(to right, rgba(46, 16, 101, 1), rgba(90, 39, 180, 1))"
              : "linear-gradient(to right,rgba(46, 16, 101, 1) ,rgba(91, 33, 182, 1))",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: { md: "3%", lg: "5%" },
              bottom: 0,
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
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
                fontSize: { xs: "26px", sm: "34px", md: "36px", lg: "36px" }
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
                onClick={() => router.push("custom-voices")}
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
