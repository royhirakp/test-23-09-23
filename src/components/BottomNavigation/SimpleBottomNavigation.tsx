import * as React from "react";
import { Box, Paper } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/joy";
import { useRouter } from "next/navigation";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "@/redux/hooks";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const count = useAppSelector((state) => state.cart.cartProductList.length);

  function handelclick(x: any) {
    setValue(x);
  }

  return (
    <Box>
      <Paper
        sx={{
          height: "80px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <IconButton onClick={() => handelclick(1)} sx={{ padding: "4%" }}>
          <MenuIcon
            fontSize={`${value == 1 ? "large" : "medium"}`}
            style={{ color: "#ef7d7d" }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            router.push("/home");
            handelclick(2);
          }}
          style={{ color: "#ef7d7d", padding: "4%" }}
        >
          <HomeIcon fontSize={`${value == 2 ? "large" : "medium"}`} />
        </IconButton>
        <IconButton
          onClick={() => {
            router.push("/cart");
            handelclick(3);
          }}
          style={{ color: "#ef7d7d", padding: "4%" }}
        >
          <StyledBadge badgeContent={count} color="secondary">
            <ShoppingCartIcon fontSize={`${value == 3 ? "large" : "medium"}`} />
          </StyledBadge>
        </IconButton>
      </Paper>
    </Box>
  );
}
