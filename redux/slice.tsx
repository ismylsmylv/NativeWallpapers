/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '@reduxjs/toolkit/query';
import axios from 'axios';

// export const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('wishlist');
//     console.log(jsonValue, 'get local');
//     return jsonValue != null ? JSON.parse(jsonValue) : [];
//   } catch (e) {}
// };
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('wishlist');
    console.log(jsonValue, 'get local');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading local data:', e);
    return []; // or handle the error accordingly
  }
};
export const storeData = async (value: object[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('wishlist', jsonValue);
    console.log(jsonValue, 'stored');
  } catch (e) {}
};

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
  local: object[];
  loading: boolean;
}

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
  local: [],
  loading: false,
};

export const fetchWalls = createAsyncThunk('users/fetchWalls', async () => {
  const response = await axios.get(
    'https://6565f015eb8bb4b70ef29ee3.mockapi.io/wallpapers',
  );
  return response.data;
});
export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async () => {
    const newData = await getData();
    return newData;
  },
);
export const counterSlice = createSlice({
  name: 'counter',
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
    addWish: (state, action: PayloadAction<any>) => {
      state.wishlist = [...state.wishlist, action.payload];
      storeData(state.wishlist);
      console.log(state.wishlist, 'stored to locale');
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
    removeWish: (state, action: PayloadAction<any>) => {
      state.wishlist = state.wishlist.filter(
        (elem: any) => elem.name !== action.payload.name,
      );
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
      storeData(state.wishlist);
    },
    filterForYou: state => {
      state.wallpapers = state.wallpapersBack;
    },
    filterPopular: state => {
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
      state.openCategory = state.wallpapers.filter((elem: any) =>
        elem.category.includes(state.selectedCategory),
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      setTimeout(() => {
        state.loading = true;
      }, 1000);
    },
    // getLocal: state => {
    //   // let newData = [];
    //   async function readLocal() {
    //     const newData = await getData();
    //     console.log(newData, 'slice newdata async');
    //     return newData;
    //   }
    //   state.wishlist = readLocal();
    //   readLocal();
    // },
  },
  extraReducers: builder => {
    builder.addCase(fetchWalls.fulfilled, (state, action) => {
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      const wallpapersRandom = [...action.payload];
      shuffleArray(wallpapersRandom);
      state.wallpapers = wallpapersRandom;
      state.wallpapersBack = wallpapersRandom;
    });
    builder.addCase(fetchWishlist.fulfilled, (state, action) => {
      state.wishlist = action.payload;
      console.log(state.wishlist, 'extraReducers');
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
  setLoading,
  // getLocal,
} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
