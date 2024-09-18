import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shop state interface
interface ShopState {
  hasShop: boolean;
  shopData: {
    name: string;
    description: string;
    location: {
      address: string;
      city: string;
      country: string;
    };
  } | null;
}

// Define the initial state
const initialState: ShopState = {
  hasShop: false,
  shopData: null,
};

// Create the shop slice
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setShop: (
      state,
      action: PayloadAction<{
        name: string;
        description: string;
        location: { address: string; city: string; country: string };
      }>
    ) => {
      state.hasShop = true;
      state.shopData = action.payload;
    },
    clearShop: (state) => {
      state.hasShop = false;
      state.shopData = null;
    },
    updateShopName: (state, action: PayloadAction<string>) => {
      if (state.shopData) {
        state.shopData.name = action.payload;
      }
    },
    updateShopDescription: (state, action: PayloadAction<string>) => {
      if (state.shopData) {
        state.shopData.description = action.payload;
      }
    },
    updateShopLocation: (
      state,
      action: PayloadAction<{ address: string; city: string; country: string }>
    ) => {
      if (state.shopData) {
        state.shopData.location = action.payload;
      }
    },
  },
});

// Export the actions
export const {
  setShop,
  clearShop,
  updateShopName,
  updateShopDescription,
  updateShopLocation,
} = shopSlice.actions;

// Export the reducer
export default shopSlice.reducer;
