import { Footer } from "@/components/Common/Footer";
import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Header } from '@/components/Common/Header';

const AboutPageLayout = (props) => {
    const {children} = props;
    const AboutSidebarItems = [
        "professional skills",
        "work experience",
        "educational background",
        "relevant projects",
        "achivements and milestones",
        "contact information",
      ];
      return (
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#f8fafc",
            height: "200vh",
            marginLeft: { xs: "40vw", md: "20vw" },
          }}
        >
          <Header />
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: { xs: "40vw", md: "20vw" },
              background: "linear-gradient(to right bottom,#4f46e5,#9333ea )",
              borderRightRadius: "50%",
              height: "100%",
            }}
          >
            {AboutSidebarItems.map((sidebarItem, index) => (
              <Grid item xs={12} key={index}>
                <Typography
                  variant="h6"
                  sx={{
                    padding: 2,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    fontWeight: 300,
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#ffffff",
                      color: "black",
                      transition: "all 0.1s ease",
                    },
                  }}
                >
                  {sidebarItem}
                </Typography>
              </Grid>
            ))}
          </Box>
          {children}
          <Footer />
        </Box>
      );
};

const AboutPage = () => {
  
  return (
   <AboutPageLayout>Content here</AboutPageLayout>
  );
};

export default AboutPage;
