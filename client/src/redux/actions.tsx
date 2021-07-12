// 액션 생성 함수
import { LOGIN_REQUEST } from "./types";

export type User = {
  email: string;
  password: string;
  token?: any;
  data?: any;
  user?: any;
};

export const loginAction = (user: User) => ({
  type: LOGIN_REQUEST,
  payload: user,
});

export type LoginAction = ReturnType<typeof loginAction>;
