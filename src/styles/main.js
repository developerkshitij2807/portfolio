const heroImageSrc = "/images/hero-image.jpg";

export const mainStyles = {
  heroStyles: {
    backgroundImage: `url(${heroImageSrc})`,
    backgroundSize: "cover",
    color: "white",
    bg: "gray",
    height: "50vh",
  },

  summaryStyles: {
    container: {
      transform: "translateY(-20%)",
      margin: "auto",
    },
    imageGridItem: {
      display: "flex",
      justifyContent: "center",
      height: "75px",
    },
    imageBox: {
      borderRadius: "50%",
      overflow: "hidden",
      width: "150px",
      height: "150px",
      boxShadow: 5,
      transform: "translateY(-50%)",
    },
    nameGridItem: {
      display: "flex",
      justifyContent: "center",
      marginTop: 2,
    },
    summaryGridItem: { display: "flex", justifyContent: "center" },
    summaryTypography: {
      fontWeight: 300,
      marginX: 10,
      marginY: 5
    },
  },
};
