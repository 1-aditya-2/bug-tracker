# 🐞 Bug Tracker (Retro Glitch Edition)

A **full-stack bug tracking system** with a **retro-futuristic glitch UI**.  
Report, track, and manage bugs with a modern backend and a CRT-inspired frontend aesthetic.  

---

## 🏗️ Architecture

This app follows a **classic MERN architecture**:

```
Frontend (React + Vite + TailwindCSS)
        |
        | REST API calls (Axios)
        v
Backend (Node.js + Express)
        |
        | MongoDB Driver (Mongoose)
        v
Database (MongoDB Atlas / Local)
```

- **Frontend**:  
  - Built with **React (Vite)** for fast dev experience.  
  - Styled with **TailwindCSS** + custom glitch/CRT effects.  
  - Handles authentication, dashboard, bug management, filters & search.  

- **Backend**:  
  - **Express.js API** with JWT-based authentication.  
  - Provides endpoints for user registration, login, and bug CRUD.  
  - Middleware ensures role-based access (Admin vs Reporter).  

- **Database**:  
  - **MongoDB Atlas / Local MongoDB** for persistent bug and user data.  

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS 3, React Router, Axios  
- **Backend**: Node.js, Express.js, JWT, Bcrypt, Mongoose  
- **Database**: MongoDB (Atlas or local)  

---

## 📂 Folder Structure

```
bug-tracker/
├── backend/
│   ├── src/
│   │   ├── models/        # User, Bug models
│   │   ├── routes/        # Auth, Bug API routes
│   │   ├── middleware/    # Auth middleware (JWT, roles)
│   │   └── server.js      # Express app entry
│   └── package.json
│
├── frontend/ (glitch-themed React app)
│   ├── src/
│   │   ├── pages/         # Home, Login, Register, Dashboard
│   │   ├── lib/           # Axios API wrapper
│   │   ├── main.jsx       # Entry point with Router
│   │   └── index.css      # Tailwind + glitch effects
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

---

## 🚀 Features

- 🔑 **Authentication** (Register/Login with JWT)  
- 🐞 **Report bugs** with title, description, severity  
- 📊 **Dashboard** for listing bugs in a retro CRT table  
- 🔎 **Search & filters** (by status, severity, title)  
- 🛠️ **Admin role** can update bug statuses  
- 🎨 **Retro glitch UI** with scanlines, neon glow & animations  

---

## ⚡ Local Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/bug-tracker.git
cd bug-tracker
```

### 2️⃣ Setup backend
```bash
cd backend
npm install
# set environment variables in .env
MONGO_URI=mongodb://localhost:27017/bugtracker
JWT_SECRET=supersecret
npm run dev
```
Backend runs on **http://localhost:5000**  

### 3️⃣ Setup frontend (glitch UI)
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on **http://localhost:5173**  

---

## 👤 Admin User Creation

1. Register a new user with role `"admin"` via API:  
```bash
POST http://localhost:5000/api/auth/register
{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "admin123",
  "role": "admin"
}
```

2. Or run a seed script (`seedAdmin.js`) to auto-create admin.  

---

## 🔮 Future Improvements

- Add **comments/attachments** to bugs  
- **Email notifications** for status changes  
- **Dark/Light theme toggle**  
- Docker setup for one-command deployment  

---

## 📜 License

MIT License © 2025
