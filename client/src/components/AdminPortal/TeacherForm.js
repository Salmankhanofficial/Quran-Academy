import React from 'react';
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const registerSchema = yup.object().shape({
  username: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phone: yup.string().required("Required"),
  countryname: yup.string().required("Required"),
  city: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

const initialValuesRegister = {
  username: "",
  email: "",
  phone: "",
  countryname: "",
  city: "",
  usertype: "teacher",
  password: "",
};

const TeacherForm = () => {
  const navigate = useNavigate();

  const register = async (values, onSubmitProps) => {
    try {
      const response = await axios.post("http://localhost:5001/auth/register", values);
      const savedUser = response.data;

      onSubmitProps.resetForm();

      if (savedUser) {
        navigate("/Adminportal/teachers?message=success");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {    
    await register({ ...values, usertype: "teacher" }, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Add Teacher</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="username"
                        placeholder="Enter name"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.username && touched.username && (
                        <div className="error">{errors.username}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.phone && touched.phone && (
                        <div className="error">{errors.phone}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="countryname"
                        placeholder="Enter country name"
                        value={values.countryname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.countryname && touched.countryname && (
                        <div className="error">{errors.countryname}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="Enter city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.city && touched.city && (
                        <div className="error">{errors.city}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="usertype">User Type</label>
                      <input
                        type="text"
                        className="form-control"
                        id="usertype"
                        name="usertype"
                        value={values.usertype}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        readOnly
                      />
                      {errors.usertype && touched.usertype && (
                        <div className="error">{errors.usertype}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password && (
                        <div className="error">{errors.password}</div>
                      )}
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default TeacherForm;
