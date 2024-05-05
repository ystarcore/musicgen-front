import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./component.module.css";

export default function Footer() {
  return (
    <Box
      as={"footer"}
      display={{ xs: "none", md: "block" }}
      sx={{
        marginTop: "100px",
        backgroundImage: `url('/images/Footer.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundColor: "black",
      }}
      className={"footer"}
    >
      <Box
        display="flex"
        justifyContent="space-evenly"
        paddingTop="67px"
        borderTop="1px solid #fff"
      >
        <nav>
          <Box
            as="ul"
            sx={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <li>
              <Link href="/" passHref>
                <Image
                  src="/images/whiteLogo.svg"
                  width={20}
                  height={20}
                  alt="brand logo"
                />
              </Link>
            </li>
            <li>
              <Link href="/" passHref className={styles.linkLinks}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/settings" passHref className={styles.linkLinks}>
                Settings
              </Link>
            </li>
          </Box>
        </nav>
        <nav>
          <Box
            as="ul"
            sx={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <li>
              <Link href="/links" passHref className={styles.linkHeader}>
                Links
              </Link>
            </li>
            <li>
              <Link href="/pricing" passHref className={styles.linkLinks}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/login" passHref className={styles.linkLinks}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" passHref className={styles.linkLinks}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="/forgot-password"
                passHref
                className={styles.linkLinks}
              >
                Forgot Password
              </Link>
            </li>
            <li>
              <Link href="/history" passHref className={styles.linkLinks}>
                History
              </Link>
            </li>
          </Box>
        </nav>
        <nav>
          <Box
            as="ul"
            sx={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <li>
              <Link href="/legal" passHref className={styles.linkHeader}>
                Legal
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" passHref className={styles.linkLinks}>
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                passHref
                className={styles.linkLinks}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/dmca-policy" passHref className={styles.linkLinks}>
                DMCA Policy
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" passHref className={styles.linkLinks}>
                Refund Policy
              </Link>
            </li>
          </Box>
        </nav>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="85%"
        maxWidth="1200px"
        margin="auto"
        marginTop="67px"
        borderTop="1px solid #fff"
        height="65px"
      >
        <Box component="p" opacity={0.4} fontSize="16px">
          &#169; Copyright 2024
        </Box>
      </Box>
    </Box>
  );
}
