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
          xs: "1px",
          sm: "0 20px",
          md: "0 50px",
        },
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
