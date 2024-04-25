"use client";
import React, { useRef } from "react";
import {
  Backdrop,
  Box,
  Grow,
  InputAdornment,
  Paper,
  Popper,
  TextField,
  Avatar,
} from "@mui/material";
import Image from "next/image";

const artist = [
  { name: "AI Donald Trump Model", image: "/images/trump.png" },
  { name: "Juice wrld (Better)", image: "/images/juice.png" },
  { name: "AI Ronaldo", image: "/images/imageOne.png" },
];
export default function Dutes() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [savedArtist, setSavedArtist] = React.useState([]);
  const [lastArtist, setLastArtist] = React.useState({});

  const handleOpenArtist = (e, index) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseArtist = (e) => {
    setAnchorEl(null);
  };
  const selectArtistFromList = (name) => {
    const currunt = artist.find((item) => item.name === name);
    setLastArtist(currunt);
    setSavedArtist((prev) => [currunt, ...prev]);
    handleCloseArtist();
  };

  return (
    <>
      <main>
        <Box mt={"166px"}>
          <Box as={"h1"} fontSize={48} fontWeight={700} textAlign={"center"}>
            Dutes
          </Box>
          <Box as={"h2"} fontSize={16} fontWeight={500} textAlign={"center"}>
            Use multiple voices for the first time...
          </Box>
          <Box
            sx={{
              position: "relative",
              height: "108px",
              flexShrink: 0,
              width: "108px",
              borderRadius: "50%",
              margin: "auto",
              my: "50px",
              border: "1px solid #fff",
            }}
          >
            {lastArtist.image && (
              <Image
                src={lastArtist.image}
                alt={lastArtist.name}
                fill
                style={{ borderRadius: "50%" }}
              />
            )}
          </Box>
          <Box
            style={{ display: "flex" }}
            gap="30px"
            width={"100%"}
            as={"section"}
          >
            <HorizontalScrollableBox direction={"row-reverse"}>
              {[...savedArtist].map((item) => (
                <Box
                  key={item}
                  sx={{
                    position: "relative",
                    height: "200px",
                    flexShrink: 0,
                    width: "200px",
                    borderRadius: "50%",
                    backgroundColor: "aqua",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={"user"}
                    fill
                    style={{ borderRadius: "50%" }}
                  />
                </Box>
              ))}
            </HorizontalScrollableBox>
            <Box
              sx={{
                height: "200px",
                flexShrink: 0,
                width: "200px",
                borderRadius: "50%",
                backgroundColor: "rgba(16, 15, 18, 1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={"/images/plus.svg"}
                alt={"add"}
                width={65}
                height={65}
                style={{ cursor: "pointer" }}
                onClick={handleOpenArtist}
              />
            </Box>
            <HorizontalScrollableBox direction={"row"}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Box
                  key={item}
                  sx={{
                    height: "200px",
                    flexShrink: 0,
                    width: "200px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 15, 18, 1)",
                  }}
                />
              ))}
            </HorizontalScrollableBox>
          </Box>
        </Box>
      </main>

      <Backdrop open={Boolean(anchorEl)} onClick={handleCloseArtist}>
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          role={""}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "top" ? "start top" : "start bottom",
              }}
            >
              <Paper
                sx={{ width: "350px", background: "transparent" }}
                onClick={(event) => event.stopPropagation()}
              >
                <TextField
                  fullWidth
                  id={"search"}
                  placeholder={"Search all voices..."}
                  type={"text"}
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "#fff",
                    "& input": { color: "black", paddingY: "11.5px" },
                    "& fieldset": { borderRadius: "50px" },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image
                          src="/images/blackSearch.svg"
                          alt="eye"
                          width={24}
                          height={24}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  as={"ul"}
                  mt={"12px"}
                  sx={{
                    display: "flex",
                    gap: "8px",
                    flexDirection: "column",
                    listStyleType: "none",
                    paddingInline: "24px",
                    paddingBlock: "15px",
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                  }}
                >
                  <Box
                    as={"p"}
                    fontSize={"14px"}
                    fontWeight={400}
                    color={"rgba(4, 2, 12, 0.7)"}
                    mb={"4px"}
                  >
                    Trending Now
                  </Box>
                  {artist.map((item) => (
                    <Box
                      as={"li"}
                      key={item.name}
                      display={"flex"}
                      alignItems={"center"}
                      gap={"17.35px"}
                      sx={{ cursor: "pointer" }}
                      onClick={() => selectArtistFromList(item.name)}
                    >
                      <Avatar sx={{ width: "35px", height: "35px" }} />
                      <Box display={"flex"} flexDirection={"column"}>
                        <Box as={"h6"} fontWeight={600} fontSize={"16px"}>
                          {item.name}
                        </Box>
                        <Box as={"p"} fontWeight={500} fontSize={"7.3px"}>
                          Uploaded By
                          <Box as={"span"} color={"#AD00FF"}>
                            BurntKnight
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Backdrop>
    </>
  );
}

const HorizontalScrollableBox = ({ children, direction }) => {
  const scrollableRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.pageX - scrollableRef.current.offsetLeft;
    const scrollLeft = scrollableRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - scrollableRef.current.offsetLeft;
      const walk = (x - startX) * 3; // Adjust scroll speed if needed
      scrollableRef.current.scrollLeft = scrollLeft - walk;
    };

    document.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  return (
    <Box
      gap={"30px"}
      flexDirection={direction}
      width={"50%"}
      ref={scrollableRef}
      sx={{
        display: "flex",
        overflowX: "auto",
        "-ms-overflow-style": "none" /* IE and Edge */,
        scrollbarWidth: "none" /* Firefox */,
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      onMouseDown={(e) => {
        if (e.button === 0) {
          handleMouseDown(e);
        }
      }}
    >
      {children}
    </Box>
  );
};
