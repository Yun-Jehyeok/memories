import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logo } from "src/assets/commonStyle/styles";
import useInput from "../../hooks/useInput";
import { registerAction } from "../../redux/actions";
import {
  Button,
  Form,
  Input,
  Label,
  Header,
  LinkContainer,
  Wrap,
  Container,
} from "../Login/styles";

const Signup = () => {
  const [email, onChangeEmail] = useInput("");
  const [name, onChangeName] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newUser = { name, email, password };

      dispatch(registerAction(newUser));
    },
    [email, password]
  );

  return (
    <Wrap>
      <Logo />
      <Container>
        <Header>REGISTER</Header>
        <Form onSubmit={onSubmit}>
          <Label id="email-label">
            <div>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Input your email"
                value={email}
                onChange={onChangeEmail}
              />
            </div>
          </Label>
          <Label id="name-label">
            <div>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Input your name"
                value={name}
                onChange={onChangeName}
              />
            </div>
          </Label>
          <Label id="password-label">
            <div>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Input your password"
                value={password}
                onChange={onChangePassword}
              />
            </div>
          </Label>
          <Button type="submit">Sign up</Button>
          <LinkContainer>
            <div>or</div>
            <Link to="/login" style={{ color: "#4a154b" }}>
              Sign in
            </Link>
          </LinkContainer>
        </Form>
      </Container>
    </Wrap>
  );
};

export default Signup;
