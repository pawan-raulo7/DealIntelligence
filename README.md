# DealMemory AI

> **Your sales team's memory, powered by AI.**

DealMemory AI is an AI Sales Agent that remembers the full history of customer interactions across meetings, emails, CRM notes, objections, pricing discussions, and competitor mentions. It turns fragmented deal context into actionable intelligence: briefing salespeople in seconds before calls, identifying hidden deal risks, and recommending what to do next based on company-wide winning patterns.

---

## 🚀 Quick Start

Ensure you have Node.js (v18+) installed.

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build
```

---

## ⚡ The Core Problem

Salespeople talk to customers dozens of times over long deal cycles. Critical deal context gets buried across:
- Meeting recordings & transcriptions
- Email threads & procurement follow-ups
- CRM notes & manual updates
- Pricing negotiations & discount objections
- Competitor mentions & feature comparisons
- Stakeholder changes (e.g. CFO, CTO involvement)

Before every call, reps waste hours manually digging through past emails and notes. DealMemory AI solves this by keeping a **persistent long-term memory** for every customer deal.

---

## ✨ Key Features

1. **AI Deal Risk Scoring (0–100)**: Real-time risk detection based on timeline slips, missing budget confirmations, and competitor evaluation threats.
2. **Deal Memory Timeline**: Visual chronological stream of past calls, emails, pricing discussions, and stakeholder interactions with instant AI takeaways.
3. **AI Pre-Call Brief**: 3-second structured briefing generated before meetings:
   - What happened
   - What changed
   - Who matters (Key decision maker focus)
   - What they care about
   - What to avoid (e.g. "Do not lead with an immediate discount")
   - Recommended approach
4. **Similar Deals Intelligence**: Pattern matching against historical company deals to reveal what worked with similar objections and CFO concerns.
5. **Ask DealMemory AI Chat**: Natural language Q&A over deal memory with citations (`"Based on 3 previous deals"`).
6. **Company Sales Memory**: Company-wide aggregation of objection patterns, competitor battlecards, and buyer persona playbooks.
7. **Simulate New Memory (+ Add Interaction)**: Real-time memory update modal to add new notes and re-compute AI risk scores.

---

## 🔮 Future Improvements

- **Salesforce & HubSpot Integrations**: Automatic two-way sync for deal stages and tasks.
- **Gmail & Outlook Integration**: Automated email thread ingestion & sentiment parsing.
- **Zoom & Google Meet Live Transcription**: Real-time call parsing & post-meeting memory logging.
- **Production LLM Integration**: OpenAI GPT-4o / Anthropic Claude / Gemini API connectors with RAG vector search.
- **Vector Database**: Pinecone / Qdrant for semantic deal embeddings across millions of historical interactions.
- **Automated CRM Updates**: Zero manual data entry for sales reps.

---

## 🛡️ License

MIT License. Designed for high-impact sales intelligence demonstrations.
