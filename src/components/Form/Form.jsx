import React from "react";
import { Link } from "react-router-dom";
function Form({
  name = "",
  onNameChange,
  email = "",
  onEmailChange,
  phoneNo,
  onPhoneNoChange,
  onSubmitData,
  type = "create user",
  heading,
  path = "/users",
}) {
  return (
    <>
      <div className="flex justify-around my-4 sm:my-6 ">
        <Link
          to={path}
          className="bg-slate-600 text-slate-300 text-sm sm:text-lg font-semibold rounded-lg px-3 py-1 hover:bg-slate-400 hover:text-slate-900 hover:border border-black sm:absolute left-12"
        >
          Back
        </Link>

        <h1
          className="text-center  text-slate-300  text-2xl sm:text-3xl font-bold "
          style={{ textShadow: "2px 2px 1px black" }}
        >
          {heading}
        </h1>
      </div>

      <form onSubmit={onSubmitData}>
        <div className="w-[90%] sm:w-[60%] mx-auto  p-4 flex flex-col">
          <div className="flex flex-col p-3 sm:p-4 rounded-lg gap-2 my-2 text-sm sm:text-lg bg-slate-700 text-slate-300">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              className=" rounded-md appearance-none outline-none bg-slate-400 text-slate-900 font-semibold p-2 pl-4 focus:bg-slate-300 focus:ring-2  placeholder:text-gray-700"
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="flex flex-col p-3 sm:p-4 rounded-lg gap-2 my-2 text-sm sm:text-lg bg-slate-700 text-slate-300">
            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              value={email}
              name="user_email"
              id="user-email"
              className=" rounded-md appearance-none outline-none bg-slate-400 text-slate-900 font-semibold p-2 pl-4 focus:bg-slate-300 focus:ring-2  placeholder:text-gray-700"
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="Email ID"
              required
            />
          </div>

          <div className="flex flex-col p-3 sm:p-4 rounded-lg gap-2 my-2  text-sm sm:text-lg bg-slate-700 text-slate-300">
            <label htmlFor="user-phoneNo">Phone No</label>
            <input
              type="text"
              value={phoneNo}
              name="user_phoneNo"
              id="user-phoneNo"
              className=" rounded-md appearance-none outline-none bg-slate-400 text-slate-900 font-semibold p-2 pl-4 focus:bg-slate-300 focus:ring-2 placeholder:text-gray-700"
              onChange={(e) => onPhoneNoChange(e.target.value)}
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="flex justify-center my-2">
            <button
              className="bg-slate-700 text-slate-300 sm:text-lg font-semibold rounded-lg px-3 py-1 hover:bg-slate-400 hover:text-slate-900 hover:border border-black"
              type="submit"
            >
              {type}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
