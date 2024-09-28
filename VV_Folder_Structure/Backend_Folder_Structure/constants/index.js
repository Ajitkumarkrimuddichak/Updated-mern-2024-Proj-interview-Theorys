// Define all constants in one place for easier management

// API endpoints
const API = {
  BASE_URL: "https://api.example.com",
  USERS: "/users",
  PRODUCTS: "/products",
};

// Error messages
const ERRORS = {
  USER_NOT_FOUND: "User not found",
  INVALID_INPUT: "Invalid input data",
  SERVER_ERROR: "An unexpected error occurred",
};

// Application settings
const SETTINGS = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI || "mongodb://localhost:27017/myapp",
};

module.exports = {
  API,
  ERRORS,
  SETTINGS,
};
