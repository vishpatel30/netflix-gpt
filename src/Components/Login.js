import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const [errorMessage,setErrorMessage]=useState("");
  const handleSignupClick = () => {
    setSignInForm(!isSignInForm);
  };
  const handleButtonClick=()=>{
    //validate
    const validate = checkValidData(email.current.value,password.current.value);
    setErrorMessage(validate);
  }
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        />
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="text-white font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            type="text"
            ref={name}
            placeholder="fullname"
            className="p-4 my-2 w-full bg-gray-700"
          />
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="email"
          ref={email}
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        {errorMessage ?<p className="text-red-500">{errorMessage}</p>:""}
        <button className="p-2 my-4 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSignupClick}>
          {isSignInForm
            ? "Are you new to netflix Signup now"
            : "Already registered signin now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
