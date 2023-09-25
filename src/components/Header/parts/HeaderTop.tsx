"use client";
import React from "react";
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
            md: "block",
          },
        }}
      >
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
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
          }}
        >
          <b>FREE SHOPING</b> THIS WEEK ORDER OVER - $55
        </Typography>
      </Box>
      <Box>
        <SelectDropdown />
        <SelectDropdown />
      </Box>
    </Stack>
  );
};

export default HeaderTop;
