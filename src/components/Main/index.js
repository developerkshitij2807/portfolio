import React from "react";
import { Box } from "@mui/material";
import Herosection from "@/components/Main/Hero";

import { mainStyles } from "@/styles/main";
import Summarysection from "./Summary";

import { Header } from "@/components/Common/Header";
import { Footer } from "@/components/Common/Footer";

const MainPageLayout = (props) => {
  const { children } = props;
  return (
    <Box sx={{ height: "100vh" }}>
      <Herosection styles={mainStyles.heroStyles}>
        <Header bgTransparent />
      </Herosection>
      {children}
      <Footer />
    </Box>
  );
};

const MainPage = () => {
  return (
    <MainPageLayout>
      <Summarysection styles={mainStyles.summaryStyles} />
    </MainPageLayout>
  );
};

export default MainPage;
