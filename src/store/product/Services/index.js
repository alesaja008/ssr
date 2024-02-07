import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/pages/api";

// const reqOptions = {
//   headers: {
//     Authorization: `Bearer ${process.env.API_TOKEN}`,
//   },
// };

const ENDPOINT = {
  SLIDERHERO: "/sliders?populate=*",
  SLIDERBLOG: "/blogs?populate=*",
  SLIDERPRODUCTOP: "/services?populate=*",
  AWARD: "/awards?populate=*",
  TESTIMONIAL: "/testimonials?populate=*",
  EVENTRECAP: "/recaps/?populate=*",
};

export const getSliderHero = createAsyncThunk(
  "hero/getSliderHero",
  async () => {
    try {
      const response = await api.get(ENDPOINT.SLIDERHERO);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getBlogSlider = createAsyncThunk(
  "blog/getSliderBlog",
  async () => {
    try {
      const response = await api.get(ENDPOINT.SLIDERBLOG);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getDetail = createAsyncThunk(
  "blog/getDetailBlogs",
  async (data) => {
    try {
      const response = await api.get(`/blogs/${data}?populate=*`);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

// Product Service op
export const getProductOp = createAsyncThunk(
  "product/getProductOp",
  async () => {
    try {
      const response = await api.get(ENDPOINT.SLIDERPRODUCTOP);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

// Awards
export const getAwards = createAsyncThunk("award/getAwards", async () => {
  try {
    const response = await api.get(ENDPOINT.AWARD);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

// testimonial
export const getTestimonial = createAsyncThunk(
  "testimoni/getTestimonial",
  async () => {
    try {
      const response = await api.get(ENDPOINT.TESTIMONIAL);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getEventRecap = createAsyncThunk(
  "eventRecap/getRecap",
  async () => {
    try {
      const response = await api.get(ENDPOINT.EVENTRECAP);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
