# Real-Time Code Interview Platform (CodeMeet)

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Inngest](https://img.shields.io/badge/Inngest-000000?style=for-the-badge)
![Stream](https://img.shields.io/badge/Stream-005FFF?style=for-the-badge&logo=stream&logoColor=white)
![Judge0](https://img.shields.io/badge/Judge0-FF6C37?style=for-the-badge)

A full-stack **real-time code interview platform** for conducting **one-on-one technical interviews** with integrated **video calling, chat, and code execution**.

---

## Live Demo

[View Live Demo](https://realtime-code-interview-platform.onrender.com)

> ⚠️ **Note:**  
> Hosted on Render (free tier). Initial load may take **30–60 seconds** to start.

---

## Tech Stack

### Frontend

- React  
- Tailwind CSS + DaisyUI  
- TanStack Query  
- Clerk (authentication UI + session handling)  
- Stream Video + Chat (client-side SDK)  
- Monaco Editor  

### Backend

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Clerk (authentication, user management, and webhooks)
- Stream SDK (server-side)  
- Inngest  

---

## Services

- **Judge0** – runs user code and returns output/errors  
- **Clerk** – authentication and user management
- **Stream** – video calling and in-session chat  
- **Inngest** – background jobs for syncing users with Stream and MongoDB, and cleanup on deletion  

---

## Features

### Authentication

- Clerk-based authentication  
- User creation and deletion via webhooks  
- Background synchronization handled by Inngest  

---

### Dashboard

- Active sessions  
- Live sessions  
- Recent sessions  
- Total sessions  

---

### Session System

- Create and join interview sessions  
- One-on-one session model  
- Host-controlled session lifecycle  

---

### Problems

- Curated set of 150 coding problems  
- Solve without creating a session  
- Includes descriptions, examples, and constraints  

---

### Real-Time Communication

- One-on-one video calls  
- Audio and camera controls
- Real-time messaging  
- Supports text, images, and GIFs via `/giphy`  
- Screen sharing  
- Reactions  

---

### Coding Environment

- Monaco Editor  
- Supports JavaScript, Python, Java, C++, C, and C#  
- Code execution powered by Judge0  
- Output and error display

---

## Project Structure

```
realtime-code-interview-platform/
│
├── backend/
│   └── src/
│       ├── controllers/
│       ├── lib/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── server.js
│
├── frontend/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── data/
│       ├── hooks/
│       ├── lib/
│       └── pages/
│
├── screenshots/
└── package.json
```

---

## Environment Variables

Create a `.env` file in each project root:

---

### Backend
- `backend/.env` (beside `src`)

```
PORT=your_port
DB_URL=your_mongodb_connection_string
NODE_ENV=development_or_production

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLIENT_URL=your_frontend_url
```

---

### Frontend
- `frontend/.env` (beside `src`)

```
VITE_API_URL=your_backend_url/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/mabhishek-dev/realtime-code-interview-platform.git
cd realtime-code-interview-platform
```

---

### 2. Install dependencies

```bash
cd backend
npm install
```

```bash
cd ../frontend
npm install
```

---

### 3. Run the application

Open two terminals:

**Backend**
```bash
cd backend
npm run dev
```

**Frontend**
```bash
cd frontend
npm run dev
```

---

## Screenshots

### Home Page
![Home](screenshots/home-page.png)

### Login / Signup Page
![Login](screenshots/login-signup-page.png)

### Dashboard Page
![Dashboard](screenshots/dashboard-page.png)

### Problems Page
![Problems](screenshots/problems-page.png)

### Problem Page
![Problem](screenshots/problem-page.png)

### Session Page
![Session](screenshots/session-page.png)

### Session Page with Chat
![Session Chat](screenshots/session-page-with-chat.png)

---

## License

This project is licensed under the **MIT License**.
