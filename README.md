# 🎬 Movie Auth Backend

This is the backend authentication system for the **Movie Auth App**, built with **Express**, **TypeScript**, and **MongoDB**.

---

## ✨ Features

- ✅ User Registration (`/api/auth/register`)
- ✅ User Login (`/api/auth/login`)
- 🔐 Password Hashing with `bcrypt`
- 🔑 JWT-based Authentication
- 🗂 MongoDB Integration with `mongoose`
- 📦 Modular project structure using Routes, Controllers, and Models

---

## 🗂 Folder Structure

movie-auth-backend/
├── controllers/ # Business logic (register, login)
├── models/ # User schema/model
├── routes/ # API endpoints
├── middleware.ts # JWT auth middleware
├── server.ts # Main Express server
├── .env # Environment variables (e.g., Mongo URI)
├── tsconfig.json # TypeScript config
├── package.json # Project metadata and dependencies
└── .gitignore # Excludes node_modules, etc.

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB (or use MongoDB Atlas)

### Install Dependencies


npm install
Server runs at: http://localhost:5000

🔐 Sample API Usage
✅ Register
POST /api/auth/register
{
  "username": "yusranetflix",
  "email": "yusra@example.com",
  "password": "123456",
  "fullName": "Yusra Shakeel",
  "profilePicture": "https://i.imgur.com/defaultAvatar.png"
}
🔑 Login
POST /api/auth/login
{
  "email": "yusra@example.com",
  "password": "123456"
}
Returns a JWT token.

🔒 Protected Route
GET /api/auth/profile
Add this token in headers:
Authorization: Bearer <your_token_here>

🧑‍💻 Made by Yusra Shakeel – 2025 Internship Project

