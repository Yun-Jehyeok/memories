import { LOGIN_REQUEST } from "./types";

type User = {
  email: string;
  password: string;
};

export const loginAction = (user: User) => ({
  type: LOGIN_REQUEST,
  payload: user,
});

export type LoginAction = ReturnType<typeof loginAction>;
