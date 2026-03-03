# Chiacon AI Strategy & Automation Prototype

## 1. Project Overview
This project is an AI Webpage Prototype designed to demonstrate Chiacon’s enterprise AI consulting capabilities. It features a professional, corporate-grade landing page integrated with industry-specific use cases and a functional AI-powered strategy generator. The prototype utilizes a secure backend proxy to ensure enterprise-ready integration and credential protection.

## 2. Live Demo
- **Live Website Link**: [https://chiacon-aiprototype.vercel.app/](https://chiacon-aiprototype.vercel.app/)
- **Backend Deployment Link**: [https://chiacon-aiprototype.onrender.com](https://chiacon-aiprototype.onrender.com)

## 3. Features
- Enterprise AI capability presentation and methodology overview.
- Industry-specific AI use cases for FMCG, Oil & Gas, and Healthcare.
- AI-powered Business Strategy Generator providing real-time strategic insights.
- Structured JSON output rendering for actionable initiatives and business impact.
- Secure backend proxy (Node.js + Express) for credential isolation.
- Token-optimized OpenAI integration using the `gpt-4o-mini` model.
- Clean, responsive, and professional user interface.

## 4. Tech Stack
- **Frontend**: React 18, Vite, Vanilla CSS.
- **Backend**: Node.js, Express.
- **AI**: OpenAI API (`gpt-4o-mini`).
- **Endpoint**: Chat Completions API (`/v1/chat/completions`).
- **Deployment**: Vercel (Frontend), Render (Backend).

## 5. Architecture Overview
The application follows a secure decoupled architecture:

**React Frontend** → **Express Backend Proxy** → **OpenAI API** → **Structured JSON Response** → **Rendered UI**

The backend proxy is implemented to protect API keys from client-side exposure and to provide a controlled environment for validating input and processing AI responses before they reach the frontend.

## 6. AI Prompt Design
The core AI functionality is driven by a carefully designed instruction set:
- **Structured System Prompt**: Establishes a "Senior Enterprise AI Strategy Consultant" persona.
- **JSON Enforcement**: Uses the stable `v1/chat/completions` JSON mode to guarantee valid, parseable outputs.
- **Token Optimization**: Configured with strict output limits to ensure concise, high-value responses.
- **Enterprise Tone**: Specifically tuned to avoid generative hype and focus on realistic business outcomes.

## 7. How to Run Locally

### Repository Root (Frontend)
1.  Run `npm install` to install dependencies.
2.  Run `npm run dev` to start the Vite development server.

### Backend Directory
1.  Enter the directory: `cd backend`.
2.  Run `npm install`.
3.  Create a `.env` file and add: `OPENAI_API_KEY=your_actual_key_here`.
4.  Run `npm start` to start the Express server on port 3001.

## 8. Future Improvements
- **Multi-industry Intelligence**: Dynamic industry context injection based on deeper market data.
- **PDF Strategy Export**: Functionality to download the generated AI strategy as a formal consulting report.
- **Role-based Output**: Capability to tailor strategy insights for different stakeholders (C-level vs. Technical).
- **Enhanced Analytics Dashboard**: Tracking of common business problems and proposed solution trends.
- **Advanced Validation**: Context-aware input filtering to improve strategy relevance.

## 9. Evaluation Criteria Alignment
- **End-to-End Build**: Fully functional integration from user input to strategic output.
- **AI Integration**: Sophisticated use of the OpenAI API with persona-driven prompting.
- **Structured Output**: Reliable JSON parsing and professional UI rendering of AI data.
- **Clean UI**: High-standard typography, palette, and spacing reflecting enterprise consulting values.
- **Deployment Readiness**: Production-ready architecture with secure backend integration and live hosting.
