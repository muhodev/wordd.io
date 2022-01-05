import { useEffect, useState } from "react";

import { AuthContext } from "contexts";
import {
  useLoginMutation,
  useRegisterMutation,
  useCheckAuthMutation,
} from "hooks";

const initialValues = {
  isLoggedIn: false,
  user: null,
  token: null,
  mounted: false,
};

export const AuthProvider = (props) => {
  const loginMutation = useLoginMutation();
  const registerMutation = useRegisterMutation();
  const checkAuthMutation = useCheckAuthMutation();

  const [state, setState] = useState(initialValues);

  const login = ({ email, password }, { onSuccess = () => {} }) => {
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (response) => {
          setState({
            user: response?.result?.user,
            token: response?.result?.token,
            isLoggedIn: true,
            mounted: true,
          });
          if (onSuccess && typeof onSuccess === "function") {
            onSuccess();
          }
        },
        onError: (error) => {
          console.log("Login error", error?.response?.data, error?.message);
        },
      }
    );
  };

  const register = ({ name, email, password }, { onSuccess = () => {} }) => {
    registerMutation.mutate(
      { name, email, password, passwordConfirm: password },
      {
        onSuccess: (response) => {
          console.log("Register Succcesss", response);
          setState({
            user: response?.result?.user,
            token: response?.result?.token,
            isLoggedIn: true,
            mounted: true,
          });
          if (onSuccess && typeof onSuccess === "function") {
            onSuccess();
          }
        },
        onError: (error) => {
          console.log("Register error", error?.response?.data, error?.message);
          setState({ ...initialValues, mounted: true });
        },
      }
    );
  };

  useEffect(() => {
    console.log("Çalıştı");
    checkAuthMutation.mutate(null, {
      onSuccess: (response) => {
        console.log("check auth response", response);
        setState({
          user: response?.result?.user,
          token: response?.result?.token,
          isLoggedIn: true,
          mounted: true,
        });
      },
      onError: (error) => {
        console.log("check auth error", error?.response?.data, error?.message);
        setState({ ...initialValues, mounted: true });
      },
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginMutation,
        registerMutation,
        checkAuthMutation,
        login,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
