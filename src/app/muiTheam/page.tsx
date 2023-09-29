"use client";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box, Paper, Typography, CssBaseline, InputBase } from "@mui/material";
import Slider, { sliderClasses } from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { purple, red, green } from "@mui/material/colors";
// import { makeStyles } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { NativeSelect } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// const useStyle = makeStyles((theme) => ({
//   inputbase: {
//     border: "1px solid red",
//     borderRadius: "5px",
//     color: "blue",
//     padding: "15px",
//     height: "56px",
//     "&:hover": {
//       borderColor: "red", // Change the border color on hover
//     },

//     "&:focus": {
//       borderColor: "green", // Change the border color on focus (click)
//     },
//   },
//   select: {
//     border: "1px solid red",
//     "&:before": {
//       borderColor: "purple", // Change border color when not focused
//     },
//     "&:after": {
//       borderColor: "green", // Change border color when focused
//     },
//   },
//   selectIcon: {
//     fill: "blue", // Change the select icon color
//   },
//   inputLabel: {
//     color: "red", // Change the label color
//   },
// }));

const theme = createTheme({
  spacing: 10,
  palette: {
    mode: "light",
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[200],
    },
  },
  typography: {
    h3: {
      fontSize: "5rem",
    },
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        valueLabel: ({ ownerState, theme }) => ({
          ...(ownerState.orientation === "vertical" && {
            backgroundColor: "transparent",
            color: theme.palette.grey[500],
            // // fontWeight: 700,
            // padding: 0,
            // left: "3rem",
          }),
          [`&.${sliderClasses.valueLabelOpen}`]: {
            // transform: "none",
            // top: "initial",
          },
        }),
      },
    },
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#202020",
              color: "#fff",
            }),
        }),
      },
    },
  },
});

const theme2 = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#773434",
      paper: "#c3bebe",
    },
    text: {
      primary: "rgba(218,72,72,0.87)",
    },
  },
});
function valuetext(value: number) {
  return `${value}°C`;
}

const page = () => {
  // const classes = useStyle();
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <h1>h1 hello sire</h1>
      <h3>hello sir</h3>

      <div>
        <Button variant="contained">button</Button>
      </div>

      <Box
        component="form"
        color="primary"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          color="primary"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{
            // border: "1px solid red",
            "& .MuiInputBase-input": {
              border: "1px solid red",
            },
            "& .MuiOutlinedInput-input": {
              border: "1px solid red",
            },

            // MuiInputBase-input MuiOutlinedInput-input
          }}
        />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField
          sx={{
            // border: "1px solid red",
            "& .MuiInputBase-input": {
              // border: "1px solid red",
            },
            "& .MuiOutlinedInput-input": {
              border: "1px solid red",
            },
          }}
          id="standard-basic"
          label="Standard"
          variant="standard"
        />
      </Box>

      <Box mb={3}>
        <Typography>hello</Typography>
        <InputBase
          color="primary"
          placeholder="hello"
          // className={classes.inputbase}
        />
      </Box>

      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <NativeSelect
        // className={classes.select}
        // value={age}
        // label="Age"
        // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </NativeSelect>
      </FormControl>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default page;
