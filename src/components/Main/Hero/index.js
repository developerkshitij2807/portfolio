import { Box } from "@mui/material";

const Herosection = (props) => {
  const { styles,children } = props;
  return (
    <Box sx={styles}>{children}</Box>
  );
};

export default Herosection;
