import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BioCard from "./parts/BioCard";
import Image from "next/image";

const TestamonialSection = () => {
  return (
    <Stack direction="row">
      <Box flex={1} sx={{ bgcolor: "red" }}>
        <BioCard />
      </Box>
      <Box flex={3} sx={{ bgcolor: "blue" }}>
        <Box sx={{ position: "absolute" }}>
          <Typography>helloooooo</Typography>
        </Box>
        <Image
          src="/cta-banner.jpg"
          alt=""
          width={2000}
          height={2000}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Stack>
  );
};

export default TestamonialSection;
