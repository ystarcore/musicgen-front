"use client";
import {
  FormControl,
  TextField,
  InputAdornment,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignUp(props) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const router = useRouter();

  const openLogin = () => {
    if (isMobile) {
      router.push("logIn");
    } else {
      props.openLogIn();
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
          Create Account
        </Box>
        <Box as="h3" fontSize={18} fontWeight={400}>
          Create an account
        </Box>
      </Box>
      <form style={{ width: "100%" }}>
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
              <Box as="label" fontSize={16} fontWeight={400}>
                Password
              </Box>
              <Box
                as="span"
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
              autoComplete="new-password"
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
          <FormControl
            fullWidth
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box as="label" fontSize={16} fontWeight={400}>
                Confirm Password
              </Box>
              <Box
                as="span"
                fontSize={16}
                color="#AD00FF"
                sx={{ cursor: "pointer" }}
              >
                Forgot?
              </Box>
            </Box>
            <TextField
              fullWidth
              id="confirm_password"
              placeholder="Enter your password"
              type="password"
              autoComplete="new-password"
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
            Create account
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
              onClick={openLogin}
            >
              Log in
            </Box>
          </Box>
        </Box>
      </form>
    </section>
  );
}
