"use client";
import styles from "./page.module.css";
import NavBar from "@/components/navbar";
import Box from "@mui/material/Box";
import Footer from "@/components/footer";

const skills = [
  "Music",
  "Cartoon",
  "Anime",
  "Gaming",
  "Public figure",
  "German",
];
export default function Home() {
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
            textAlign={"center"}
            width={"90%"}
            fontWeight={500}
            fontSize={"54px"}
          >
            Make my own AI song covers!
          </Box>
          <Box
            component={"h2"}
            textAlign={"center"}
            width={"90%"}
            fontWeight={400}
            fontSize={"18px"}
            mt={"24px"}
          >
            The #1 platform for making high quality AI covers in seconds!
          </Box>
          <Box></Box>
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

      <Footer />
    </main>
  );
}
