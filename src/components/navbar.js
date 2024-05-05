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
  Menu,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Login from "./logIn";
import SignUp from "./signUp";
import { useScreenInfo } from "../Utils/useScreenInfo";

const pages = [
  { label: "Overview", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contactUs" },
];

const settings = [
  { icon: "/images/voice-square.svg", title: "My Voices", path: "/my-voices" },
  {
    icon: "/images/repeat-circle.svg",
    title: "My Conversions",
    path: "/my-conversions",
  },
  { icon: "/images/wallet.svg", title: "Manage Subscription", path: "/" },
  { icon: "/images/Account.svg", title: "Edit Account", path: "/profile" },
  { icon: "/images/delete.svg", title: "Delete Account", path: "/" },
  { icon: "/images/LogOut.svg", title: "Sign Out", path: "/" },
];

function NavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [authModal, setAuthModal] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(false);
  const { isMobile, isDesktop } = useScreenInfo();

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

  const onLogin = () => {
    setIsLogin(true);
    closeAuth();
  };
  return (
    <>
      {!isDesktop ? (
        <Box
          as={"header"}
          position={"absolute"}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"24px"}
        >
          <Image
            src={
              pathName === "/"
                ? "/images/whiteLogo.svg"
                : "/images/back-arrow.svg"
            }
            alt={"back-btn"}
            width={pathName === "/" ? 31 : 26}
            height={pathName === "/" ? 31 : 26}
            style={{ cursor: "pointer" }}
            onClick={() => router.back()}
          />
          <ProfileOptions setIsLogin={true} />
        </Box>
      ) : (
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
              <Box>
                {isLogin ? (
                  <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                    <Button
                      variant="contained"
                      onClick={() => router.push("/pricing")}
                      sx={{
                        p: 0,
                        fontSize: "14px",
                        height: "32px",
                        width: "96px",
                        background:
                          "linear-gradient(to right, rgba(43, 17, 115, 1), rgba(89, 26, 216, 1), rgba(239, 26, 204, 1))",
                        borderRadius: "8px",
                        color: "#fff",
                        textTransform: "none",
                      }}
                    >
                      Upgrade
                    </Button>
                    <ProfileOptions setIsLogin={setIsLogin} />
                  </Box>
                ) : (
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
                )}
              </Box>

              <Backdrop
                open={Boolean(anchorElNav)}
                onClick={handleCloseNavMenu}
              >
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
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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
      )}
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
              <Login openSignUp={openSignUp} onLogin={onLogin} />
            ) : (
              <SignUp openLogIn={openAuth} />
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

function ProfileOptions({ setIsLogin }) {
  const router = useRouter();
  const { isMobile } = useScreenInfo();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };
  const handleOpenUserMenu = (event) => {
    if (isMobile) {
      return router.push("/profile");
    }
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Image
        src={"/images/trump.png"}
        alt="profile"
        width={isMobile ? 32 : 43}
        height={isMobile ? 32 : 43}
        style={{
          borderRadius: "50%",
          border: "2px solid #fff",
        }}
        onClick={handleOpenUserMenu}
      />
      <Backdrop
        open={Boolean(anchorEl)}
        onClick={handleCloseUserMenu}
        sx={{
          backdropFilter: "blur(3px)",
          mt: "90px",
          "& .MuiPaper-root": { borderRadius: "12px" },
          "& ul": { display: "flex", flexDirection: "column" },
        }}
      >
        <Popper
          open={Boolean(anchorEl)}
          placement={"bottom-end"}
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
                  placement === "bottom" ? "start top" : "top right",
              }}
            >
              <Paper
                sx={{
                  boxShadow: "2px 4px 16px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "14px",
                  padding: "24px",
                  gap: "10px",
                }}
              >
                {settings.map((setting, index) => (
                  <MenuItem
                    key={setting.title}
                    onClick={() => {
                      index !== settings.length - 1
                        ? router.push(setting.path)
                        : setIsLogin(false);
                      handleCloseUserMenu();
                    }}
                    sx={{
                      paddingBlock: "14px",
                      minWidth: "290px",
                      paddingInline: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <Image
                        src={setting.icon}
                        alt={setting.title}
                        width={24}
                        height={24}
                      />
                      <Typography
                        textAlign="center"
                        color="#0F003A"
                        fontWeight={700}
                        fontSize="20px"
                      >
                        {setting.title}
                      </Typography>
                    </Box>
                    {index !== settings.length - 1 && (
                      <Image
                        src={"/images/arrow-right.svg"}
                        alt={setting.title}
                        width={24}
                        height={24}
                      />
                    )}
                  </MenuItem>
                ))}
              </Paper>
            </Grow>
          )}
        </Popper>
      </Backdrop>
    </>
  );
}

export default NavBar;
