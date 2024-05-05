"use client";
import React from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useScreenInfo } from "../Utils/useScreenInfo";

export default function CommonTable() {
  const { isMobile } = useScreenInfo();
  return (
    <Box
      as={"section"}
      mt={"65px"}
      sx={{
        width: "100%",
        paddingInline: { xs: "20px", md: "80px", lg: "150px" },
      }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#100F12",
          borderTopLeftRadius: { xs: "15px", md: 0 },
          borderTopRightRadius: { xs: "15px", md: 0 },
        }}
      >
        <Table
          sx={{ minWidth: "100%", overflowX: "auto" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#181818",
                  border: "1.18px solid #181818",
                  color: "#FFFFFF",
                  width: "175px",
                  fontSize: { xs: "10.22px", md: "14px" },
                  height: "39px",
                  fontWeight: 700,
                }}
              >
                Input Files
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#100F12",
                  border: "1.18px solid #181818",
                  color: "#FFFFFF",
                  width: "254px",
                  fontSize: { xs: "10.22px", md: "14px" },
                  height: "39px",
                  fontWeight: 700,
                }}
              >
                AI Model
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#100F12",
                  border: "1.18px solid #181818",
                  color: "#FFFFFF",
                  width: "440px",
                  fontSize: { xs: "10.22px", md: "14px" },
                  height: "39px",
                  fontWeight: 700,
                }}
              >
                Addio
              </TableCell>
              {!isMobile && (
                <TableCell
                  sx={{
                    backgroundColor: "#100F12",
                    border: "1.18px solid #181818",
                    color: "#FFFFFF",
                    width: "108px",
                    fontSize: { xs: "10.22px", md: "14px" },
                    height: "39px",
                    fontWeight: 700,
                  }}
                >
                  Date Created
                </TableCell>
              )}
              {!isMobile && (
                <TableCell
                  sx={{
                    backgroundColor: "#100F12",
                    border: "1.18px solid #181818",
                    color: "#FFFFFF",
                    width: "108px",
                    fontSize: { xs: "10.22px", md: "14px" },
                    height: "39px",
                    fontWeight: 700,
                  }}
                >
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ height: "266px" }}>
              <TableCell
                colSpan={1}
                sx={{ backgroundColor: "#181818" }}
                component="td"
                scope="row"
              />
              <TableCell
                colSpan={4}
                sx={{ backgroundColor: "#100F12", color: "#FFFFFF" }}
                align="center"
                component="td"
                scope="row"
              >
                No Results
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          width: "inherit",
          backgroundColor: "#242424",
          display: "flex",
          justifyContent: "space-between",
          padding: { xs: "10px 20px", md: "20px 30px" },
          border: "1px solid #181818",
          borderBottomLeftRadius: { xs: "15px", md: 0 },
          borderBottomRightRadius: { xs: "15px", md: 0 },
        }}
      >
        <Button
          variant={"contained"}
          sx={{
            padding: { xs: "2px 10px", md: "2px 14px" },
            fontSize: "14px",
            height: "36px",
            width: "84px",
            background: "#424242",
            borderRadius: "40px",
            fontWeight: { xs: 400, md: 700 },
            color: "#FFF",
            textTransform: "none",
            "&.MuiButton-root:hover": { background: "#424242" },
          }}
        >
          Previous
        </Button>
        <Button
          variant={"contained"}
          sx={{
            p: 0,
            fontSize: "14px",
            height: "36px",
            minWidth: "50px",
            background: "#fff",
            borderRadius: "40px",
            fontWeight: 700,
            color: "#000000",
            textTransform: "none",
            "&.MuiButton-root:hover": { background: "#fff" },
          }}
        >
          1
        </Button>
        <Button
          variant={"contained"}
          sx={{
            padding: { xs: "2px 10px", md: "2px 14px" },
            fontSize: "14px",
            height: "36px",
            width: "59px",
            background: "#424242",
            borderRadius: "40px",
            fontWeight: { xs: 400, md: 700 },
            color: "#FFF",
            textTransform: "none",
            "&.MuiButton-root:hover": { background: "#424242" },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
