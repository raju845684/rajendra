import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const ContactDetails = () => {
  const initialValues = {
    from_name: "",
    from_email: "",
    from_subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    from_name: Yup.string().required("Name is required"),
    from_email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    from_subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = (values, actions) => {
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        values,
        // process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // Success toast
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          actions.resetForm(); // Clear the form
        },
        (error) => {
          // Error toast
          toast.error(`Failed to send message: ${error.text}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      )
      .finally(() => {
        actions.setSubmitting(false); 
      });
  };

  return (
    <>
      {/* Place ToastContainer here to show toasts */}
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          isSubmitting,
          isValid,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Your Name"
                name="from_name"
                value={values.from_name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.from_name && !!errors.from_name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.from_name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email Address"
                name="from_email"
                value={values.from_email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.from_email && !!errors.from_email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.from_email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Control
                type="text"
                placeholder="Subject"
                name="from_subject"
                value={values.from_subject}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.from_subject && !!errors.from_subject}
              />
              <Form.Control.Feedback type="invalid">
                {errors.from_subject}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "157px" }}
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.message && !!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="rm-bg"
              variant="primary"
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactDetails;
