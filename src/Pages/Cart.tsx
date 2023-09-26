import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { textType2, textType1 } from "@/elementStyle/Text";
import CartCard from "@/components/cart/CartCard";
import Container from "@/components/Container";
import TotalCount from "@/components/cart/TotalCount";
const Cart = () => {
  return (
    <Container style={{}}>
      <Typography
        sx={{ fontSize: textType1, textAlign: "center", paddingBottom: "6px" }}
      >
        Your Cart: Checkout 4 items
      </Typography>
      <Box>
        {/* card */}
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </Box>
      <TotalCount />
    </Container>
  );
};

export default Cart;
