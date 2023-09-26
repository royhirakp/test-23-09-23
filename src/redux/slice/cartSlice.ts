import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface item {
  id: number;
  name: string;
  details: string;
  reviews: string;
  ratings: number;
  price: number;
  imgUrl: string;
  qtyOfOrder: number;
}
interface Appstate {
  totalPrice: number;
  totalNoOfProduct: number;
  cartProductList: any;
}

interface palodeData {
  id: number;
  name: string;
  details: string;
  reviews: string;
  ratings: number;
  price: number;
  imgUrl: string;
}
let arr = [];
const initialState: Appstate = {
  totalNoOfProduct: 0,
  totalPrice: 0,
  cartProductList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<palodeData>) => {
      const item = action.payload;
      state.totalNoOfProduct = state.totalNoOfProduct + 1;
      // for empty cart
      if (state.cartProductList == undefined) {
        state.cartProductList = [{ ...item, qtyOfOrder: 1 }];
        state.totalPrice = item.price;
        return;
      }
      //update total price
      state.totalPrice = state.totalPrice + item.price;
      // finding the item and product index
      let result = state.cartProductList.find(
        (product: any) => product.id === item.id
      );
      let indexx = state.cartProductList.findIndex(
        (product: any) => product.id === item.id
      );
      console.log(
        "index=",
        indexx,
        "result",
        result,
        "state.cartitem",
        state.cartProductList.length
      );
      if (indexx == -1) {
        // if the item not present / new item
        state.cartProductList = [
          ...state.cartProductList,
          { ...item, qtyOfOrder: 1 },
        ];
        console.log("state==>, new product", state.cartProductList);
      } else {
        // update product qty and total price
        let oldProduct = state.cartProductList[indexx];
        oldProduct.qtyOfOrder = oldProduct.qtyOfOrder + 1;
        console.log("state==>, old product", state.cartProductList);
      }
    },
    checkoutCart: (state) => {
      state.cartProductList = [];
      state.totalNoOfProduct = 0;
      state.totalPrice = 0;
      console.log("state.cartitem", state.cartProductList.length);
    },
    increaseItemQty: (state) => {},
    decreseItemQty: (state) => {},
    removeItems: (state) => {},
  },
});

export const {
  addToCart,
  checkoutCart,
  decreseItemQty,
  increaseItemQty,
  removeItems,
} = cartSlice.actions;

export default cartSlice.reducer;
