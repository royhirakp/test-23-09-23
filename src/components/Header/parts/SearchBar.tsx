"use client";
import React from "react";
import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ef2d2d",
        borderRadius: "10px",
        margin: "auto",
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
        },
        display: "flex",
        flexDirection: "row",
        height: {
          xs: "39%",
          sm: "45%",
          md: "50%",
        },
      }}
    >
      <IconButton
        aria-label="search"
        sx={{
          padding: "1%",
        }}
      >
        <SearchIcon
          sx={{
            width: {
              xs: "55%",
              sm: "65%",
              md: "75%",
            },
          }}
        />
      </IconButton>
      <InputBase
        fullWidth
        sx={{
          fontSize: {
            xs: "60%", // Extra small screens (e.g., mobile phones)
            sm: "70%", // Small screens (e.g., tablets)
            md: "80%", // Medium screens (e.g., laptops)
            lg: "90%",
          },
        }}
        placeholder="search products.."
      />
    </Box>
  );
};

export default SearchBar;
