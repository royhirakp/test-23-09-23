import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { InputBase } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(218,72,72,0.87)",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      // default: "#773434",
      // paper: "#c3bebe",
    },
    text: {
      primary: "rgba(218,72,72,0.87)",
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        ...{
          root: {
            // outline: "1px red solid",
          },
        },
      },
    },
  },
});

//stakflow over

// statck flowover
export default function SelectDropdown() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{ minWidth: 100, fontSize: "5px" }}
          // color="error"
        >
          <FormControl
            color="primary"
            fullWidth
            sx={{
              "& .MuiNativeSelect-root": {
                border: "1px solid red",
              },
              "& .MuiSelect-outlined": {
                // border: "1px solid rgba(218,72,72,0.87)",
                // borderColor: "rgba(218,72,72,0.87)",
              },
              "&:focus": {
                // backgroundColor: "red", // Change the background color when clicked
                // borderColor: "#ffc107", // Change the border color when clicked
              },
              "&.clicked": {
                // backgroundColor: "red", // Change the background color when clicked
                // borderColor: "#ffc107", // Change the border color when clicked
              },
              "& .MuiOutlinedInput-root": {
                borderColor: "rgba(218,72,72,0.87)",
                height: {
                  sm: "40px",
                  md: "55px",
                },
              },
            }}
          >
            <InputLabel
              color="primary"
              sx={{ fontSize: { xs: "11px", md: "15px" }, color: "red" }}
            >
              Age
            </InputLabel>
            <Select
              value={age}
              label="Age"
              color="primary"
              onChange={handleChange}
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "rgba(218,72,72,0.87)",
                  // borderColor: "red",
                  // border: "1px solid rgba(218,72,72,0.87)",
                },
              }}
            >
              <MenuItem
                sx={
                  {
                    // color: "#eb6161",
                  }
                }
                value={10}
              >
                Ten
              </MenuItem>
              <MenuItem
                sx={
                  {
                    // color: "#eb6161"
                  }
                }
                value={20}
              >
                Twenty
              </MenuItem>
              <MenuItem sx={{}} value={30}>
                Thirty
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControl
          color="primary"
          sx={{
            // "& .MuiOutlinedInput-root": {
            //   color: "rgba(218,72,72,0.87)",
            //   // border: "1px solid rgba(218,72,72,0.87)",
            // },
            "& .MuiOutlinedInput-root": {
              // borderColor: "rgba(218,72,72,0.87)",
              // border: "1px solid red",
              // boxSizing: "border-box",
              height: {
                sm: "50px",
                md: "55px",
              },
            },
          }}
        ></FormControl>
      </ThemeProvider>
    </>
  );
}
