import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { loginAction } from "../../redux/actions";

const Login = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const user = { email, password };

      dispatch(loginAction(user));
    },
    [email, password]
  );

  return (
    <div id="container">
      <form onSubmit={onSubmit}>
        <div>이메일 주소</div>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
        />
        <div>비밀번호</div>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChangePassword}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
