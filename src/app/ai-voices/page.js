import React from "react";
import Image from "next/image";
import {
  Box,
  FormControl,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
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

export default function AiVoiceList() {
  return (
    <>
      <main>
        <Box component={"section"} mt={"151px"}>
          <Box
            display={"flex"}
            gap={"19px"}
            alignItems={"center"}
            width={"93%"}
            margin={"auto"}
          >
            <FormControl fullWidth>
              <TextField
                placeholder={"Search AI Models"}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Image
                        src="/images/search.svg"
                        width={24}
                        height={24}
                        alt="search"
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  "& fieldset": { border: "none" },
                  "& input": { color: "#fff", paddingY: "17px" },
                }}
              />
            </FormControl>
            <Button
              variant={"contained"}
              sx={{
                height: "57px",
                backgroundColor: "#7E22CE",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 500,
                width: "132px",
              }}
            >
              Create
            </Button>
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
        <Box
          component={"section"}
          sx={{
            maxWidth: "96%",
            margin: "auto",
            mt: "92px",
          }}
        >
          <Box
            display={"grid"}
            sx={{
              justifyContent: "center",
              gridAutoColumns: "315px",
              gridTemplateColumns: "repeat(auto-fill,315px)",
              gap: "40px",
            }}
          >
            {[...Array(33).keys()].map((ele, index) => (
              <VoiceCard
                key={index}
                description={"15.5K uses · 286 likes · Logpoma"}
                title={"Juice wrld (Better)"}
                imageUrl={"/images/imageOne.png"}
              />
            ))}
          </Box>
        </Box>
      </main>
    </>
  );
}
