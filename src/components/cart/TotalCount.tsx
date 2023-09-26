"use client";
import { Box, Stack, Typography, Paper, Button } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import {
  buttonFontSize,
  textType1,
  textType2,
  textType3,
} from "@/elementStyle/Text";
const TotalCount = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "end",
        flexDirection: "column",
        // border: "1px solid",
        alignItems: "end",
        padding: "5px",
      }}
    >
      <Box
        sx={{
          //   maxWidth: "400px",
          width: { xs: "100%", md: "40%" },
          border: "1px solid pink",
          padding: "1%",
          //   margin: "0 1%",
          borderRadius: "10px",
          backgroundColor: "#edc7c7",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              paddingLeft: "1%",
              fontSize: {
                xs: "10px",
                sm: "13px",
                md: "15px",
              },
            }}
          >
            Subtotal:
          </Typography>
          <Typography
            sx={{
              paddingRight: "1%",
              fontSize: {
                xs: "12px",
                sm: "15px",
                md: "18px",
              },
            }}
          >
            $500.00
          </Typography>
        </Stack>
        <Divider />
        {/* {Sales Tax Grand total} */}
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              paddingLeft: "1%",
              fontSize: {
                xs: "10px",
                sm: "13px",
                md: "15px",
              },
            }}
          >
            Sales Tax:
          </Typography>
          <Typography
            sx={{
              paddingRight: "1%",
              fontSize: {
                xs: "11px",
                sm: "15px",
                md: "18px",
              },
            }}
          >
            $5.00
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent="space-between" bgcolor="#e97b7b">
          <Typography
            sx={{
              paddingLeft: "1%",
              fontSize: {
                xs: "12px",
                sm: "15px",
                md: "18px",
              },
            }}
          >
            <b> Grand total:</b>
          </Typography>
          <Typography
            sx={{
              paddingRight: "1%",
              // color: "red",
              fontSize: {
                xs: "13px",
                sm: "14px",
                md: "19px",
              },
            }}
          >
            $500.00
          </Typography>
        </Stack>
        <Divider />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
        }}
      >
        <Button
          sx={{
            color: "red",
            float: "right",
            fontSize: { xs: "10px", sm: "12px", md: "16px" },
          }}
        >
          Check out
        </Button>
      </Box>
    </Box>
  );
};

export default TotalCount;
