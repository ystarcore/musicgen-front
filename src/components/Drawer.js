"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

export default function Drawer({ list }) {
  const [expandedId, setExpandedId] = React.useState(300);

  const handleExpansion = (index) => {
    if (index === expandedId) {
      setExpandedId(300);
    } else {
      setExpandedId(index);
    }
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
        {list.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expandedId === index}
            onChange={() => handleExpansion(index)}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              paddingBlock: "9px",
              paddingInline: "24px",
              borderRadius: "14px !important",
              backgroundColor: "rgba(16, 15, 18, 1)",
              "& .MuiAccordion-region": {
                height: expandedId === index ? "auto" : 0,
              },
              "& .MuiAccordionDetails-root": {
                display: expandedId === index ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography
                sx={{ fontSize: "20px", fontWeight: 500, color: "#fff" }}
                component={"h3"}
              >
                {faq.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}
              >
                {faq.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
