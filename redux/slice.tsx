/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '@reduxjs/toolkit/query';
import axios from 'axios';

// Define a type for the slice state
interface CounterState {
  value: number;
  wallpapers: object[];
  route: string;
  openItem: object;
  detailOpen: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  wallpapers: [],
  route: 'HomeScreen',
  openItem: {},
  detailOpen: false,
};
export const fetchWalls = createAsyncThunk('users/fetchWalls', async () => {
  const response = await axios.get(
    'https://6565f015eb8bb4b70ef29ee3.mockapi.io/wallpapers',
  );
  return response.data;
});
export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setRoute: (state, action: PayloadAction<string>) => {
      state.route = action.payload;
    },

    setItem: (state, action: PayloadAction<object>) => {
      state.openItem = action.payload;
    },
    setDetailOpen: (state, action: PayloadAction<boolean>) => {
      state.detailOpen = action.payload;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchWalls.fulfilled, (state, action) => {
      // Add user to the state array
      state.wallpapers = action.payload;
    });
  },
});

export const {increment, decrement, setRoute, setItem, setDetailOpen} =
  counterSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
