import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { getData } from "../../store/userSlice";
import userService from "../../userService";

function Home() {
  const users = useSelector((state) => state.usersInfo);
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchUsers = async () => {
        try {
            const data = await userService.getAllUsers();
            dispatch(getData(data));
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    };

    if(users.length === 0){
        fetchUsers()
    }
  })

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-900 p-4 sm:p-6 ">
        <h1
          className=" text-center text-slate-300 text-xl   sm:text-3xl font-bold "
          style={{ textShadow: "2px 2px 2px gray" }}
        >
          User Management Application
        </h1>

        <Link
          to={"/create-user"}
          className="  sm:py-1 w-28 sm:w-40 text-center text-base sm:text-lg border bg-slate-400 rounded-lg font-semibold hover:border-black hover:bg-slate-300"
        >
          Create User
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-4 my-8 py-4">
        {users?.map((user) => (
          <Card key={user.id} id={user.id} name={user.name} />
        ))}
      </div>
    </>
  );
}

export default Home;
