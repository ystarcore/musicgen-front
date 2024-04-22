"use client";
import { Box, Button, TextField, FormControl } from "@mui/material";
import Image from "next/image";
import React from "react";
import Footer from "../../components/footer";

export default function ContactUs() {
  return (
    <>
      <Box
        componet={"section"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box mt={"196px"}>
          <Box
            component={"h1"}
            fontSize={"45px"}
            color={"#fff"}
            fontWeight={700}
          >
            Contact Us
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"16px"}>
            <Image src="/images/mail.svg" width={24} height={24} alt="mail" />
            <Box
              componet={"p"}
              fontSize={"16px"}
              color={"fff"}
              fontWeight={400}
            >
              team@aivoicecreator.com
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "80px",
            maxWidth: "964px",
            width: "90%",
            marginBottom: "130px",
          }}
        >
          <form
            style={{
              width: "100%",
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"20px"}
              width={"100%"}
            >
              <FormControl fullWidth>
                <TextField
                  fullwidth
                  id={"first_name"}
                  placeholder={"First Name*"}
                  type={"text"}
                  sx={{
                    height: "58px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(16, 15, 18, 1)",
                    "& input": { color: "#fff" },
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  fullwidth
                  id={"last_name"}
                  placeholder={"Last Name*"}
                  type={"text"}
                  sx={{
                    height: "58px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(16, 15, 18, 1)",
                    border: "1px solid white",
                    "& fieldset": { border: "none" },
                    "& input": { color: "#fff" },
                  }}
                />
              </FormControl>
            </Box>
            <FormControl fullWidth>
              <TextField
                fullwidth
                id={"email"}
                placeholder={"Email*"}
                type={"email"}
                sx={{
                  height: "58px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(16, 15, 18, 1)",
                  "& input": { color: "#fff" },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                fullwidth
                id={"phone_number"}
                placeholder={"Phone Number*"}
                type={"number"}
                sx={{
                  height: "58px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(16, 15, 18, 1)",
                  "& input": { color: "#fff" },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                multiline
                minRows={4}
                fullwidth
                id={"message"}
                placeholder={"Your message..."}
                type={"text"}
                sx={{
                  backgroundColor: "rgba(16, 15, 18, 1)",
                  borderRadius: "10px",
                  "& textarea": { color: "#fff" },
                }}
              />
            </FormControl>
            <Button
              type={"submit"}
              sx={{
                color: "#fff",
                height: "48px",
                fontSize: "16px",
                fontWeight: 600,
                maxWidth: "332px",
                width: "100%",
                background:
                  "linear-gradient(to right, rgba(43, 17, 115, 1), rgba(89, 26, 216, 1), rgba(239, 26, 204, 1))",
              }}
            >
              Send
            </Button>
          </form>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
