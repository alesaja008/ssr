import { configureStore } from "@reduxjs/toolkit";

import sliderHeroReducer from "@/store/product/SliderHero";
import sliderBlogReducer from "@/store/product/SliderBlog";
import sliderProductReducer from "@/store/product/SliderProductOp";
import sliderAwardsReducer from "@/store/product/SliderAwards";
import sliderTestimoniReducer from "@/store/product/SliderTestimonial";
import SliderEventRecapReducer from "./product/SliderEventRecap";

export default configureStore({
  reducer: {
    sliderHero: sliderHeroReducer,
    sliderBlog: sliderBlogReducer,
    product: sliderProductReducer,
    awardsAll: sliderAwardsReducer,
    sliderTestimonial: sliderTestimoniReducer,
    eventRecap: SliderEventRecapReducer,
  },
});
