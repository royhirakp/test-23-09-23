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
const CartCard = () => {
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
            <ProductImageAndDetailes />
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
              <ButtonBox />
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
            $5
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default CartCard;
const ProductImageAndDetailes = () => {
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
            image="/jacket-2.jpg"
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
            JACKET
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
            <b>Men Yarn Fleece Full-zip jacke</b>
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
          $4500
        </Typography>
      </Box>
    </>
  );
};
const ButtonBox = () => {
  return (
    <>
      <Stack
        direction="row"
        border="1px solid pink"
        justifyContent="space-between"
        sx={{
          // padding: "0 5% 0 5%",
          borderRadius: "6px",
          // maxWidth: "120px",
          width: {
            xs: "70px",
            sm: "200px",
          },
        }}
      >
        <IconButton
          aria-label="delete"
          sx={{ padding: "0", backgroundColor: "antiquewhite" }}
        >
          <RemoveIcon sx={{ width: { xs: "32%", sm: "55%", md: "75%" } }} />
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
          5
        </Typography>
        <IconButton
          aria-label="delete"
          size="large"
          sx={{ padding: "0", backgroundColor: "antiquewhite" }}
        >
          <AddIcon sx={{ width: { xs: "32%", sm: "55%", md: "75%" } }} />
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
        >
          Remove
        </Button>
      </Stack>
    </>
  );
};
