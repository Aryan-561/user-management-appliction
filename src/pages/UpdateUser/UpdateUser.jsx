import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import userService from "../../userService";
import { updateUser } from "../../store/userSlice";
import { selectUserById } from "../../store/selector";

function UpdateUserDetails() {
  const { id } = useParams();

  const userData = useSelector((state) => selectUserById(state, id));
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
      setPhoneNo(userData.phone);
    }
  }, [userData]);

  const updateData = async (e) => {
    e.preventDefault();
    if (name != "" && email != "" && phoneNo != "") {
      const data = await userService.updateUser({
        id: id,
        name: name,
        userEmail: email,
        phoneNo: phoneNo,
      });

      if (data) {
        dispatch(updateUser(data));
      }
      navigate(`/user/${id}`);
    }
  };

  return (
    <>
      <Form
        name={name}
        email={email}
        phoneNo={phoneNo}
        onNameChange={(name) => setName(name)}
        onEmailChange={(email) => setEmail(email)}
        onPhoneNoChange={(phoneNo) => setPhoneNo(phoneNo)}
        type="Update"
        onSubmitData={updateData}
        heading="Update User Data"
        path={-1}
      />
    </>
  );
}

export default UpdateUserDetails;
