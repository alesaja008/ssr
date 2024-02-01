import { createSlice } from "@reduxjs/toolkit";
import * as sliderTestimonial from "@/store/product/Services";

export const testimoni = createSlice({
  name: "sliderTestimonial",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        title: "",
        slug: "",
        description: "",
        Company: "",
        createdAt: "",
        updatedAt: "",
        publishedAt: "",
        gambar: {
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

      mode: {
        data: {
          data: {
            title: "",
          },
        },
      },
    },
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(sliderTestimonial.getTestimonial.pending, (state) => {
        state.loading = true;
      })
      .addCase(sliderTestimonial.getTestimonial.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(sliderTestimonial.getTestimonial.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      // details blogs handle
    //   .addCase(testimonialAct.getTestimonialDetails.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(
    //     testimonialAct.getTestimonialDetails.fulfilled,
    //     (state, action) => {
    //       state.data = action.payload;
    //       state.loading = false;
    //     }
    //   )
    //   .addCase(
    //     testimonialAct.getTestimonialDetails.rejected,
    //     (state, action) => {
    //       state.loading = false;
    //       state.error = action.payload;
    //     }
    //   ),
});

export default testimoni.reducer;
