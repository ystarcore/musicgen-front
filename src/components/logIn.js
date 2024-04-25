"use client";
import {
  useMediaQuery,
  FormControl,
  TextField,
  InputAdornment,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login(props) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const router = useRouter();

  const openSignUp = () => {
    if (isMobile) {
      router.push("signUp");
    } else {
      props.openSignUp();
    }
  };

  const onLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (props.onLogin) {
      props.onLogin();
    }
  };

  return (
    <section>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={"20px"}
        mb={"50px"}
      >
        <Image src="/images/whiteLogo.svg" width={54} height={54} alt="brand" />
        <Box as="h2" fontSize={36} fontWeight={500}>
          Signin
        </Box>
        <Box as="h3" fontSize={18} fontWeight={400}>
          Sign in to your account
        </Box>
      </Box>
      <form style={{ width: "100%" }} onSubmit={onLogin}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={"24px"}
        >
          <FormControl
            fullWidth
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Box as="label" fontSize={16} fontWeight={400}>
              Email
            </Box>
            <TextField
              fullWidth
              id="email"
              placeholder="Enter your email-id"
              type="email"
              autoComplete="username"
              sx={{
                height: "48px",
                border: "1px solid white",
                borderRadius: "8px",
                "& input": { color: "#fff", paddingY: "12.5px" },
                "& fieldset": { border: "none" },
              }}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box component="label" fontSize={16} fontWeight={400}>
                Password
              </Box>
              <Box
                component="span"
                fontSize={16}
                color="#AD00FF"
                sx={{ cursor: "pointer" }}
              >
                Forgot?
              </Box>
            </Box>
            <TextField
              fullWidth
              id="password"
              placeholder="Enter your password"
              type="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Image
                      src="/images/eye.svg"
                      alt="eye"
                      width={24}
                      height={24}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                height: "48px",
                border: "1px solid white",
                borderRadius: "8px",
                "& input": { color: "#fff", paddingY: "12.5px" },
                "& fieldset": { border: "none" },
              }}
            />
          </FormControl>
        </Box>
        <Box
          display="flex"
          mt={"32px"}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={"24px"}
        >
          <Button
            sx={{
              color: "#fff",
              borderRadius: "8px",
              height: "48px",
              fontSize: "16px",
              fontWeight: 600,
              width: "100%",
              background:
                "linear-gradient(to right, rgba(43, 17, 115, 1), rgba(89, 26, 216, 1), rgba(239, 26, 204, 1))",
            }}
            type="submit"
          >
            Sign in
          </Button>
          <Button
            disabled
            sx={{
              color: "black",
              borderRadius: "8px",
              height: "48px",
              fontSize: "16px",
              fontWeight: 600,
              width: "100%",
              background: "white",
            }}
            type="submit"
          >
            Continue with Google
          </Button>
          <Box display="flex">
            <Box as="p" fontSize={16} fontWeight={400}>
              Already have an account ?
            </Box>
            <Box
              ml={"8px"}
              as="span"
              fontSize={16}
              fontWeight={400}
              role="button"
              color="#AD00FF"
              sx={{ cursor: "pointer" }}
              onClick={openSignUp}
            >
              Sign Up
            </Box>
          </Box>
        </Box>
      </form>
    </section>
  );
}
