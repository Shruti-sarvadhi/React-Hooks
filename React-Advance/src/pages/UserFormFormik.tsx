import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppDispatch } from "@/store";
import { addPost } from "@/store";
import { postSchema } from "@/utils/postSchema"; // Import validation schema

// Define PostFormData Type
interface PostFormData {
  title: string;
  content: string;
}

const PostFormFormik = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik<PostFormData>
      initialValues={{ title: "", content: "" }}
      validationSchema={postSchema} // Use the imported schema for validation
      onSubmit={async (values, { resetForm }) => {
        await dispatch(addPost(values));
        alert("Post added successfully!");
        resetForm();
        window.location.reload(); // Full page refresh after adding a post
      }}
    >
      {() => (
        <Form className="p-4 border rounded shadow-md max-w-md mx-auto">
          <div>
            <label htmlFor="title">Title:</label>
            <Field
              id="title"
              name="title"
              className="border p-2 w-full"
              placeholder="Enter post title"
            />
            <ErrorMessage name="title" component="p" className="text-red-500" />
          </div>

          <div>
            <label htmlFor="content">Content:</label>
            <Field
              as="textarea"
              id="content"
              name="content"
              className="border p-2 w-full"
              placeholder="Enter post content"
            />
            <ErrorMessage name="content" component="p" className="text-red-500" />
          </div>

          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PostFormFormik;
