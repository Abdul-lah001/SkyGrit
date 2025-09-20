import React, { useState } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Login attempt: ${(email, password)}`);
  };
  return (
    <div className="bg-amber-50 flex flex-row justify-between items-center p-10">
      <div className=" p-6 max-w-[386px] w-full h-[420px] flex flex-col gap-6 ml-20">
        {/* Logo div */}
        <div className=" py-9 w-[142px] h-[25px] flex justify-start items-center relative">
          <img src="/src/assets/SKYGRIT LOGO.svg" alt="logo" />
          <span className="absolute -right-4 top-[0]">
            <img
              className="w-[16px] h-[16px]"
              src="/src/assets/Icons/ph_trademark.svg"
              alt="Trademark"
            />
          </span>
        </div>

        {/* Form */}
        <form action="#" className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-[16px] text-[#8D8D8D]">
              Email
            </label>
            <input
              id="email"
              className="w-full h-[52px] border border-[#E8E8E8] rounded-[8px] px-3 text-[16px] text-[#202020] placeholder-[#8D8D8D] active:outline-none focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="text-[16px] text-[#8D8D8D]">
              Password
            </label>
            <span className="relative flex items-center">
              <input
                id="password"
                className="w-full h-[52px] border border-[#E8E8E8] rounded-[8px] px-3 text-[16px] text-[#202020] placeholder-[#8D8D8D] active:outline-none focus:outline-none"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <button
                type="button"
                className="cursor-pointer flex justify-center items-center"
                onClick={togglePassword}
              >
                <img
                  className="w-[24px] h-[24px] absolute right-3 cursor-pointer"
                  src="/src/assets/Icons/view.svg"
                  alt="view"
                />
              </button>
            </span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="w-[62px] h-[40px] bg-[#0D47A1] rounded-[12px] text-white text-[14px] font-[500] hover:bg-[#1565C0] transition"
              onClick={handleSubmit}
            >
              Log in
            </button>
            <p className="text-[14px] text-[#838383]">
              Forgot Password ?{" "}
              <span className="text-[#202020] cursor-pointer hover:underline">
                Reset
              </span>
            </p>
          </div>
        </form>
      </div>
      {/* Image */}
      <div className="w-[1000px] h-[900px]">
        <img
          className="w-[100%] h-[100%]"
          src="/src/assets/images/Frame.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Login;
