import React from "react";
import ProductCard from "./ProductCard";
import { Box, Stack, Typography } from "@mui/material";
const data = [
  {
    id: 1,
    name: "JACKET",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "51",
    rattings: 4,
    price: 100,
    imgurl: "/jacket-1.jpg",
  },
  {
    id: 2,
    name: "JACKET",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "15",
    rattings: 3,
    price: 1500,
    imgurl: "/jacket-2.jpg",
  },
  {
    id: 3,
    name: "SHIRT",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "35",
    rattings: 1,
    price: 1505,
    imgurl: "/shirt-1.jpg",
  },
  {
    id: 4,
    name: "skirt",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "9",
    rattings: 4,
    price: 1570,
    imgurl: "/skirt-1.jpg",
  },
  {
    id: 5,
    name: "SPORTS",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "5",
    rattings: 4.5,
    price: 1850,
    imgurl: "/sports-1.jpg",
  },
  {
    id: 6,
    name: "WATCH",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "662",
    rattings: 4.5,
    price: "150",
    imgurl: "/watch-1.jpg",
  },
  {
    id: 7,
    name: "Watch",
    detailes: "Men Yarn Fleece Full-zip jacke",
    reviews: "5",
    rattings: 3.9,
    price: 112,
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
        mt="1%"
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
