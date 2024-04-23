"use client";
import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  MenuItem,
  Modal,
  Fade,
  Backdrop,
  Popper,
  Grow,
  Paper,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Login from "./logIn";
import SignUp from "./signUp";

const pages = [
  { label: "Overview", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contactUs" },
];

function NavBar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [authModal, setAuthModal] = React.useState("");
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleNavigation = (e, index) => {
    if (index === 1) {
      return setAnchorElNav(e.currentTarget);
    }
    router.push(pages[index].path);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const openAuth = () => {
    if (isMobile) {
      router.push("logIn");
    } else {
      setAuthModal("logIn");
    }
  };

  const closeAuth = () => {
    setAuthModal("");
  };

  const openSignUp = () => {
    if (isMobile) {
      router.push("signUp");
    } else {
      setAuthModal("signUp");
    }
  };

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          margin: "25px 50px",
          width: "-webkit-fill-available",
          borderRadius: "50px",
          height: "65px",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
        }}
        bgcolor={"red"}
      >
        <Container
          maxWidth="xl"
          sx={{ padding: "0px !important", maxWidth: "90% !important" }}
        >
          <Toolbar disableGutters>
            <Link href="/" passHref>
              <Image
                src="/images/whiteLogo.svg"
                width={31}
                height={31}
                alt="logo"
              />
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px",
              }}
              component={"nav"}
            >
              {pages.map((page, index) => (
                <Typography
                  component="a"
                  key={page.label}
                  onClick={(e) => handleNavigation(e, index)}
                  sx={{
                    cursor: "pointer",
                    my: 2,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  {index === 1 ? (
                    <>
                      {page.label} <ExpandMoreIcon />{" "}
                    </>
                  ) : (
                    page.label
                  )}
                </Typography>
              ))}
            </Box>
            <Button
              variant="contained"
              onClick={openAuth}
              sx={{
                p: 0,
                fontSize: "14px",
                height: "36px",
                width: "81px",
                background: "#fff",
                borderRadius: "40px",
                color: "#000",
                textTransform: "none",
                "&.MuiButton-root:hover": { background: "#fff" },
              }}
            >
              Sign In
            </Button>

            <Backdrop open={Boolean(anchorElNav)} onClick={handleCloseNavMenu}>
              <Popper
                open={Boolean(anchorElNav)}
                anchorEl={anchorElNav}
                role={""}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "start top" : "start bottom",
                    }}
                  >
                    <Paper
                      sx={{
                        boxShadow: "2px 4px 16px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "14px",
                      }}
                    >
                      <MenuItem sx={{ paddingInline: "20px" }}>
                        <Link href="/ai-voices" passHref>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "16px",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              src="/images/Mic.svg"
                              width={16}
                              height={16}
                              alt="mic"
                            />
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                component="h6"
                                sx={{
                                  lineHeight: "17px",
                                  fontSize: "14px",
                                  fontWeight: 600,
                                }}
                              >
                                AI Voices
                              </Typography>
                              <Typography
                                component="p"
                                sx={{
                                  lineHeight: "9px",
                                  fontSize: "8px",
                                  fontWeight: 500,
                                }}
                              >
                                All of community uploaded voices.
                              </Typography>
                            </Box>
                          </Box>
                        </Link>
                      </MenuItem>
                      <MenuItem sx={{ paddingInline: "20px" }}>
                        <Link href="/duets" passHref>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "16px",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              src="/images/Music notes.svg"
                              width={16}
                              height={16}
                              alt="mic"
                            />
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                component="h6"
                                sx={{
                                  lineHeight: "17px",
                                  fontSize: "14px",
                                  fontWeight: 600,
                                }}
                              >
                                Duets
                              </Typography>
                              <Typography
                                component="p"
                                sx={{
                                  lineHeight: "9px",
                                  fontSize: "8px",
                                  fontWeight: 500,
                                }}
                              >
                                Create duets with multiple voices!
                              </Typography>
                            </Box>
                          </Box>
                        </Link>
                      </MenuItem>
                      <MenuItem sx={{ paddingInline: "20px" }}>
                        <Link href="/custom-voices" passHref>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "16px",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              src="/images/Audio.svg"
                              width={16}
                              height={16}
                              alt="mic"
                            />
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                component="h6"
                                sx={{
                                  lineHeight: "17px",
                                  fontSize: "14px",
                                  fontWeight: 600,
                                }}
                              >
                                Custom Voices
                              </Typography>
                              <Typography
                                component="p"
                                sx={{
                                  lineHeight: "9px",
                                  fontSize: "8px",
                                  fontWeight: 500,
                                }}
                              >
                                Train custom voices with your own datasets!
                              </Typography>
                            </Box>
                          </Box>
                        </Link>
                      </MenuItem>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Backdrop>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal
        open={Boolean(authModal)}
        onClose={closeAuth}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 200 }}
        aria-labelledby="login-modal"
        aria-describedby="login-ai-voices"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Fade in={Boolean(authModal)}>
          <Box
            position={"relative"}
            sx={{
              width: "523px",
              background: "rgba(16, 15, 18, 1)",
              borderRadius: "20px",
              padding: "72px",
              zIndex: 2,
            }}
          >
            <Box
              position={"absolute"}
              sx={{ cursor: "pointer", top: "28px", right: "28px" }}
            >
              <Image
                width={36}
                height={36}
                src={"/images/cross.svg"}
                alt={"close"}
                onClick={closeAuth}
              />
            </Box>
            {authModal === "logIn" ? (
              <Login openSignUp={openSignUp} />
            ) : (
              <SignUp openLogIn={openAuth} />
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default NavBar;
