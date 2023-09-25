import { Box, Typography } from "@mui/joy";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Box
        bgcolor="ActiveBorder"
        height={500}
        display="flex"
        flexDirection="column"
      >
        <Typography>heloooo</Typography>
        <Typography border="1px solid">end</Typography>
      </Box>
    </main>
  );
}
