"use client";
import Header from "@/components/Header/Header";
import { Box } from "@mui/material";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
}
