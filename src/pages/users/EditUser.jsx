import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { getSelectedUserObj } from "../../features/users/userAction";

const EditUser = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { form, handleChange, setForm } = useForm();
  const navigate = useNavigate();

  const { selectedUser } = useSelector((state) => state.userInfo);

  useEffect(() => {
    // console.log(_id,form._id)
    if (_id !== form?._id) {
      dispatch(getSelectedUserObj(_id));
      setForm(selectedUser);
      console.log(selectedUser);
    }
  }, [dispatch, _id, selectedUser, setForm, form]);

  return <UserLayout pageTitle={"Edit User"}></UserLayout>;
};

export default EditUser;
