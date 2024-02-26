import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk("movie/get", async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/movies/");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createMovie = createAsyncThunk("movie/create", async (payload) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/movies/",
      payload
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteMovie = createAsyncThunk("movie/delete", async (payload) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/api/movies/${payload}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const updateMovie = createAsyncThunk(
  "movie/update",
  async ({ id, newMovie }) => {
    console.log(id, newMovie);
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/movies/${id}`,
        newMovie
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const favoritMovie = createAsyncThunk(
  "movie/favorit",
  async (id, likedmovie) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/users/favorite/${id}`,
        likedmovie
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.myMovies = action.payload;
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.loading = false;
    });
    /////////////////////

    builder.addCase(createMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createMovie.fulfilled, (state, action) => {
      state.createdMovie = action.payload;
    });
    builder.addCase(createMovie.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////
    builder.addCase(deleteMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteMovie.fulfilled, (state, action) => {
      state.deletedMovie = action.payload;
    });
    builder.addCase(deleteMovie.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////////////////
    builder.addCase(updateMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateMovie.fulfilled, (state, action) => {
      state.updatedMovie = action.payload;
    });
    builder.addCase(updateMovie.rejected, (state) => {
      state.loading = false;
    });
    ////////////////

    builder.addCase(favoritMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(favoritMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.favoritMovie = action.payload;
    });
    builder.addCase(favoritMovie.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default movieSlice.reducer;
