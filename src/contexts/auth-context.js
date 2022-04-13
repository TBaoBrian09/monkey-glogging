import { createContext, useContext, useState } from "react";
import React from "react";

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const values = { userInfo, setUserInfo };
  return (
    <AuthContext.Provider value={values} {...props}></AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAth must be used within AuthProvider");
}

export { AuthProvider, useAuth };
