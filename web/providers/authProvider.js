import { useState } from "react";
import { AuthContext } from "contexts";

export const AuthProvider = (props) => {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: null,
    token: null,
  });

  return (
    <AuthContext.Provider value={{ state }}>
      {props.children}
    </AuthContext.Provider>
  );
};
