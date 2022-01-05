import { useContext } from "react";
import { AuthContext } from "contexts";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider component");
  }

  const {
    user,
    isLoggedIn,
    token,
    mounted,
    loginMutation,
    login,
    register,
    registerMutation,
    checkAuth,
    checkAuthMutation,
  } = context;

  return {
    user,
    isLoggedIn,
    token,
    mounted,
    loginMutation,
    login,
    register,
    registerMutation,
    checkAuth,
    checkAuthMutation,
  };
}
