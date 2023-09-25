import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { textType1, textType2, textType3 } from "@/elementStyle/Text";
interface SlidercardProps {
  data: any;
}
const SliderCard: React.FC<SlidercardProps> = ({ data }) => {
  return (
    <Box width="100%" borderRadius="10px">
      <Stack
        sx={{
          position: "absolute",
          top: "10%",
          paddingLeft: "1%",
        }}
      >
        <Typography
          variant="h6"
          color="pink"
          sx={{
            fontSize: textType1,
          }}
        >
          Trainding Items
        </Typography>
        <Typography
          variant="h6"
          width="40%"
          sx={{
            fontSize: textType2,
          }}
        >
          WOMEN'S LATEST FASHION SALE
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: textType3,
          }}
          color="#838080"
        >
          starting at $ 20.00
        </Typography>
        <Box
          sx={{
            cursor: "pointer",

            // width: "100px",
            padding: "5px",
            borderRadius: "10px",
            display: "inline-block",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              padding: "3%",
              borderRadius: "8px",
              backgroundColor: "pink",
              cursor: "pointer",
              fontSize: {
                xs: "8px",
                sm: "12px",
                md: "15px",
              },
            }}
          >
            Shop Now
          </Box>
        </Box>
      </Stack>
      <Image
        className="w-[100%] h-[300px] md:h-auto rounded-x1 object-cover object-right md:object-left-bottom"
        style={{ borderRadius: "1%" }}
        alt="banner"
        src={`${data.img}`}
        width={1500}
        height={2100}
      />
    </Box>
  );
};

export default SliderCard;
