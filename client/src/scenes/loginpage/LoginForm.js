import React, { useState } from 'react';
import axios from "axios";
import { setLogin } from '../../state';
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

const registerSchema = yup.object().shape({
  username: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phone: yup.string().required("required"),
  countryname: yup.string().required("required"),
  city: yup.string().required("required"),
  password: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  username: "",
  email: "",
  phone: "",
  countryname: "",
  city: "",
  password: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

function LoginForm() {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (values, onSubmitProps) => {
    try {
      const response = await axios.post("http://localhost:5001/auth/register", values);
      const savedUser = response.data;

      onSubmitProps.resetForm();

      if (savedUser) {
        setPageType("login");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const login = async (values, onSubmitProps) => {
    try {
      const response = await axios.post("http://localhost:5001/auth/login", values);
      const loggedIn = response.data;

      onSubmitProps.resetForm();

      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        const usertype = loggedIn.user.usertype; 
        switch (usertype) {
          case 'admin':
            navigate('/adminportal');
            break;
          case 'teacher':
            navigate('/teacherdashboard');
            break;
          case 'user':
            navigate('/userdashboard');
            break;
          default:
            navigate('/');
            break;
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (pageType === "login") {
      await login(values, onSubmitProps);
    } else if (pageType === "register") {
      await register(values, onSubmitProps);
    }
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={pageType === "login" ? initialValuesLogin : initialValuesRegister}
      validationSchema={pageType === "login" ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <MDBContainer className="p-3 my-5 d-flex flex-column loiginContainer">
            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => setPageType("login")} active={pageType === "login"}>
                  Login
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => setPageType("register")} active={pageType === "register"}>
                  Register
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={pageType === "login"}>
                <div className="text-center mb-3">
                  <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                    <div className="text-center mb-3">
                      <h4 className="text-center mt-4 mb-4">Welcome to Online Quran Portal</h4>
                    </div>
                  </div>
                </div>

                <MDBInput
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  wrapperClass='mb-4 mt-5' label='Email address' id='form1' type='email'
                />
                <MDBInput
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  wrapperClass='mb-4' label='Password' id='form2' type='password'
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100" type="submit" value="login">Sign in</MDBBtn>
                <p className="text-center">Not a member? <Link to={""} onClick={() => setPageType("register")}>Register</Link></p>
              </MDBTabsPane>

              <MDBTabsPane show={pageType === "register"}>
                <div className="text-center mb-3">
                  <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                    <div className="text-center mb-3">
                      <h4 className="text-center mt-4 mb-4">Welcome to Online Quran Portal</h4>
                    </div>
                  </div>
                </div>

                <MDBInput
                  wrapperClass='mb-4'
                  label='Name'
                  id='form1'
                  type='text'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  name="username"
                  error={Boolean(touched.username) && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  id='form1'
                  type='email'
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Phone'
                  id='form1'
                  type='phone'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  name="phone"
                  error={Boolean(touched.phone) && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Country Name'
                  id='form1'
                  type='text'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.countryname}
                  name="countryname"
                  error={Boolean(touched.countryname) && Boolean(errors.countryname)}
                  helperText={touched.countryname && errors.countryname}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='City'
                  id='form1'
                  type='text'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                  name="city"
                  error={Boolean(touched.city) && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Password'
                  id='form1'
                  type='password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />

                <MDBBtn className="mb-4 w-100" type="submit" value="register">Sign up</MDBBtn>
                <p className="text-center">Already have an account? <Link to={""} onClick={() => setPageType("login")}>SIgn In</Link></p>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBContainer>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
