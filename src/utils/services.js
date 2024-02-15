import api from ".";

const ENDPOINT = {
  SLIDERHERO: "/sliders?populate=*",
  SLIDERBLOG: "/blogs?populate=*",
  SLIDERPRODUCTOP: "/services?populate=*",
  AWARD: "/awards?populate=*",
  TESTIMONIAL: "/testimonials?populate=*",
  EVENTRECAP: "/recaps/?populate=*",
};

const getBlogs = async () => {
  try {
    const resBlog = await api.get(ENDPOINT.SLIDERBLOG);
    return resBlog;
  } catch (error) {
    throw Error(err);
  }
};

export { getBlogs };
