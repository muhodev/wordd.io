import { useState } from "react";
import { ModalContext } from "contexts";

const keys = {
  LOGIN_MODAL: "LOGIN_MODAL",
  REGISTER_MODAL: "REGISTER_MODAL",
};

export function ModalProvider(props) {
  const [state, setState] = useState({
    LOGIN_MODAL: false,
    REGISTER_MODAL: false,
  });

  const isOpenModal = (key) => {
    return !!state[key];
  };

  const toggleModal = (key, value) => {
    setState({ ...state, [key]: value || !state[key] });
  };

  return (
    <ModalContext.Provider value={{ state, isOpenModal, toggleModal, keys }}>
      {props.children}
    </ModalContext.Provider>
  );
}
