import { Box, Stack } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Stack
      direction="row"
      width="50%"
      sx={{
        // flexWrap: "wrap",
        // justifyContent: "space-between",
        // alignItems: "flex-end",
        alignContent: "flex-start",
        gap: "5px",
        height: "500px",
      }}
      border="5px solid"
    >
      <Box
        sx={{
          border: "1px solid",
          backgroundColor: "red",
          width: "100px",
          height: "100px",
          //   flexGrow: 1,
          flex: 2,
        }}
      >
        red1
      </Box>
      <Box
        sx={{
          //   flexGrow: 1,
          //   flexShrink: 0,
          border: "1px solid",
          backgroundColor: "yellow",
          width: "100px",
          height: "100px",
          flex: 3,
        }}
      >
        blu2
      </Box>
      <Box
        sx={{
          border: "1px solid",
          backgroundColor: "blue",
          width: "100px",
          height: "100px",
        }}
      >
        gn3
      </Box>
      <Box
        sx={{
          border: "1px solid",
          backgroundColor: "yellow",
          width: "100px",
          height: "100px",
        }}
      >
        blue4
      </Box>
    </Stack>
  );
};

export default page;
