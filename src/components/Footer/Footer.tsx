import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgcolor="gray"
      mt={1}
      textAlign="center"
      padding={1}
      color="#ffff"
      marginTop="1%"
    >
      <Typography>copyright © logo</Typography>
      <Typography>all rights reserved 2023</Typography>
    </Box>
  );
};

export default Footer;
