"use client";
import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

const pages = ["Overview", "Features", "Pricing", "Contact"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleNavigation = (e, id) => {
    if (id === 1) {
      setAnchorElNav(e.currentTarget);
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
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
          <Image
            src="/images/whiteLogo.svg"
            width={31}
            height={31}
            alt="logo"
          />
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
                key={page}
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
                    {page} <ExpandMoreIcon />{" "}
                  </>
                ) : (
                  page
                )}
              </Typography>
            ))}
          </Box>

          <Button
            variant="contained"
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
          <Menu
            sx={{
              mt: "50px",
              "& ul": {
                padding: "15px 20px",
                gap: "20px",
                display: "flex",
                flexDirection: "column",
              },
            }}
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={{
              style: {
                borderRadius: "14px",
                "&ul": {
                  borderRadius: "14px",
                },
              },
            }}
            autoFocus={false}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ display: "flex", gap: "16px", p: 0, height: "30px" }}
            >
              <Image src="/images/Mic.svg" width={16} height={16} alt={"mic"} />
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  component={"h6"}
                  sx={{ lineHeight: "17px", fontSize: "14px", fontWeight: 600 }}
                >
                  AI Voices
                </Typography>
                <Typography
                  component={"body2"}
                  sx={{ lineHeight: "9px", fontSize: "8px", fontWeight: 500 }}
                >
                  All of community uploaded voices.
                </Typography>
              </Box>
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ display: "flex", gap: "16px", p: 0, height: "30px" }}
            >
              <Image
                src="/images/Music notes.svg"
                width={16}
                height={16}
                alt={"mic"}
              />
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  component={"h6"}
                  sx={{
                    lineHeight: "17px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  Duets
                </Typography>
                <Typography
                  component={"body2"}
                  sx={{ lineHeight: "9px", fontSize: "8px", fontWeight: 500 }}
                >
                  Create duets with multiple voices!
                </Typography>
              </Box>
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ display: "flex", gap: "16px", p: 0, height: "30px" }}
            >
              <Image
                src="/images/Audio.svg"
                width={16}
                height={16}
                alt={"mic"}
              />
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  component={"h6"}
                  sx={{ lineHeight: "17px", fontSize: "14px", fontWeight: 600 }}
                >
                  Custom Voices
                </Typography>
                <Typography
                  component={"body2"}
                  sx={{ lineHeight: "9px", fontSize: "8px", fontWeight: 500 }}
                >
                  Train custom voices with your own datasets!
                </Typography>
              </Box>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
