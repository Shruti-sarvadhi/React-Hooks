import * as Yup from "yup";

export const postSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title must be at most 100 characters long")
    .required("Title is required"),
  
  content: Yup.string()
    .trim()
    .min(10, "Content must be at least 10 characters long")
    .required("Content is required"),
});
