import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import Image from "next/image";

export default function BioCard() {
  return (
    <Card
      sx={{
        // width: 320,
        maxWidth: "100%",
        height: "100%",
        boxShadow: "lg",
      }}
    >
      <CardContent
        sx={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          alingItems: "center",
        }}
      >
        <Avatar src="/user.jpg" sx={{ "--Avatar-size": "4rem" }} />

        <Typography level="title-lg">Elsa Doe</Typography>
        <Typography>CEO & Founder Invision</Typography>
        <Image src="/quotes.svg" width={30} height={30} alt="quotes" />
        <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer
          and I love to code.
        </Typography>
      </CardContent>
    </Card>
  );
}
