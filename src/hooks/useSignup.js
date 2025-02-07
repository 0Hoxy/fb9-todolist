import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import { auth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'AUTH_IS_READY', payload: res.user });  //리듀서 업데이트
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signup };
};