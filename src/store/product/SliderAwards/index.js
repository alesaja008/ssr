import { createSlice } from "@reduxjs/toolkit";
import * as sliderAward from "@/store/product/Services";

export const Awards = createSlice({
  name: "awardsAll",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        title: "",
        content: "",
        slug: "",
        featured: "",
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
        mode: {
          data: {
            attributes: {
              name: "",
            },
          },
        },
      },
    },
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(sliderAward.getAwards.pending, (state) => {
        state.loading = true;
      })
      .addCase(sliderAward.getAwards.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(sliderAward.getAwards.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      }),

  //   .addCase(ProductAwards.getAwardsDetails.pending, (state) => {
  //     state.loading = true;
  //   })
  //   .addCase(ProductAwards.getAwardsDetails.fulfilled, (state, action) => {
  //     state.data = action.payload;
  //     state.loading = false;
  //   })
  //   .addCase(ProductAwards.getAwardsDetails.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   }),
});

export default Awards.reducer;
