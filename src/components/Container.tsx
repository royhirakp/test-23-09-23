import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  style: object;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <Box
      sx={{
        padding: {
          xs: "0 5px",
          sm: "0 25px",
          md: "0 60px",
        },
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
