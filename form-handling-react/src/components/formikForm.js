import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required")
  });

  const onSubmit = (values) => {
    console.log("Formik form submitted:", values);
    // Call mock API here if needed
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />
        
        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        
        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
