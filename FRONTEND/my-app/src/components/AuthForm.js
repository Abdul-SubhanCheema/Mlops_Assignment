import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AuthForm({ initialValues, onSubmit, validationSchema, buttonLabel }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => (
        <Form className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">{buttonLabel}</button>
        </Form>
      )}
    </Formik>
  );
}

export default AuthForm;
