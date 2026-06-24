# 🚀 AI Code Reviewer

An elegant, full-stack AI-powered code review platform that acts as an automated Senior Software Engineer (7+ years of experience). It analyzes, reviews, and refactors user-submitted code for quality, performance, security vulnerabilities, and scalability, returning structured, detailed code review feedback using a clean dark-themed interface.

🔗 **Live Demo:** [https://code-reviewer-1-n39t.onrender.com](https://code-reviewer-1-n39t.onrender.com)

---

## 🎨 Preview & User Interface

The platform is designed with a premium, dual-pane layout:
- **Left Pane:** A customizable code editor equipped with syntax highlighting (powered by `PrismJS`) and a prominent "Review" button.
- **Right Pane:** An interactive markdown-rendered preview panel that formats the AI's senior-level critique with detailed issue highlights, refactoring solutions, and explanation summaries.

---

## ✨ Features

- **Senior-Level Insights:** Tailored feedback focusing on code quality, design patterns (DRY, SOLID), performance bottlenecks, and security compliance (OWASP Top 10 like SQL Injection, XSS, CSRF).
- **Interactive Code Editor:** Embedded, lightweight code editor with live syntax highlighting using `react-simple-code-editor` and `Prism.js` (Tomorrow Dark Theme).
- **Rich Markdown Formatting:** AI responses rendered beautifully on-the-fly using `react-markdown` and syntax-highlighted code blocks with `rehype-highlight` (GitHub Dark Theme).
- **Real-Time Analysis Status:** Dynamic loading animations and progress indicators while the Gemini model is processing code.
- **Error Resiliency:** Automated error handling with user-friendly alerts when network connections or API boundaries fail.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/) (Fast & Lightweight Build Tool)
- **Code Editing:** `react-simple-code-editor` + `prismjs`
- **Markdown & Highlight:** `react-markdown` + `rehype-highlight` + `highlight.js`
- **HTTP Client:** `axios` for seamless backend communication

### Backend
- **Runtime & Framework:** [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **AI Integration:** [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) (utilizing Gemini models)
- **Database Client:** [Mongoose](https://mongoosejs.com/) (configured and ready for MongoDB connection)
- **Utilities:** `dotenv` (Environment Config), `cors` (Cross-Origin Sharing)

---

## 📁 Repository Structure

```directory
code_reviewer/
├── Backend/                 # Express API server interfacing with Gemini AI
│   ├── src/
│   │   ├── controllers/     # Route handlers (handles incoming code payload)
│   │   ├── routes/          # API endpoint routes (/ai/get-response)
│   │   ├── services/        # AI Service logic (Gemini API config & prompt instruction)
│   │   └── app.js           # Express app setup and middleware configuration
│   ├── server.js            # Node server listener (runs on port 3000)
│   ├── package.json         # Backend dependencies & npm scripts
│   └── .env                 # API keys & local environmental configs
│
├── Frontend/                # Vite + React User Interface
│   ├── src/
│   │   ├── App.jsx          # Main application component & states
│   │   ├── App.css          # Core layout & modern dark mode stylesheet
│   │   ├── index.css        # Base fonts & global resets
│   │   └── main.jsx         # App mounting point
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   └── package.json         # Frontend dependencies & npm scripts
│
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher recommended)
- A Google Gemini API Key. You can get one from the [Google AI Studio](https://aistudio.google.com/).

### 1. Set Up the Backend

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend/` folder and paste your Gemini API key:
   ```env
   API_KEY=your_gemini_api_key_here
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend server will run on `http://localhost:3000`.

### 2. Set Up the Frontend

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Vite development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local address displayed in your terminal (usually `http://localhost:5173`).

> [!NOTE]
> In `Frontend/src/App.jsx`, the frontend is pre-configured to query a live production server:
> `https://code-reviewer-1-n39t.onrender.com/ai/get-response`.
> To run and test against your local backend server, update the axios URL in [App.jsx](file:///c:/Users/DARSHAN%20WALHER/OneDrive/Desktop/code_reivew/Frontend/src/App.jsx#L30) to:
> `http://localhost:3000/ai/get-response`.

---

## 🤖 Gemini AI Prompt Design

The backend uses the `@google/generative-ai` SDK and is seeded with a detailed system instruction that outlines the persona, focus metrics, and output format for the AI:

### Persona & Focus Metrics:
1. **Code Quality:** Ensuring clean, maintainable, and well-structured code.
2. **Best Practices:** Recommending industry standards.
3. **Efficiency & Performance:** Optimizing complexity, resource usage, and loops.
4. **Error & Vulnerability Detection:** Identifying syntax errors, security flaws (XSS, Injection, CSRF), and edge-case exceptions.
5. **DRY & SOLID Principles:** Reducing duplication and recommending modular classes/functions.

### Expected Output Structure:
- **❌ Bad Code:** Showing the identified anti-patterns.
- **🔍 Issues:** Bullet points explaining the problems in detail.
- **✅ Recommended Fix:** Codeblock displaying refactored code.
- **💡 Improvements:** Summary highlighting exactly what was resolved and why.

---

## 🔮 Future Enhancements

- **Scoring System:** Incorporate an AI-evaluated score (e.g., Code Quality Score out of 100).
- **Targeted Review Modes:** Add modes for specific reviews: *Security Audit*, *Performance Optimization*, or *Enterprise Scaling*.
- **Authentication:** Add user authentication to save past review histories.
- **IDE Extensions:** Support for VS Code/Cursor extension integrations.

---

*Developed with ❤️ to empower developers to write cleaner, safer, and faster code.*
