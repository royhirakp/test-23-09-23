import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Ratting from "./Ratting";
import { addToCart } from "@/redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import {
  textType1,
  buttonFontSize,
  textType2,
  textType3,
} from "@/elementStyle/Text";
interface ProductProps {
  id: number;
  name: string;
  details: string;
  reviews: string;
  ratings: number;
  price: number;
  imgUrl: string;
}
const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  details,
  reviews,
  ratings,
  price,
  imgUrl,
}) => {
  const dispatch = useDispatch();
  function handelClick(item: any) {
    dispatch(addToCart(item));
  }
  return (
    <Card sx={{ maxWidth: 250, padding: "1%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imgUrl}
      />
      <CardContent
        sx={{
          padding: {
            xs: "0 3%",
          },
        }}
      >
        <Typography
          sx={{ fontSize: textType2 }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: textType1 }}
          variant="body2"
          color="text.secondary"
        >
          {details}
        </Typography>
        <Ratting count={reviews} rate={ratings} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: {
              xs: "12px",
              sm: "15px",
              md: "17px",
            },
          }}
        >
          <b> ${price}</b> <del>$555</del>
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "2% 3%" }}>
        <Button
          onClick={() =>
            handelClick({
              id,
              name,
              details,
              reviews,
              ratings,
              price: price * 1,
              imgUrl,
            })
          }
          sx={{
            "&.MuiButton-root": {
              backgroundColor: "#ef7d7d",
              // width: "10px",
            },
            color: "#ffff",
            fontSize: buttonFontSize,
          }}
          variant="contained"
        >
          {" "}
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
