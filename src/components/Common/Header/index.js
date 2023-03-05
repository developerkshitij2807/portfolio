import { headerStyles } from "@/styles/header";
import { Box, Grid } from "@mui/material";
import HeaderItem from "./HeaderItem";

const HeaderLayout = (props) => {
  const { children, ...styleProps } = props;
  return (
    <Box
      component="header"
      sx={[
        styleProps.sx,
        {
          paddingX: 30,
          paddingY: 5,
          display: { xs: "none", sm: "block" },
        },
      ]}
    >
      {children}
    </Box>
  );
};

const TransparentHeader = (props) => {
  const { headerData } = props;
  return (
    <HeaderLayout>
      <Grid container>
        {headerData.map((headerItem) => (
          <HeaderItem
            text={headerItem.name}
            gridSpace={headerItem.gridSpace}
            style={headerStyles.transparentHeaderItem}
            href={headerItem.href}
          />
        ))}
      </Grid>
    </HeaderLayout>
  );
};

const NormalHeader = (props) => {
  const { headerData } = props;
  return (
    <HeaderLayout sx={{ backgroundColor: "black", position: "sticky", top: 0 }}>
      <Grid container>
        {headerData.map((headerItem) => (
          <HeaderItem
            text={headerItem.name}
            gridSpace={headerItem.gridSpace}
            style={headerStyles.transparentHeaderItem}
            href={headerItem.href}
          />
        ))}
      </Grid>
    </HeaderLayout>
  );
};

export const Header = (props) => {
  const { bgTransparent } = props;
  const headerItems = [
    {
      name: "Home",
      href: "/",
      gridSpace: 6,
    },
    {
      name: "About",
      href: "/about",
      gridSpace: 1,
    },
  ];
  if (bgTransparent) {
    return <TransparentHeader headerData={headerItems} />;
  } else {
    return <NormalHeader headerData={headerItems} />;
  }
};
