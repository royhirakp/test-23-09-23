import React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { navButtonStyle } from "@/elementStyle/Text";
let arr = [
  "HOME",
  "CATAGORIES",
  `MEN'S`,
  "WOMENS",
  "JEWELRY",
  "BLOG",
  "HOT OFFERS",
];
const NavBar = () => {
  return (
    <Box p="1%" sx={{ display: { xs: "none", sm: "block" } }}>
      <Stack flexDirection="row" justifyContent="center" gap={2}>
        {arr.map((item, i) => {
          return (
            <Link className="link-navbar" href="#3" key={i * 0.25}>
              <Typography sx={{ fontSize: navButtonStyle }}>{item}</Typography>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default NavBar;
