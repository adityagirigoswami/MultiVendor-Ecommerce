import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("access"));
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);

  const clearCart = () => setCartItems([]);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("access"));
    setUsername(localStorage.getItem("username") || "");
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const login = (access, username) => {
    localStorage.setItem("access", access);
    setIsLoggedIn(true);
    setUsername(username);
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUsername("");
    setCartItems([]);
  };

  const addToCart = (product) => {
    const updated = [...cartItems, product];
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeFromCart = (productId) => {
    const updated = cartItems.filter((item) => item.id !== productId);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // 🆕 Add refreshAccessToken
  const refreshAccessToken = async () => {
    try {
      const refresh = localStorage.getItem("refresh");
      if (!refresh) throw new Error("No refresh token");

      const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh }),
      });

      if (!response.ok) throw new Error("Refresh failed");

      const data = await response.json();
      localStorage.setItem("access", data.access);
      setIsLoggedIn(true);
      return data.access;
    } catch (err) {
      logout();
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        username,
        login,
        logout,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        refreshAccessToken, // ✅ Provide to children
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
