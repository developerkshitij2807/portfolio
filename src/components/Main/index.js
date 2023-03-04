import React from "react";
import { Box } from "@mui/material";
import Herosection from "@/components/Main/Hero";
import Summarysection from "./Summary";
import { mainStyles } from "@/styles/main";

const Mainpage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Herosection styles={mainStyles.heroStyles} />
      <Summarysection styles={mainStyles.summaryStyles} />
    </Box>
  );
};

export default Mainpage;
