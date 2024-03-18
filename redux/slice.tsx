/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '@reduxjs/toolkit/query';
import axios from 'axios';

// Define a type for the slice state
interface CounterState {
  value: number;
  wallpapers: object[];
  wallpapersBack: object[];
  route: string;
  openItem: object;
  detailOpen: boolean;
  wishlist: object[];
  activeFilter: string;
  selectedCategory: string;
  openCategory: object[];
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  wallpapers: [],
  wallpapersBack: [],
  route: 'HomeScreen',
  openItem: {},
  detailOpen: false,
  wishlist: [],
  activeFilter: 'for you',
  selectedCategory: '',
  openCategory: [],
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
    setRoute: (state, action: PayloadAction<string>) => {
      state.route = action.payload;
    },

    setItem: (state, action: PayloadAction<object>) => {
      state.openItem = action.payload;
    },
    setDetailOpen: (state, action: PayloadAction<boolean>) => {
      state.detailOpen = action.payload;
    },
    addWish: (state, action: PayloadAction<boolean | any>) => {
      state.wishlist = [...state.wishlist, action.payload];
      console.log(state.wishlist, 'added');
      const updatedLikes = action.payload.like + 1;
      const obj = {
        name: action.payload.name,
        img: action.payload.img,
        view: action.payload.view,
        like: updatedLikes,
        rating: action.payload.rating,
        category: action.payload.category,
      };
      axios.put(
        'https://6565f015eb8bb4b70ef29ee3.mockapi.io/wallpapers/' +
          action.payload.id,
        obj,
      );
    },
    removeWish: (state, action: PayloadAction<object | any>) => {
      state.wishlist = state.wishlist.filter(elem => {
        elem.name != action.payload.name;
      });
      const updatedLikes = action.payload.like - 1;
      const obj = {
        name: action.payload.name,
        img: action.payload.img,
        view: action.payload.view,
        like: updatedLikes,
        rating: action.payload.rating,
        category: action.payload.category,
      };
      axios.put(
        'https://6565f015eb8bb4b70ef29ee3.mockapi.io/wallpapers/' +
          action.payload.id,
        obj,
      );
      console.log(state.wishlist, 'removed');
    },
    filterForYou: state => {
      state.wallpapers = state.wallpapersBack;
    },
    filterPopular: state => {
      // state.wallpapers = state.wallpapers.filter(elem=>);
      state.wallpapers.sort((a: any, b: any) => b.like - a.like);
    },
    filterTrending: state => {
      state.wallpapers.sort((a: any, b: any) => b.rating - a.rating);
    },
    setactiveFilter: (state, action: PayloadAction<string>) => {
      state.activeFilter = action.payload;
    },
    setselectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setopenCategory: state => {
      state.openCategory = state.wallpapers.filter(elem => {
        return elem.category.includes(state.selectedCategory);
      });
      // console.log(state.selectedCategory, 'selected from slice');
      // console.log(JSON.stringify(state.openCategory), 'stringed from slice');
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchWalls.fulfilled, (state, action) => {
      // Add user to the state array

      state.wallpapers = action.payload;
      state.wallpapersBack = action.payload;
    });
  },
});

export const {
  setRoute,
  setItem,
  setDetailOpen,
  addWish,
  removeWish,
  filterForYou,
  filterPopular,
  filterTrending,
  setactiveFilter,
  setselectedCategory,
  setopenCategory,
} = counterSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
