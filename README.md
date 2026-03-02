
```md
# ⚡ Pipeline Builder – VectorShift Frontend Technical Assessment

This project is a full-stack visual pipeline builder that allows users to create node-based workflows, connect them, and validate whether the resulting pipeline forms a Directed Acyclic Graph (DAG).

The application includes:
- A React-based drag-and-drop workflow editor (React Flow)
- Reusable node abstraction architecture
- Dynamic variable parsing inside text nodes
- A FastAPI backend that validates pipeline structure (node count, edge count, DAG check)
- Full production deployment (Frontend on Vercel, Backend on Render)

---

## 🚀 Live Demo

- **Frontend (Vercel):**  
  https://pipeline-builder-one-iota.vercel.app

- **Backend API (Render):**  
  https://pipeline-builder-tw15.onrender.com/docs

---

## 🧠 Features Implemented

### 🔹 Part 1: Node Abstraction
Created a reusable `BaseNode` component to eliminate duplicated logic across nodes.

Supported nodes:
- Input Node
- Output Node
- Text Node
- LLM Node

Additional demo nodes to demonstrate flexibility:
- Math Node
- Condition Node
- API Node
- Filter Node
- Logger Node

This abstraction allows rapid creation of new nodes with shared layout and handle logic.

---

### 🎨 Part 2: Styling
Implemented a modern dark-themed UI resembling real workflow tools like Langflow or n8n:
- Gradient draggable node cards
- Styled canvas background grid
- Sidebar node palette
- Header + footer layout structure

---

### ✍️ Part 3: Text Node Logic
Enhanced TextNode with dynamic behavior:
- Auto-resizing textarea as text grows
- Detects variables inside `{{variable}}`
- Automatically generates input handles for each detected variable

Example:
```

Hello {{name}} from {{city}}

````
→ Creates input handles: `name`, `city`

---

### 🔗 Part 4: Backend Integration (FastAPI)
Implemented `/pipelines/parse` endpoint that:
- Counts total nodes
- Counts total edges
- Validates whether the graph is a DAG (no cycles)

Response format:
```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true
}
````

Frontend sends pipeline data and displays results in a user-friendly alert.

---

## 🏗️ Tech Stack

### Frontend

* React
* React Flow
* Zustand (state management)
* CSS-in-JS styling

### Backend

* FastAPI
* Python
* Graph validation using DFS (cycle detection)

### Deployment

* Frontend: Vercel
* Backend: Render

---

## 📐 Architecture Overview

```
User (Browser)
   ↓
React Flow UI (Vercel)
   ↓ POST /pipelines/parse
FastAPI Backend (Render)
   ↓
Graph DAG Validation Logic
   ↓
JSON Response → Displayed in UI
```

---

## 🛠️ Local Development Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/pipeline-builder.git
cd pipeline-builder
```

### 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Backend runs at: `http://localhost:8000`

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3000`

---

## 📡 API Endpoint

### POST `/pipelines/parse`

Validates pipeline structure.

**Request Body:**

```json
{
  "nodes": [...],
  "edges": [...]
}
```

**Response:**

```json
{
  "num_nodes": int,
  "num_edges": int,
  "is_dag": boolean
}
```

---

## 🧪 Example Workflow

1. Drag Input → Text → Output nodes
2. Connect edges
3. Enter text with variables: `Hello {{user}}`
4. Click **Submit Pipeline**
5. Backend validates DAG and returns results

---

## 🎯 Key Concepts Demonstrated

* Component abstraction for scalable node systems
* Dynamic parsing of variables using regex
* Graph theory (Directed Acyclic Graph validation)
* Full-stack integration (React ↔ FastAPI)
* Production deployment workflow (Vercel + Render)

---

## 👨‍💻 Author

**Devarshi Tambulkar**
Full-Stack Developer (React + Python)

---

## 📬 Submission Notes

This project fulfills all four parts of the VectorShift Frontend Technical Assessment:

1. Node abstraction
2. UI styling
3. Dynamic TextNode logic
4. Backend DAG validation with full integration

Feel free to reach out for any clarifications or walkthrough.

````
