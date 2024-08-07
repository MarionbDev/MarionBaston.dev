let isAuthenticated = false;

// Ajouté dans auth.services.js
export const setIsAuthenticated = (value) => {
  isAuthenticated = value;
};

// Ajouté dans layout.jsx
export const getIsAuthenticated = () => {
  const token = localStorage.getItem("authToken");
  return isAuthenticated && !!token;
};
