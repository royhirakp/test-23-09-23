import * as React from "react";
import { Box, Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GridViewIcon from "@mui/icons-material/GridView";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/joy";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

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
          onClick={() => handelclick(2)}
          style={{ color: "#ef7d7d", padding: "4%" }}
        >
          <HomeIcon fontSize={`${value == 2 ? "large" : "medium"}`} />
        </IconButton>
        <IconButton
          onClick={() => handelclick(3)}
          style={{ color: "#ef7d7d", padding: "4%" }}
        >
          <ShoppingCartIcon fontSize={`${value == 3 ? "large" : "medium"}`} />
        </IconButton>
      </Paper>
    </Box>
  );
}
