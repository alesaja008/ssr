import { createSlice } from "@reduxjs/toolkit";
import { getSliderHero } from "@/store/product/Services";

export const sliderHeroSlice = createSlice({
  name: "sliderHero", 
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        alt: "",
        image: {
          createdAt: "",
          updatedAt: "",
          publishedAt: "",
          image: {
            data: {
              attributes: {
                formats: {
                  large: {
                    url: "",
                  },
                },
              },
            },
          },
        },
      },
    },
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getSliderHero.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSliderHero.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(getSliderHero.rejected, (state, action) => {
        state.loading = false; // Set loading to false on rejection
        state.error = action.payload;
      });
  },
});

export default sliderHeroSlice.reducer;
