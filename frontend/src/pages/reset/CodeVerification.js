import { Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../components/Input";
export default function CodeVerification({
  code,
  setCode,
  error,
  setLoading,
  loading,
  setVisible,
  setError,
  user,
}) {
  const validateCode = Yup.object({
    code: Yup.string()
      .required("Code is required")
      .min("5", "Code must be 5 characters.")
      .max("5", "Code must be 5 characters."),
  });

  async function verifyCode() {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/validateCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          email: user.email,
        }),
      });
      setVisible(3);
      setError(null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div className="reset_form">
      <div className="reset_form_header">Code verification</div>
      <div className="reset_form_text">
        Please enter code that been sent to your email.
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          code,
        }}
        validationSchema={validateCode}
        onSubmit={verifyCode}
      >
        {(formik) => (
          <Form>
            <Input
              type="text"
              name="code"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code"
            />
            {error && <div className="error_text">{error}</div>}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn reset_button">
                Cancel
              </Link>
              <button type="submit" className="blue_btn reset_button">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
