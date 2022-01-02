import { Api } from "@utils";

const scope = "/auth";

export const login = async ({ email, password }) => {
  const res = await Api.post(`${scope}/login`, { email, password });

  return res?.data;
};

export const register = async ({
  name,
  username,
  email,
  password,
  passwordConfirm,
}) => {
  const res = await Api.post(`${scope}/register`, {
    name,
    username,
    email,
    password,
    passwordConfirm,
  });

  return res?.data;
};
