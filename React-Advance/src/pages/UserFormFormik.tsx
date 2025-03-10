import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppDispatch } from "@/store";
import { addUser } from "@/store/slices/user/userSlice";
import { userSchema } from "@/utils/formSchemas"; // Import the schema from formSchemas.ts

// Define UserFormData Type
interface UserFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const UserFormFormik = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik<UserFormData>
      initialValues={{ name: "", email: "", phone: "", password: "" }}
      validationSchema={userSchema} // Use the imported schema for validation
      onSubmit={(values, { resetForm }) => {
        dispatch(addUser({ id: Date.now(), ...values })); // Simulating ID
        resetForm();
      }}
    >
      {() => (
        <Form className="p-4 border rounded shadow-md max-w-md mx-auto">
          <div>
            <label htmlFor="name">Name:</label>
            <Field
              id="name"
              name="name"
              className="border p-2 w-full"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="p" className="text-red-500" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              id="email"
              name="email"
              className="border p-2 w-full"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <Field
              id="phone"
              name="phone"
              className="border p-2 w-full"
              placeholder="Enter your phone number"
            />
            <ErrorMessage name="phone" component="p" className="text-red-500" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              id="password"
              name="password"
              type="password"
              className="border p-2 w-full"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserFormFormik;
