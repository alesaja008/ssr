// import { createSlice } from "@reduxjs/toolkit";
// import * as sliderProductOp from "@/store/product/Services";

// export const productSrv = createSlice({
//   name: "product",
//   initialState: {
//     loading: false,
//     entities: [],
//     data: {
//       attributes: {
//         title: "",
//         description: "",
//         slug: "",
//         createdAt: "",
//         updatedAt: "",
//         publishedAt: "",
//         image: {
//           data: {
//             attributes: {
//               formats: {
//                 medium: {
//                   url: "",
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(sliderProductOp.getProductOp.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(sliderProductOp.getProductOp.fulfilled, (state, action) => {
//         state.entities = action.payload;
//         state.loading = false;
//       })
//       .addCase(sliderProductOp.getProductOp.rejected, (state, action) => {
//         state.loading = true;
//         state.error = action.payload;
//       });

//     // // details product
//     // .addCase(sliderProductOp.getProductDetail.pending, (state) => {
//     //   state.loading = true;
//     // })
//     // .addCase(sliderProductOp.getProductDetail.fulfilled, (state, action) => {
//     //   state.data = action.payload;
//     //   state.loading = false;
//     // })
//     // .addCase(sliderProductOp.getProductDetail.rejected, (state, action) => {
//     //   state.loading = false;
//     //   state.error = action.payload;
//     // });
//   },
// });

// export default productSrv.reducer;
