"use client";
import { Box } from "@mui/material";
import Slider from "react-slick";
import React, { useState } from "react";
import VoiceCard from "../VoiceCard";
import { useScreenInfo } from "../../Utils/useScreenInfo";
import voiceData from "@/app/ai-voices/data";

export default function VoicesSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [dataSet, setDataSet] = useState([...voiceData]);
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
      setActiveSlide(current);
    },
    variableWidth: true,
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
            marginTop: isMobile ? 34 : 54,
            marginRight: 5,
          }}
          key={index}
          onClick={() => setActiveSlide(index)}
        />
      );
    },
  };

  return (
    <>
      <Slider {...settings}>
        {dataSet.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <Box sx={{ width: { xs: "230px", md: "276px" } }}>
                <VoiceCard
                  key={data.id}
                  id={data.id}
                  // description={data.detail}
                  title={data.title}
                  imageUrl={data.img}
                />
              </Box>
            </React.Fragment>
          );
        })}
      </Slider>
    </>
  );
}
