import { createContext, useContext } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState()
  return <AuthContext.Provider {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAth must be used within AuthProvider");
}

export { AuthProvider, useAuth };
