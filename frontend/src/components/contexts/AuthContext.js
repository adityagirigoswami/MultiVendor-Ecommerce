import { createContext, useState, useEffect } from "react";

// contexts/AuthContext.js

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("access"));
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const clearCart = () => setCartItems([]);

  useEffect(() => {
    const access = localStorage.getItem("access");
    const user = localStorage.getItem("username");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setIsLoggedIn(!!access);
    setUsername(user || "");
    setCartItems(cart);
  }, []);

  const login = (accessToken, username) => {
    localStorage.setItem("access", accessToken);
    localStorage.setItem("username", username);
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
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
        clearCart
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
