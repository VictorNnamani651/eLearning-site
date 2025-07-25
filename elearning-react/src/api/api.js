const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API = {
  USERS: `${BASE_URL}/users`,
  COURSES: `${BASE_URL}/courses`,
  POPULAR_COURSES: `${BASE_URL}/popularCourses`,
  INSTRUCTORS: `${BASE_URL}/instructors`,
  NEWS: `${BASE_URL}/news`,
  FOOTER_LINKS: `${BASE_URL}/footerLinks`,
  FOOTER_GALLERY: `${BASE_URL}/footerGallery`,
  TESTIMONIALS: `${BASE_URL}/testimonials`,
};
