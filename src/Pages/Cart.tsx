"use client";
import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { textType2, textType1 } from "@/elementStyle/Text";
import CartCard from "@/components/cart/CartCard";
import Container from "@/components/Container";
import TotalCount from "@/components/cart/TotalCount";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
const Cart = () => {
  const data = useAppSelector((s: any) => s.cart.cartProductList);
  console.log(data, " from vcart=== data ");
  return (
    <Container style={{}}>
      <Typography
        sx={{ fontSize: textType1, textAlign: "center", paddingBottom: "6px" }}
      >
        Your Cart: Checkout 4 items
      </Typography>
      <Box>
        {data.map((item: any, i: any) => {
          console.log("printiong cart card");
          return <CartCard data={item} key={i * 0.025} />;
        })}
      </Box>
      <TotalCount />
    </Container>
  );
};

export default Cart;
