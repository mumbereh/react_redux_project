import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const urlBase = 'https://api.coingecko.com/api/v3/coins/';
const urlFetcherAPI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en';

export const fetchCategories = createAsyncThunk('homepage/fetchCategories', async () => {
  try {
    const response = await fetch(urlBase);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
});

export const fetchCategory = createAsyncThunk(
  'homepage/fetchCategory',
  async ({ rejectWithValue }) => {
    try {
      const response = await fetch(urlFetcherAPI);
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const homepageSlice = createSlice({
  name: 'homepage',
  initialState: {
    filter: '',
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        const categoryIndex = state.categories.findIndex(
          (category) => category.id === action.payload.id,
        );
        if (categoryIndex !== -1) {
          state.categories[categoryIndex] = action.payload;
        }
      });
  },
});

export const { setFilter } = homepageSlice.actions;

export default homepageSlice.reducer;
