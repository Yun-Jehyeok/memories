import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logo } from 'src/assets/commonStyle/styles';
import useInput from '../../hooks/useInput';
import { loginAction } from '../../redux/actions';
import { useSelector } from 'react-redux';
import {
  Button,
  Container,
  Form,
  Header,
  Input,
  Label,
  LinkContainer,
  Wrap,
} from './styles';

const Login = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const user = { email, password };

      dispatch(loginAction(user));
    },
    [email, password],
  );

  return (
    <Wrap>
      <Logo />
      <Container>
        <Header style={{ paddingTop: '100px' }}>LOGIN</Header>
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
          <Button type="submit">Sign in</Button>
          <LinkContainer>
            <div>or</div>
            <Link to="/signup" style={{ color: '#4a154b' }}>
              Register now
            </Link>
          </LinkContainer>
        </Form>
      </Container>
    </Wrap>
  );
};

export default Login;
