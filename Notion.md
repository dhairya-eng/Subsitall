Perfect — let’s make your **Notion task board / workspace notes** for the **SubSync MVP**, ready to drop directly into your “MVP Sprint” page.
We’ll assume:

* You’re a **2-person founding team** (let’s call you *Dhairya* and *Teammate B*).
* Sprint length ≈ **3 weeks**, goal = functional browser-extension + dashboard MVP.

---

# 🧩 **SubSync MVP – Task Management (Notion Setup)**

## ⚙️ Overview

**Goal:** Build a privacy-first subscription tracker MVP that detects subscriptions via one Gmail account and supports manual “Add via extension” flow.
**Deliverables:**

* Chrome Extension (v1)
* FastAPI Backend + DB
* Next.js Dashboard (v1)
* AI Insights Module (lightweight)
* MVP Launch Checklist

---

## 📅 **Sprint Timeline**

| Week       | Focus                                   | Milestones                                      |
| ---------- | --------------------------------------- | ----------------------------------------------- |
| **Week 1** | Core backend + Gmail/extension plumbing | ✅ API, DB, Gmail connector working              |
| **Week 2** | Frontend + extension UI + integration   | ✅ Chrome extension posts → dashboard shows data |
| **Week 3** | AI insights + UX polish + testing       | ✅ Working MVP demo + deployment                 |

---

## 👥 **Team Split**

| Area                     | Owner          | Description                                      |
| ------------------------ | -------------- | ------------------------------------------------ |
| **Backend & Infra**      | **Dhairya**    | FastAPI + DB + Gmail parsing + API for extension |
| **Frontend & Extension** | **Teammate B** | Next.js Dashboard + Chrome Extension + UX polish |

---

## ✅ **Tasks by Category**

### 🧠 1. Product Definition  *(Both)*

* [ ] Finalize MVP scope (Gmail → Dashboard)
* [ ] Define user flow diagram
* [ ] Write 1-sentence product vision + tagline
* [ ] Draft Notion “Launch Checklist” page

---

### 🖥️ 2. Backend (Dhairya)

* [ ] Set up FastAPI project + environment
* [ ] Implement `/auth/google` OAuth flow
* [ ] Fetch Gmail messages using Gmail API
* [ ] Parse receipts → merchant + amount + date
* [ ] Design SQLAlchemy models (`User`, `Subscription`, `LinkedAccount`)
* [ ] Build `/add_subscription` endpoint for extension
* [ ] Add `/insights` route (LLM summary)
* [ ] Add cron/async task for renewal checks
* [ ] Write README + setup guide
* [ ] Deploy backend (Render / Railway / Vercel serverless)

---

### 🧩 3. Browser Extension (Teammate B)

* [ ] Create Chrome Manifest v3 structure
* [ ] Build `content.js` to detect merchant domains
* [ ] Build `popup.html/js` (Add to SubSync UI)
* [ ] Send POST requests to FastAPI endpoint
* [ ] Store JWT token in `chrome.storage.local`
* [ ] Add feedback toast + icon state change
* [ ] Implement “recheck” alarm (weekly)
* [ ] Test on Netflix, Spotify, Canva
* [ ] Prepare publish manifest for Chrome Web Store (beta)

---

### 🧭 4. Frontend / Dashboard (Teammate B)

* [ ] Create Next.js app + auth page
* [ ] Display subscription list (merchant, price, renewal)
* [ ] Add “Add Manual Subscription” modal
* [ ] Integrate AI insights section (fetch from `/insights`)
* [ ] Add sort / filter / delete options
* [ ] Polish UI (Tailwind + ShadCN)
* [ ] Connect to backend API
* [ ] Deploy to Vercel

---

### 🤖 5. AI Insights (Dhairya)

* [ ] Connect GPT-4 / Gemini API
* [ ] Generate monthly spend summary
* [ ] Suggest cancellations (“inactive for 60 days”)
* [ ] Format AI response → dashboard component
* [ ] Cache insights (per user per week)

---

### 🔒 6. Privacy & Security  *(Both)*

* [ ] Encrypt OAuth tokens (Fernet / KMS)
* [ ] Store only normalized data (no raw emails)
* [ ] Add user settings: Delete data / unlink account
* [ ] Write Privacy Policy draft

---

### 🧪 7. Testing & Launch

* [ ] Internal testing (2-3 friends)
* [ ] Gather feedback on accuracy & UX
* [ ] Fix false positives
* [ ] Create demo video / screenshots
* [ ] Publish MVP landing page (waitlist form)
* [ ] Post on LinkedIn + Reddit for feedback

---

## 📊 **Progress Board Columns (for Notion Kanban)**

**🧠 Backlog → 🚧 In Progress → 🧪 Testing → ✅ Done**

Tags:

* 🧩 Backend
* 🌐 Frontend
* 🔌 Extension
* 🤖 AI
* 🔒 Privacy
* 📦 Infra
* 🧪 Testing

---

## 🔔 **Meeting Rhythm**

* **Daily stand-up (15 min)** – quick sync on blockers
* **Weekly review** – demo progress, decide next sprint
* **Shared Notion page** – automatic progress tracking

---

### Example Task Entry (for Notion database)

| Task                                | Owner      | Status         | Priority  | Due Date | Tags         | Notes                 |
| ----------------------------------- | ---------- | -------------- | --------- | -------- | ------------ | --------------------- |
| Implement `/auth/google` OAuth flow | Dhairya    | 🚧 In Progress | 🔥 High   | Oct 18   | 🧩 Backend   | Use FastAPI Authlib   |
| Build extension popup UI            | Teammate B | 🧠 Backlog     | 🟢 Medium | Oct 19   | 🔌 Extension | Show merchant + price |
| AI spend summary endpoint           | Dhairya    | 🧠 Backlog     | 🔥 High   | Oct 24   | 🤖 AI        | Use GPT-4 API         |


Kanban Board
https://www.notion.so/affa933a6c4246e7b1251194a992a7c5?v=8ed7f351b387470d81fa8283bff29829&source=copy_link

---

### 🎯 **End-of-Sprint Goal**

> Working Chrome extension detects and adds subscriptions to dashboard → backend saves → AI generates summary → ready for demo.

---

Would you like me to convert this directly into a **Notion-importable table template (Markdown / CSV)** so you can paste it into your Notion board and auto-generate the tasks?
