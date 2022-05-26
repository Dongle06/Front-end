import React from "react";

import { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useEffect } from "react";
import cookies from "react-cookies";

export default function(SpecificComponent, option, adminRoute = null) {
  // null => 아무나 출입 가능한 페이지
  // true => 로그인한 유저만 출입
  // false => 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      let cookie = cookies.load("jwt");
      if (cookie == undefined) {
        cookie = "";
      }

      let body = {
        jwt: cookie
      };

      dispatch(auth(body)).then(response => {
        //cookies.save(response.payload.email);
        //로그인하지 않은 상태
        if (response.payload.isAuth == "false") {
          if (option) {
            //props.history.push('/login');
            navigate("/login");
          }
        } else {
          if (!option) {
            navigate("/main");
          }
          cookies.save("email", response.payload.email, { path: "/" });
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
