import { Form, Formik } from "formik";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { object, string } from "yup";
import useAuthCalls from "../../service/useAuthCalls";
import { useState } from "react";
const LoginForm = () => {
  const loginSchema = object({
    email: string()
      .email("Please enter a valid email.")
      .required("Email is required."),
    password: string()
      .required("Password is required.")
      .min(8, "Password must contain at least 8 characters.")
      .matches(/\d+/, "Password must contain at least one digit.")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .matches(
        /[@$!%*?&]+/,
        "Password must contain at least one special character (@$!%*?&)."
      ),
  });
  const { login } = useAuthCalls();
  const [show, setShow] = useState(false);
  return (
    <div className="w-[50%] flex flex-col gap-3">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          login(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ handleChange, values, touched, errors, handleBlur }) => (
          <Form>
            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden border-b border-[#4B7755] bg-transparent pt-3 focus-within:border-[#4B7755]"
            >
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                autoComplete="off"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-base tracking-[0.3rem] font-bold text-[#4B7755] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email
              </span>
            </label>
            {touched.email && Boolean(errors.email) && (
              <span className="font-medium tracking-wide text-red-500 text-xs mt-1">
                {errors.email}
              </span>
            )}
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
                    <IoIosEye onClick={() => setShow(false)} className="text-2xl"/>
                  ) : (
                    <IoIosEyeOff onClick={() => setShow(true)} className="text-2xl" />
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
              className="w-[100%] font-pacifico bg-[#4B7755] hover:bg-[#AED1B2] text-white font-bold py-2 px-4 rounded-full mt-3"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
