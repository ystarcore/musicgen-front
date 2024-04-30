import React from "react";
import Head from "next/head";
import SinglePlan from "./plan";
import { Box } from "@mui/material";

const colors = [
  {
    text: "rgba(255, 255, 255, 1)",
    background: "rgba(16, 15, 18, 1)",
    header: "rgba(126, 34, 206, 1)",
    button: "rgba(126, 34, 206, 1)",
  },
  {
    text: "black",
    background:
      "linear-gradient(to right, rgba(103, 1, 230, 1), rgba(161, 99, 241, 1))",
    header: "rgba(255, 255, 255, 1)",
    button: "rgba(255, 255, 255, 1)",
  },
  {
    text: "black",
    background: "rgba(255, 255, 255, 1)",
    header: "rgba(126, 34, 206, 1)",
    button: "rgba(126, 34, 206, 1)",
  },
];

export default function Plans() {
  return (
    <>
      <Head>
        <title>Subscription Plans - Your Website Name</title>
        <meta
          name="description"
          content="Choose the best subscription plan for your needs. Get started today and enjoy exclusive features."
        />
        <meta
          name="keywords"
          content="subscription plans, pricing, starter plan, premium plan, features, credits, text to speech, AI voices"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/plans" />
      </Head>

      <main>
        <Box
          as={"section"}
          sx={{ maxWidth: "1035px", margin: "auto", marginTop: "235px" }}
          display={"flex"}
          gap={"60px"}
          flexDirection={"column"}
        >
          <Box
            display={"flex"}
            gap={{ xs: "36px", md: "60px" }}
            flexDirection={{ xs: "column", md: "row" }}
            sx={{ margin: "auto", width: { xs: "87.69%", md: "100%" } }}
          >
            {[1, 2].map((item, index) => (
              <SinglePlan key={item} colors={colors[index]} />
            ))}
          </Box>
          <Box sx={{ margin: "auto", width: { xs: "87.69%", md: "100%" } }}>
            <SinglePlan colors={colors[2]} />
          </Box>
        </Box>
      </main>
    </>
  );
}
