Indian Food Recipe Finder

This project allows users to search, filter, and explore Indian dishes based on ingredients, cooking time, region, and more. It is divided into two parts:

Frontend → Next.js (App Router, TailwindCSS, Axios)
Backend → Node.js + Express.js (REST API, JSON data from CSV)

project-root/
┣ 📂 frontend # Next.js App
┣ 📂 backend # Node.js + Express server
┗ 📜 README.md

⚡ Backend Setup (Node.js + Express)
1️⃣ Navigate to backend folder
cd backend
2️⃣ Install dependencies
npm install
3️⃣ Start backend server
npm run dev
The backend will run on http://localhost:4000

(or as configured).
⚡ Frontend Setup (Next.js)
1️⃣ Navigate to frontend folder
cd frontend
2️⃣ Install dependencies
npm install
3️⃣ Start frontend
npm run dev
The frontend will run on http://localhost:3000
by default.

Features

🔍 Search dishes by name, ingredient, state, or region
🥘 Suggest dishes based on available ingredients
📑 Paginated dish list with sorting (Name, Prep Time, Cook Time)
📄 Dish details page
⌨️ Debounced search with auto-suggestions
🎨 Responsive UI with Tailwind



