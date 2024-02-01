import { createSlice } from "@reduxjs/toolkit";
import * as blogSlider from "@/store/product/Services";

export const blogSlice = createSlice({
  name: "sliderBlog",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        title: "",
        description: "",
        slug: "",
        featured: "",
        createdAt: "",
        updatedAt: "",
        publishedAt: "",
        id_categories: "",
        alt: "",
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
        categories: {
          data: {
            attributes: {
              title: "",
              slug: "",
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
        SEO: {
          title: "",
          description: "",
        },
      },
    },
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(blogSlider.getBlogSlider.pending, (state) => {
        state.loading = true;
      })
      .addCase(blogSlider.getBlogSlider.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(blogSlider.getBlogSlider.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      }),

  // details blogs handle
  //   .addCase(blogSlider.getDetail.pending, (state) => {
  //     state.loading = true;
  //   })
  //   .addCase(blogSlider.getDetail.fulfilled, (state, action) => {
  //     state.data = action.payload;
  //     state.loading = false;
  //   })
  //   .addCase(blogSlider.getDetail.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   }),
});

export default blogSlice.reducer;
