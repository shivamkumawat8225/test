import React, { createContext, useContext, useEffect, useState } from "react";
// import { createContext } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const storedData = JSON.parse(localStorage.getItem("user_data"));

  async function check() {
    let d = new Date();
    d.setMinutes(d.getMinutes() + 20);
    // console.log(d);
    if (storedData) {
      // console.log("CurrntTime", Date.now());
      // console.log("expireTime", storedData);
      if (storedData.expireTime <= new Date()) {
        // localStorage.removeItem("user_data");
        return null;
      }
    }
  }
  useEffect(() => {
    check();
    if (storedData) {
      const { userToken, user } = storedData;

      setToken(userToken);
      setUserData(user);
      setAuthenticated(true);
    }
  }, []);
  setInterval(check, 60000);
  // Consider 60000 milliseconds = 1 minute

  const login = (newToken, newData) => {
    // console.log("hello");
    let expireTime = new Date();
    expireTime.setMinutes(expireTime.getMinutes() + 20);

    // console.log("expireTime", expireTime);
    localStorage.setItem(
      "user_data",
      JSON.stringify({
        userToken: newToken,
        user: newData,
        expireTime: expireTime,
      })
    );
    localStorage.setItem("level_type", "jila");

    setToken(newToken);
    setUserData(newData);
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("user_data");
    setToken(null);
    setUserData(null);
    setAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, login, logout, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
