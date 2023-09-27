"use client";
import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person2Icon from "@mui/icons-material/Person2";
import SearchBar from "./SearchBar";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const HeaderMain = () => {
  const count = useAppSelector((state) => state.cart.cartProductList.length);
  const router = useRouter();
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
          onClick={() => router.push("/home")}
          m="auto"
          sx={{
            fontSize: {
              xs: "26px",
              sm: "31px",
            },
            color: "#ef2d2d",
            fontFamily: "cursive",
            paddingBottom: "2%",
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
            <Person2Icon style={{ color: "#ef7d7d" }} />
          </IconButton>
          <IconButton style={{ color: "#ef7d7d" }}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton
            style={{ color: "#ef7d7d" }}
            onClick={() => router.push("/cart")}
          >
            <StyledBadge badgeContent={count} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Box>
      </Box>
    </Stack>
  );
};

export default HeaderMain;
