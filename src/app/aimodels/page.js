import React from "react";
import Image from "next/image";
import {
  Box,
  FormControl,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import VoiceCard from "../../components/VoiceCard";

const skills = [
  "Music",
  "Cartoon",
  "Anime",
  "Gaming",
  "German",
  "Korean",
  "French",
  "Italian",
  "Public figure",
];

export default function Conversation() {
  return (
    <>
      <NavBar />
      <Box
        component={"section"}
        sx={{
          padding: {
            sm: "30px 15px 25px 15px",
            md: "60px 25px 25px 25px",
            lg: "85px 50px 50px 50px",
          },
        }}
      >
        <Box
          display={"flex"}
          sx={{
            gap: "10px",
          }}
        >
          <Box>
            <FormControl>
              <TextField
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
                    borderRadius: "10px",
                    border: "none",
                    width: { sm: "384px", md: "484px", lg: "1589px" },
                    height: "54px",
                  },
                }}
              />
            </FormControl>
          </Box>
          <Button
            sx={{
              textTransform: "none",
              color: "white",
              background: "#7E22CE",
              width: "132px",
              height: "57px",
              padding: "16px 20px 16px 20px",
              borderRadius: "10px",
              "&.MuiButton-root:hover": { background: "#7E22CE" },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box component={"section"}>
        <Box
          display={"flex"}
          gap={"14px"}
          justifyContent={"center"}
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
      <Box
        component={"section"}
        sx={{
          padding: {
            sm: "30px 15px 25px 15px",
            md: "60px 25px 25px 25px",
            lg: "85px 50px 50px 50px",
          },
        }}
      >
        <Box
          component={"div"}
          display={"flex"}
          sx={{
            flexWrap: "wrap",
            gap: { sm: "40px", md: "70px", lg: "100px" },
          }}
        >
          {[...Array(30).keys()].map((ele, index) => (
            <VoiceCard
              description={"15.5K uses · 286 likes · Logpoma"}
              title={"Juice wrld (Better)"}
              imageUrl={"/images/imageOne.png"}
            />
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
