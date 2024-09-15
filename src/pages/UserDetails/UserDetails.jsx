import React from "react";
import defaultImg from "../../assets/user_default_img.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserById } from "../../store/selector";
import userService from "../../userService";
import { deleteUser } from "../../store/userSlice";

function UserDetails() {
  const { id } = useParams();

  const userData = useSelector((state) => selectUserById(state, id));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelBtn = (e) => {
    e.preventDefault();
    const isDeleted = userService.deleteUser(id);
    if (isDeleted) {
      dispatch(deleteUser(id));
      navigate("/users");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center text-sm sm:text-base">
      <div className="absolute top-0 left-0 translate-x-4 translate-y-4">
        <Link
          to={`/users`}
          className="bg-slate-600 text-slate-300 sm:text-lg font-semibold rounded-lg px-3 py-1 hover:bg-slate-400 hover:text-slate-900 hover:border border-black"
        >
          Back
        </Link>
      </div>
      <div className="w-[90%] sm:w-[60%] border rounded-xl py-4 mx-auto    flex flex-col place-items-center gap-4">
        <div>
          <img
            src={defaultImg}
            alt="user_default_img"
            className="w-24 sm:w-40 rounded-full"
          />
        </div>
        <div className="flex gap-4 justify-center">
          <div>Name :</div>
          <div className="font-semibold">{userData?.name}</div>
        </div>
        <div className="flex gap-4 justify-center">
          <div>Email-ID :</div>
          <div className="font-semibold">{userData?.email}</div>
        </div>

        <div className="flex gap-4 justify-center">
          <div>Phone NO. :</div>
          <div className="font-semibold">{userData?.phone}</div>
        </div>
        <div className="flex gap-4 justify-center">
          <Link to={`/user/update/${id}`}>
            <div className="py-1 px-2 bg-gray-400 rounded-xl border-black border-2 hover:border-4 duration-150 cursor-pointer">
              Update Details
            </div>
          </Link>

          <button onClick={handleDelBtn}>
            <div className="py-1 px-2 bg-gray-400 rounded-xl border-black border-2 hover:border-4 duration-150 cursor-pointer">
              Delete Account
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
