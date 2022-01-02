import { useMutation } from "react-query";

import { login, register } from "services";

export const useLoginMutation = () => useMutation(login);

export const useRegisterMutation = () => useMutation(register);
