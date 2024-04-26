"use client";
import { Box } from "@mui/material";
import Slider from "react-slick";
import React, { useState } from "react";
import VoiceCard from "../VoiceCard";

const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function VoicesSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [data, setData] = useState([...temp]);

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
            marginTop: 54,
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
        {data.map((ele, index) => {
          return (
            <React.Fragment key={index}>
              <Box sx={{ width: "276px" }}>
                <VoiceCard
                  imageUrl={"/images/trump.png"}
                  title={"Juice wrld (Better)"}
                  description={"15.5K uses · 286 likes · Logpoma"}
                />
              </Box>
            </React.Fragment>
          );
        })}
      </Slider>
    </>
  );
}
