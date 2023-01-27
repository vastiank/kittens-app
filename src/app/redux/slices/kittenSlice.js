import { createSlice } from "@reduxjs/toolkit";
import { getKittens } from "../../utils/api/apiService";

const initialState = { data: [] };
const name = "kittens";

export const kittenSlice = createSlice({
  name,
  initialState,
  reducers: {
    setKittens: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setKittens } = kittenSlice.actions;
export default kittenSlice.reducer;

export const fetchAllKittens = () => (dispatch) => {
  getKittens()
    .then((response) => {
      dispatch(setKittens(response));
    })
    .catch((error) => new Error(error));
};
