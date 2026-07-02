import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );

  const login = (userData) => {
    localStorage.setItem(
      "loggedUser",
      JSON.stringify(userData)
    );
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;