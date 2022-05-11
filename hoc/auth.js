import React from "react";
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useEffect } from "react";

export default function(SpecificComponent, option, adminRoute = null) {
  // null => 아무나 출입 가능한 페이지
  // true => 로그인한 유저만 출입
  // false => 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then(response => {
        console.log(response);

        //로그인하지 않은 상태
        if (response.payload.isAuth == "false") {
          if (option) {
            //props.history.push('/login');
            navigate("/login");
          }
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            //props.history.push('/main');
            navigate("/main");
          } else {
            //props.history.push('/main');
            navigate("/main");
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
