import React from "react";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";

const HeaderItem = (props) => {
  const { text, href, gridSpace, style } = props;
  return (
    <Grid item xs={gridSpace}>
      <Link href={href} sx={style}>
        {text}
      </Link>
    </Grid>
  );
};

export default HeaderItem;
