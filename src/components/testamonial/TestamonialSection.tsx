import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import BioCard from "./parts/BioCard";
import Image from "next/image";
import Link from "next/link";

const TestamonialSection = () => {
  return (
    <Stack
      sx={{
        marginTop: "1%",
        height: {
          xs: "600px",
          md: "400px",
        },
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        flex={1}
        sx={{
          marginRight: { xs: "0", md: "1%" },
          marginBottom: {
            xs: "1%",
            md: "0",
          },
        }}
      >
        <BioCard />
      </Box>
      <Box
        flex={3}
        sx={{
          bgcolor: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('/cta-banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          padding: "1%",
          borderRadius: "1%",
        }}
      >
        <Box
          sx={{
            bgcolor: "#ffffffab",
            borderRadius: "7px",
            display: "inline-block",
            padding: "5%",
          }}
        >
          <Button>25% DISCOUNT</Button>
          <Typography>Summer Collection </Typography>

          <Typography>
            Starting @ $20 <Link href="#">Shop now</Link>{" "}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default TestamonialSection;
