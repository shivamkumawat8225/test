import React, { useState } from "react";
import { message } from "antd";
import { useAuth } from "../contexts/AuthContext.jsx";
import API from "../api.js";
const useLogin = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setdata] = useState([]);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      console.log(values);
      const objdata = {
        email: values.email,
        password: values.password,
      };

      // const res = await fetch("http://localhost:3001/api/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(values),
      // });

      const res1 = await API.post(`auth/login`, objdata, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res);
        // console.log(res.data);
        setdata(res);
        if (data.status === 201) {
          // console.log(data.data.user);
          message.success(res.data.message);
          login(res.data.token, data.data.user);
        } else if (res.status === 200) {
          message.success(res.data.message);
          login(res.token, data.data.emailuser);
        } else if (res.data.status === "success") {
          message.success(res.data.message);
          login(res.token, data.data.emailuser);
        } else if (res.status === 404) {
          setError(res.data.message);
        } else if (res.status === 401) {
          setError(res.data.message);
        } else {
          message.error("Login Fails");
        }
      });
      // console.log(data);
      // console.log(res);
    } catch (error) {
      message.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;
