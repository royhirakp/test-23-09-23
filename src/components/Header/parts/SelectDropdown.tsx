import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          // backgroundColor: "#eb6161", // Set your desired background color
          borderColor: "#eb6161",
          border: "1px solid #eb6161",
        },
      },
    },
  },
});
export default function SelectDropdown() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ minWidth: 120 }} color="#eb6161">
          <FormControl
            fullWidth
            sx={{
              "& .MuiSelect-outlined": { borderColor: "#eb6161 !important" },
              "&:focus": {
                backgroundColor: "red", // Change the background color when clicked
                borderColor: "#ffc107", // Change the border color when clicked
              },
              "&.clicked": {
                backgroundColor: "red", // Change the background color when clicked
                borderColor: "#ffc107", // Change the border color when clicked
              },
            }}
          >
            <InputLabel sx={{ color: "#eb6161" }}>Age</InputLabel>
            <Select
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{ color: "#eb6161" }}
            >
              <MenuItem sx={{ color: "#eb6161" }} value={10}>
                Ten
              </MenuItem>
              <MenuItem sx={{ color: "#eb6161" }} value={20}>
                Twenty
              </MenuItem>
              <MenuItem sx={{ color: "#eb6161" }} value={30}>
                Thirty
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </ThemeProvider>
    </>
  );
}
