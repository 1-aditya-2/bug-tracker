# 🐞 Bug Tracker (Retro Glitch Edition)

A **full-stack bug tracking system** with a **retro-futuristic glitch UI**.  
Report, track, and manage bugs with a modern backend and a CRT-inspired frontend aesthetic.

---
## 🌐 Deployment Link

- Frontend Main (Render): `https://bug-tracker-1-22qf.onrender.com/`  
- Backend API (Render): `https://bug-tracker-u9er.onrender.com`  

---
## 📊 Screenshots

<img width="1913" height="953" alt="image" src="https://github.com/user-attachments/assets/d0fb42f3-5552-453f-b3de-bca60acf6d9a" />

<img width="1897" height="952" alt="image" src="https://github.com/user-attachments/assets/0dda8b0c-513f-490d-b491-4799143fa2f2" />

## ⚡ Setup Instructions

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

- **Frontend**: React (Vite), TailwindCSS, React Router, Axios  
- **Backend**: Node.js, Express.js, JWT, Bcrypt, Mongoose  
- **Database**: MongoDB (Atlas or Local)  

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

## 🗄️ Database Schema Diagram

### **User**
```
User {
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String ("admin" | "reporter")
}
```

### **Bug**
```
Bug {
  _id: ObjectId,
  title: String,
  description: String,
  severity: String ("Low" | "Medium" | "High"),
  status: String ("Open" | "In Progress" | "Closed"),
  reporter: ObjectId (ref User),
  createdAt: Date,
  updatedAt: Date
}
```

(Relationship: **One User → Many Bugs**)  

---

## 📖 How to Use the Application

1. **Register/Login** at the frontend deployment link.  
2. **Dashboard** → Create, view, and filter bugs.  
3. **Admin users** → Can update bug statuses.  
4. **Logout** → End session securely.  

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
2. Or run a seed script (`seedAdmin.js`).  

---

## 🤖 Notes on AI Usage

This project was developed with assistance from **AI (ChatGPT)** for:  
- Generating boilerplate code (React components, Express routes).  
- Styling with TailwindCSS (including retro effects).  
- Writing documentation (README file).  

All AI-generated code was **reviewed, modified, and tested manually** to ensure correctness and project-specific customization.  

---

## 🔮 Future Improvements

- Add **comments/attachments** to bugs  
- **Email notifications** for status changes  
- **Dark/Light theme toggle**  
- Docker setup for one-command deployment  

---
