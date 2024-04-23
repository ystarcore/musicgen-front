import React from "react";
import Head from "next/head";
import SinglePlan from "./plan";
import { Box } from "@mui/material";

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
          <Box display={"flex"} gap={"60px"}>
            {[1, 2].map((item) => (
              <SinglePlan key={item} />
            ))}
          </Box>
          <SinglePlan />
        </Box>
      </main>
    </>
  );
}
