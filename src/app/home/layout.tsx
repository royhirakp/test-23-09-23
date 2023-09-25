"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box, Stack } from "@mui/material";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack>
      <Box position="fixed" zIndex="1" width="100%" bgcolor="#ffff">
        <Header />
      </Box>
      <Box
        sx={{
          marginTop: {
            xs: "100px",
            sm: "140px",
            md: "155px",
            lg: "220px",
          },
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          alignContent: "flex-end",
          marginBottom: {
            xs: "90px",
            md: "0",
          },
        }}
      ></Box>
    </Stack>
  );
}
