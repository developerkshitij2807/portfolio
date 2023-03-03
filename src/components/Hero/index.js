import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { DiNodejs, DiMongodb, DiPython } from "react-icons/di";
import { zoomIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const heroImageSrc = "/images/hero-image.jpg";
const myPhoto = "/images/my-photo.png";

const Herocomponent = () => {
 
  const zoomInAnimation = keyframes`${zoomIn}`;

  const ZoomInComponent = styled(Grid)`
    animation: 1s ${zoomInAnimation};
  `;
  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundImage: `url(${heroImageSrc})`,
          backgroundSize: "cover",
          color: "white",
          bg: "gray",
          height: "50vh",
        }}
      ></Box>
      <Container
        component={Paper}
        sx={{
          transform: "translateY(-20%)",
          margin: "auto",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", height: "75px" }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "150px",
                height: "150px",
                boxShadow: 5,
                transform: "translateY(-50%)",
                "&:hover": {
                  cursor: "pointer",
                  transform: "translateY(-60%)",
                  transition: "all ease .5s",
                },
              }}
            >
              <Image src={myPhoto} width={150} height={150} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
          >
            <Typography component="em" variant="h2" sx={{ fontWeight: 300 }}>
              Kshitij Dutt
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center",  }}
          >
            <Typography variant="h5" sx={{ fontWeight: 300, margin: 5, textTransform: "capitalize" }}>
              I am a full stack javascript developer from Ghaziabad, India. I have Experience in working with ReactJS and NodeJS. I have excellent problem solving skills. I have made open source contributions on github. I also have a youtube channel where I post teaching tutorials technology. My Hobbies include Sports, Electronics, Excercising, Cooking and Video Editing
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Herocomponent;
