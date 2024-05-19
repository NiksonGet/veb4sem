import { CONTACT_ROUTE, NEWS_ROUTE, ACCOUNT_ROUTE, SHOP_ROUTE } from "../../app/routing/config";
import { Link } from "react-router-dom";
import React, { createContext, useState, useContext } from "react";
import "../../style/style.css";

// Функция войти/выйти

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthButton: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <button className="btn" onClick={auth?.isAuthenticated ? auth?.logout : auth?.login}>
      {auth?.isAuthenticated ? "Выйти" : "Войти"}
    </button>
  );
};

const navbar = () => {
  return (
    <div className="navbar">
      <AuthProvider>
        <Link to={SHOP_ROUTE} className="routeLink">
          Каталог товаров
        </Link>
        <Link to={NEWS_ROUTE} className="routeLink">
          Новости
        </Link>
        <Link to={CONTACT_ROUTE} className="routeLink">
          Контакты
        </Link>
        <Link to={ACCOUNT_ROUTE} className="routeLink">
          Аккаунт
        </Link>
        <div className="blockStyle">
          <AuthButton />
        </div>
      </AuthProvider>
    </div>
  );
};
export default navbar;
