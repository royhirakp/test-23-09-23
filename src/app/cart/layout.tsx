"use client";
import SimpleBottomNavigation from "@/components/BottomNavigation/SimpleBottomNavigation";
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
            xs: "110px",
            sm: "180px",
            md: "205px",
            lg: "230px",
          },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ marginBottom: { xs: "155px", md: "80px" } }}>{children}</Box>

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            bottom: { xs: 75, md: 0 },
          }}
        ></Box>

        <Box
          sx={{
            position: "fixed",
            zIndex: "9999",
            width: "100%",
            bottom: 0,
          }}
        >
          <Footer />
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <SimpleBottomNavigation />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
