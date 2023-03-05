import React from "react";
import { Container, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { footerStyles } from "@/styles/footer";

export const Footer = () => {
  return (
    <Container>
      <Typography variant="h5" sx={footerStyles.text}>
        Made with <FavoriteIcon /> by Kshitij Dutt
      </Typography>
    </Container>
  );
};
