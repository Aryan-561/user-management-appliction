import React, { useState } from "react";
import { useDispatch } from "react-redux";
import userService from "../../userService";
import { createUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
function CreateNewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateUser = async (e) => {
    e.preventDefault();
    if (name != "" && email != "" && phoneNo != "") {
      const data = await userService.createUser({ name, email, phoneNo });

      if (data) {
        console.log(data);
        dispatch(createUser(data));
        navigate(`/users`);
      }
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
        onPhoneNoChange={(phone) => setPhoneNo(phone)}
        onSubmitData={onCreateUser}
        type="Create"
        heading="Create New User"
      />
    </>
  );
}

export default CreateNewUser;
