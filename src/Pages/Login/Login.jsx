import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn, googleSignIn } = useContext(AuthContext);

  const handleLogin = (data) => {
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setLoginError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:w-[385px]  mx-auto lg:mt-10 p-7 shadow-lg">
      <h2 className="text-center text-xl mb-9">Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label className="text-sm pl-1 font-semibold">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please enter a valid email address",
            },
          })}
          className="input input-bordered w-full mb-3"
        />
        {errors.email && (
          <p className="text-red-600 font-semibold pl-1 text-sm -mt-2 mb-3">
            {errors.email?.message}
          </p>
        )}
        <label className="text-sm pl-1 font-semibold">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password required",
            minLength: {
              value: 8,
              message: "Password must be  8 charecters or longer",
            },
            pattern: {
              value:
                /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
              message: "Password Should Be Strong",
            },
          })}
          className="input input-bordered w-full "
        />
        {errors.password && (
          <p className="text-red-600 font-semibold pl-1 mt-1 text-sm mb-3">
            {errors.password?.message}
          </p>
        )}
        <label className="text-xs pl-1 leading-[14px]">Forget Password?</label>
        <p>{loginError}</p>
        <button
          type="submit"
          className="w-full py-3 bg-accent text-white mt-5 uppercase rounded-md mb-2"
        >
          Login
        </button>
        <p className="text-center">
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-secondary">
            Create new account
          </Link>
        </p>
        <div className="divider mt-5">OR</div>
      </form>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 border-2 border-accent text-accent rounded-md mt-2"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
