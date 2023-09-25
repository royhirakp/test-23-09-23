"use client";
import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person2Icon from "@mui/icons-material/Person2";
import SearchBar from "./SearchBar";

const HeaderMain = () => {
  return (
    <Stack
      justifyContent="space-between"
      sx={{
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        padding: "1%",
      }}
    >
      <Box mt="auto" mb="auto">
        <Typography
          variant="h4"
          m="auto"
          sx={{
            fontSize: {
              xs: "26px",
              sm: "31px",
            },
          }}
          textAlign="center"
        >
          <b>Logo</b>{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          width: {
            xs: "82%",
            sm: "65%",
          },
          margin: {
            xs: "auto",
            sm: "auto 0 auto auto",
            md: "auto",
          },
        }}
      >
        <SearchBar />
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Box>
          <IconButton>
            <Person2Icon />
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Box>
    </Stack>
  );
};

export default HeaderMain;
