"use client";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Slider from "react-slick";
import React, { useRef, useState } from "react";
import Image from "next/image";
import VoiceCard from "../VoiceCard";
import { useRouter } from "next/navigation";
import styles from "../component.module.css";
import { useScreenInfo } from "../../Utils/useScreenInfo";

const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function TrendingSlider() {
  const slide = useRef(null);
  let timeoutId;
  const [activeSlide, setActiveSlide] = useState(0);
  const [data, setData] = useState([...temp]);
  const { isMobile } = useScreenInfo();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    lazyLoad: "progressive",
    afterChange: (current) => {
      if (current !== activeSlide) {
        setActiveSlide(current);
        clickHandler(); // Trigger click after 300ms
      }
    },
    variableWidth: true,
    focusOnSelect: true,
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
            marginTop: isMobile ? 30 : 54,
            marginRight: 5,
          }}
          key={index}
          onClick={() => setActiveSlide(index)}
        />
      );
    },
  };

  const clickHandler = () => {
    if (!timeoutId) {
      // Check if timeout is not already set
      timeoutId = setTimeout(() => {
        const activeSlide =
          slide.current.innerSlider.list.querySelector(".slick-active");
        activeSlide.click(); // Trigger click on active slide
        clearTimeout(timeoutId); // Clear the timeout
        timeoutId = null; // Reset the timeout ID
      }, 100);
    }
  };

  return (
    <>
      <Slider {...settings} ref={slide}>
        {data.map((ele, index) => {
          return (
            <React.Fragment key={index}>
              {isMobile ? (
                <TrendyCard
                  isTrendy={activeSlide === index}
                  imageUrl={"/images/trump.png"}
                  title={"Juice wrld (Better)"}
                  description={"15.5K uses · 286 likes · Logpoma"}
                />
              ) : activeSlide === index ? (
                <ExpandedCard />
              ) : (
                <Box sx={{ width: "276px" }}>
                  <VoiceCard
                    imageUrl={"/images/trump.png"}
                    title={"Juice wrld (Better)"}
                    description={"15.5K uses · 286 likes · Logpoma"}
                  />
                </Box>
              )}
            </React.Fragment>
          );
        })}
      </Slider>
    </>
  );
}
const TrendyCard = ({ imageUrl, title, description, isTrendy }) => {
  const router = useRouter();
  return (
    <Card
      className={styles.imageContainer}
      sx={{
        width: "250px",
        boxShadow: "none",
        cursor: "pointer",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: "18px",
      }}
      onClick={() => {
        router.push(`ai-voices/${1}`);
      }}
    >
      <Box sx={{ position: "relative", width: "100%", aspectRatio: "1.88" }}>
        <Image
          src={imageUrl}
          fill
          className={styles.image}
          title="green iguana"
          alt="VoiceCard"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isTrendy && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              right: "3%",
              top: "3%",
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
                "&.MuiButton-root:hover": { background: "#7E22CE" },
              }}
            >
              🔥 Trendy{" "}
            </Button>
          </Box>
        )}
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
};
const ExpandedCard = (props) => {
  return (
    <Box
      sx={{
        width: "748px",
        backgroundColor: "rgba(16, 15, 18, 1)",
        overflow: "hidden",
      }}
      display={"flex"}
      borderRadius={"18px"}
    >
      <Box
        sx={{
          width: "36%",
          display: "flex",
          justifyContent: "space-evenly",
          paddingInline: "32px",
          flexDirection: "column",
        }}
      >
        <Box>
          <Box as={"p"} fontWeight={400} fontSize={"12px"}>
            15.5K uses · 286 likes
          </Box>
          <Box as={"h3"} fontWeight={700} fontSize={"36px"}>
            Alastor
          </Box>
          <Box as={"h3"} fontWeight={400} fontSize={"14px"}>
            {" "}
            Logpoma
          </Box>
        </Box>
        <Box>
          <Button
            startIcon={
              <Image
                src={"/images/voice.svg"}
                alt={"wave"}
                width={20}
                height={20}
              />
            }
            sx={{
              padding: "12px 20px",
              color: "#fff",
              backgroundColor: "rgba(126, 34, 206, 1)",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Jammable Alstor
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "64%", aspectRatio: "1.55" }} position={"relative"}>
        <Image
          src={"/images/trump.png"}
          fill
          alt="VoiceCard"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              "&.MuiButton-root:hover": { background: "#7E22CE" },
            }}
          >
            🔥 Trendy{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
