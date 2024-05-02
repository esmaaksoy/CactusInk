import { Form, Formik } from "formik";
import React, { useState } from "react";
import { object, string } from "yup";
import useAuthCalls from "../../service/useAuthCalls";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
const RegisterForm = () => {
  const inputData = [
    {
      name: "username",
      type: "text",
      placeholder: "User Name",
    },
    {
      name: "firstName",
      type: "text",
      placeholder: "First Name",
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
    },

    {
      name: "image",
      type: "url",
      placeholder: "Image Url",
    },
    {
      name: "city",
      type: "text",
      placeholder: "City",
    },
    { name: "bio", type: "text", placeholder: "Biography" },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
    },
  ];
  const registerSchema = object({
    username: string()
      .max(10, "The username must be less than 10 characters.")
      .required("The username is required."),
    firstName: string()
      .max(10, "The first name must be less than 10 characters.")
      .required("The first name is required."),
    lastName: string()
      .max(10, "The last name must be less than 10 characters.")
      .required("The last name is required."),
    email: string()
      .email("Please enter a valid email.")
      .required("Email is required."),
    password: string()
      .required("Password is required.")
      .min(8, "The password must be at least 8 characters.")
      .matches(/\d+/, "The password must contain at least one number.")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .matches(
        /[!/[@$!%*?&]+/,
        "Password must contain at least one special character (@$!%*?&)."
      ),
    city: string().required("City information is required."),
    bio: string()
      .required("Biography information is required.")
      .max(300, "Your biography must be less than 300 characters."),
    image: string().required("Image url is required"),
  });
  const { register } = useAuthCalls();
  const [show, setShow] = useState(false);
  return (
    <div className="w-[100%] sm:w-[50%] flex flex-col gap-3 p-5">
      <Formik
        initialValues={{ email: "", password: "", username:"", firstName:"", lastName: "", city: "", bio: "", image:""}}
        // validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          register(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ handleChange, values, touched, errors, handleBlur }) => (
          <Form>
            {inputData.map(({ name, type, placeholder }) => (
              <div key={name}>
                <label
                  htmlFor={name}
                  className="relative block overflow-hidden border-b border-[#4B7755] bg-transparent pt-3 focus-within:border-[#4B7755] mt-4"
                >
                  <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    required
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-0 top-2 -translate-y-1/2 text-base tracking-[0.3rem] font-semibold text-[#4B7755] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    {placeholder}
                  </span>
                </label>
                {touched[name] && Boolean(errors[name]) && (
                  <span className="font-medium tracking-wide text-red-500 text-xs mt-1">
                    {errors[name]}
                  </span>
                )}{" "}
              </div>
            ))}
            <label
              htmlFor="password"
              className="relative mt-3 block overflow-hidden border-b border-[#4B7755] bg-transparent pt-3 focus-within:border-[#4B7755]"
            >
              <div className="flex">
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
                <span className="cursor-pointer">
                  {show ? (
                    <IoIosEye
                      onClick={() => setShow(false)}
                      className="text-2xl"
                    />
                  ) : (
                    <IoIosEyeOff
                      onClick={() => setShow(true)}
                      className="text-2xl"
                    />
                  )}
                </span>
              </div>
              <span className="absolute start-0 top-2 -translate-y-1/2 text-base tracking-[0.3rem] font-bold text-[#4B7755]  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Password
              </span>
              
            </label>
            {touched.password && Boolean(errors.password) && (
                  <span className="font-medium tracking-wide text-red-500 text-xs mt-1">
                    {errors.password}
                  </span>
                )}
            <button
              type="submit"
              className="w-[100%] font-pacifico bg-[#4B7755] hover:bg-[#AED1B2] text-white font-bold py-2 px-4 rounded-full mt-5"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
