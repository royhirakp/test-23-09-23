"use client";

import React from "react";
import {
  Typography,
  Box,
  Stack,
  CardMedia,
  IconButton,
  Button,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { textType1, textType2, textType3 } from "@/elementStyle/Text";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  increaseItemQty,
  decreseItemQty,
  removeItems,
} from "@/redux/slice/cartSlice";
interface DetailsProps {
  data: {
    details: string;
    id: number;
    imgUrl: string;
    name: string;
    price: number;
    qtyOfOrder: number;
    ratings: number;
    reviews: string;
  };
}
const CartCard: React.FC<DetailsProps> = ({ data }) => {
  const { details, id, imgUrl, name, price, qtyOfOrder, ratings, reviews } =
    data;
  return (
    <Paper sx={{ margin: "1%" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        // border="1px solid pink"
        sx={{ borderRadius: "10px", padding: "1%" }}
      >
        <Stack
          flex={5}
          justifyContent="space-between"
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Stack direction="row" justifyContent="space-between" flex={3}>
            <ProductImageAndDetailes
              details={details}
              imgUrl={imgUrl}
              name={name}
              price={price}
            />
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            flex={2}
          >
            <Box
              p="0.5%"
              flex={1}
              display="flex"
              //   justifyContent="center"
              sx={{
                alignItems: {
                  xs: "",
                  md: "center",
                },
              }}
              flexDirection="column"
            >
              <ButtonBox id={id} qtyOfOrder={qtyOfOrder} />
            </Box>
          </Stack>
        </Stack>
        {/* total price  */}
        <Box flex={1} bgcolor="ButtonShadow" display="flex" alignItems="center">
          <Typography
            m="auto"
            sx={{ fontSize: textType1 }}
            textAlign={"center"}
          >
            {qtyOfOrder * price}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default CartCard;
interface productImageProps {
  imgUrl: string;
  name: string;
  details: string;
  price: number;
}

// const CartCard: React.FC<DetailsProps> = ({ data }) => {
const ProductImageAndDetailes: React.FC<productImageProps> = ({
  imgUrl,
  name,
  details,
  price,
}) => {
  return (
    <>
      <div style={{ display: "flex", flex: 2 }}>
        {/* IMAGE */}
        <Box
          sx={{
            width: {
              xs: "70px",
              sm: "100px",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imgUrl}
          />
        </Box>
        {/* PRODUCT DETAILS */}
        <Box sx={{ paddingTop: { xs: "20px", sm: 0 }, paddingLeft: "1%" }}>
          <Typography
            sx={{
              fontSize: {
                xs: "12px",
                sm: "17px",
                md: "20px",
              },
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "8px",
                sm: "15px",
                md: "17px",
              },
              color: "#eb6c6c",
            }}
          >
            <b>{details}</b>
          </Typography>
        </Box>
      </div>
      <Box
        flex={1}
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          flex={1}
          sx={{
            fontSize: textType1,
            textAlign: "center",
            lineHeight: "inherit",
          }}
        >
          ${price}
        </Typography>
      </Box>
    </>
  );
};
interface ButtonBoxPrpos {
  qtyOfOrder: number;
  id: number;
}
const iconButtonStyle = {
  padding: "0",
  backgroundColor: "antiquewhite",
  width: { xs: "18px", sm: "30px" },
  height: { xs: "18px", sm: "30px" },
};
const iconStyle = { width: { xs: "32%", sm: "55%", md: "75%" } };
const ButtonBox: React.FC<ButtonBoxPrpos> = ({ qtyOfOrder, id }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Stack
        direction="row"
        border="1px solid pink"
        justifyContent="space-between"
        sx={{
          padding: "2%",
          borderRadius: "6px",
          // maxWidth: "120px",
          width: {
            xs: "39%",
            sm: "200px",
          },
        }}
      >
        <IconButton
          onClick={() => dispatch(decreseItemQty({ id }))}
          sx={iconButtonStyle}
        >
          <RemoveIcon sx={iconStyle} />
        </IconButton>
        <Typography
          sx={{
            padding: "0 2%",
            display: "inline-block",
            paddingTop: "3px",
            fontSize: {
              xs: "10px",
              sm: "11px",
              md: "15px",
            },
          }}
        >
          {qtyOfOrder}
        </Typography>
        <IconButton
          onClick={() => dispatch(increaseItemQty({ id }))}
          size="large"
          sx={iconButtonStyle}
        >
          <AddIcon sx={iconStyle} />
        </IconButton>
      </Stack>

      <Stack maxWidth="100px">
        <Button
          sx={{
            fontSize: textType3,
            color: "red",
            //   maxWidth: "100%",
          }}
          size="small"
          onClick={() => {
            // console.log("remove button clicked ");
            dispatch(removeItems({ id }));
          }}
        >
          Remove
        </Button>
      </Stack>
    </>
  );
};
