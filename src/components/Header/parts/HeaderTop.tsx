"use client";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import SelectDropdown from "./SelectDropdown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const HeaderTop = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
        padding: "1%",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton>
          <LinkedInIcon style={{ color: "#ef7d7d" }} />
        </IconButton>
        <IconButton style={{ color: "#ef7d7d" }}>
          <InstagramIcon />
        </IconButton>
        <IconButton style={{ color: "#ef7d7d" }}>
          <TwitterIcon />
        </IconButton>
        <IconButton style={{ color: "#ef7d7d" }}>
          <FacebookIcon />
        </IconButton>
      </Box>
      <Box m="auto 0 auto 0">
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              sm: "0.9rem",
              md: "1rem",
            },
            color: "#eb6161",
          }}
        >
          <b>FREE SHOPING</b> THIS WEEK ORDER OVER - $55
        </Typography>
      </Box>
      <Stack direction="row" gap="1%">
        <SelectDropdown />
        <SelectDropdown />
      </Stack>
    </Stack>
  );
};

export default HeaderTop;
