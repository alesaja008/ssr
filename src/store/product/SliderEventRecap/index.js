import { createSlice } from "@reduxjs/toolkit";
import * as sliderRecap from "@/store/product/Services";

export const sliceRecap = createSlice({
  name: "eventRecap",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        title: "",
        description: "",
        featured: "",
        createdAt: "",
        updatedAt: "",
        publishedAt: "",
        slug: "",
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
        mode: {
          data: {
            attributes: {
              title: "",
            },
          },
        },
        categories: {
          data: {
            attributes: {
              title: "",
            },
          },
        },
      },
    },
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(sliderRecap.getEventRecap.pending, (state) => {
        state.loading = true;
      })
      .addCase(sliderRecap.getEventRecap.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(sliderRecap.getEventRecap.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      // details recap
    //   .addCase(sliderRecap.getRecapDetails.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(sliderRecap.getRecapDetails.fulfilled, (state, action) => {
    //     state.data = action.payload;
    //     state.loading = false;
    //   })
    //   .addCase(sliderRecap.getRecapDetails.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
  },
});

export default sliceRecap.reducer;
