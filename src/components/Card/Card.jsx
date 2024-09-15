import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/user_default_img.png";

function Card({ id, name = "xyz", className = "" }) {
  return (
    <>
      <div
        className={` w-60 flex flex-col gap-2  py-4 bg-slate-300 rounded-xl place-items-center font-semibold  ${className} `}
      >
        <div>
          <img
            src={defaultImg}
            alt="default_img"
            className="rounded-full w-28"
          />
        </div>
        <div>{name}</div>

        <Link to={`/user/${id}`}>
          <div className="py-1 px-2 bg-gray-400 rounded-xl border-black border-2 hover:border-4 duration-150 cursor-pointer ">
            view details
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
