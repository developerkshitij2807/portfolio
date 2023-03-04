import React from "react";
import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import Image from "next/image";

const Summarysection = (props) => {
  const myPhoto = "/images/my-photo.png";
  const { styles } = props;
  return (
    <Container component={Paper} sx={styles.container}>
      <Grid container>
        <Grid item xs={12} sx={styles.imageGridItem}>
          <Box sx={styles.imageBox}>
            <Image src={myPhoto} width={150} height={150} />
          </Box>
        </Grid>
        <Grid item xs={12} sx={styles.nameGridItem}>
          <Typography component="em" variant="h2" sx={{ fontWeight: 300 }}>
            Kshitij Dutt
          </Typography>
        </Grid>

        <Grid item xs={12} sx={styles.summaryGridItem}>
          <Typography
            variant="h5"
            sx={styles.summaryTypography}
          >
            I am a full stack javascript developer from Ghaziabad, India. I have
            Experience in working with ReactJS and NodeJS. I have excellent
            problem solving skills. I have made open source contributions on
            github. I also have a youtube channel where I post teaching
            tutorials technology. My Hobbies include Sports, Electronics,
            Excercising, Cooking and Video Editing
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Summarysection;
