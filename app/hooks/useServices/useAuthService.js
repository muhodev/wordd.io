import { useMutation } from "react-query";

import { login, register, checkAuth } from "services";

export const useLoginMutation = () => useMutation(login);

export const useRegisterMutation = () => useMutation(register);

export const useCheckAuthMutation = () => useMutation(checkAuth);
