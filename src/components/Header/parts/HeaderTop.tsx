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
import { textType1 } from "@/elementStyle/Text";
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
      <Box sx={{ fontSize: textType1 }}>
        {/* <SelectDropdown /> */}

        <select
          style={{
            width: "110%",
            border: "1px solid",
            borderRadius: "4px",
            padding: "2%",
          }}
        >
          <option
            style={{
              padding: "1%",
              margin: "50px",
              color: "red",
            }}
            value="1"
          >
            onddddddde
          </option>
          <option value="1">onccccccce</option>

          <option value="1">oneccc</option>
        </select>
      </Box>
    </Stack>
  );
};

export default HeaderTop;
