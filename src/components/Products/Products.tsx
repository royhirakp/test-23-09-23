import React from "react";
import ProductCard from "./ProductCard";
import { Box, Stack, Typography } from "@mui/material";
const data = [
  {
    id: 1,
    name: "JACKET",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "5",
    rattings: 4,
    price: "150",
    imgurl: "/jacket-1.jpg",
  },
  {
    id: 1,
    name: "JACKET",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "5",
    rattings: 5,
    price: "150",
    imgurl: "/jacket-2.jpg",
  },
  {
    id: 1,
    name: "JACKET",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "5",
    rattings: 4.5,
    price: "150",
    imgurl: "/shirt-1.jpg",
  },
  {
    id: 1,
    name: "JACKET",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "5",
    rattings: 4.5,
    price: "150",
    imgurl: "/skirt-1.jpg",
  },
  {
    id: 1,
    name: "JACKET",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "5",
    rattings: 4.5,
    price: "150",
    imgurl: "/sports-1.jpg",
  },
  {
    id: 1,
    name: "JACKET",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "5",
    rattings: 4.5,
    price: "150",
    imgurl: "/watch-1.jpg",
  },
  {
    id: 1,
    name: "JACKET",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "5",
    rattings: 4.5,
    price: "150",
    imgurl: "/watch-2.jpg",
  },
];
import { textType2 } from "@/elementStyle/Text";
const Products = () => {
  return (
    <Box mt="2%">
      <Typography sx={{ fontSize: textType2 }} variant="h1">
        Product
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-around"
        gap={1}
        flexWrap="wrap"
      >
        {data.map((item, i) => {
          return (
            <ProductCard
              key={i * 0.052}
              details={item.detailes}
              id={item.id}
              imgUrl={item.imgurl}
              name={item.name}
              price={item.price}
              ratings={item.rattings}
              reviews={item.reviews}
            />
          );
        })}
      </Stack>{" "}
    </Box>
  );
};

export default Products;
