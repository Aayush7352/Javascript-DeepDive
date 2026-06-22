<div align="center">
  <br/>
  <pre>
██╗ █████╗ ██╗   ██╗ █████╗ ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
██║██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
██║███████║██║   ██║███████║███████╗██║     ██████╔╝██║██████╔╝   ██║
██║██╔══██║╚██╗ ██╔╝██╔══██║╚════██║██║     ██╔══██╗██║██╔══██╗   ██║
██║██║  ██║ ╚████╔╝ ██║  ██║███████║╚██████╗██║  ██║██║██████╔╝   ██║
╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═════╝    ╚═╝
  </pre>
  <h1>JavaScript Mastery Roadmap</h1>
  <p><strong>From Zero to Production-Ready JavaScript Developer</strong></p>
  <p>230+ Topics · 17 Phases · Hands-On Projects · Interview Preparation</p>
  <br/>
</div>

---

## Overview

The **JavaScript Mastery Roadmap** is a comprehensive, project-based curriculum designed to take you from a complete beginner to an expert-level JavaScript developer. Spanning **230+ topics** across **17 structured phases**, this repository provides a deep-dive into every facet of JavaScript — from lexical scoping and closures to building your own Express-like framework, real-time dashboards, and production-grade SaaS backends.

Each topic includes hands-on code examples, exercises, detailed notes, and curated interview questions so you learn by building, not by watching.

---

## Why This Repo Exists

JavaScript is the world's most ubiquitous programming language, yet most learning resources fall into two traps: they're either too shallow (tutorials that skip the hard parts) or too scattered (blog posts with no coherent path). This roadmap bridges that gap with a single, opinionated, battle-tested progression that mirrors how senior engineers actually think about the language.

By the end, you won't just *know* JavaScript syntax — you'll understand the event loop, the prototype chain, memory management, async orchestration, design patterns, system design trade-offs, and how to build and ship full-stack applications.

---

## Prerequisites

| Requirement | Details |
|---|---|
| **Time Commitment** | ~6–12 months at a consistent pace |
| **Prior Knowledge** | Basic computer literacy; no prior programming required for Phase 01 |
| **Tools** | Node.js (v18+), a modern browser (Chrome/Firefox), a code editor (VS Code recommended) |
| **Mindset** | Write code every single topic. Type it out. Break it. Fix it. |

---

## The Roadmap

### Phase 01 — Fundamentals (20 topics)
The bedrock. Variables, data types, scoping rules, hoisting, closures, destructuring, and the spread operator. Every concept a beginner must internalize before moving forward.

> **Topics**: Hello World → Variables → Primitive & Reference Types → Operators → Type Conversion & Coercion → Truthy/Falsy → Template Literals → Strict Mode → Scope (Global/Block/Function) → Hoisting → TDZ → Equality → Optional Chaining → Nullish Coalescing → Destructuring → Spread Operator

### Phase 02 — Control Flow (15 topics)
Conditional logic, loops, pattern matching with `switch`, error handling with `try/catch/finally`, and iteration protocols.

### Phase 03 — Functions (15 topics)
Declaration vs expression, arrow functions, `this` binding, call/apply/bind, default & rest parameters, higher-order functions, pure functions, recursion, currying, and composition.

### Phase 04 — Objects & Prototypes (15 topics)
Object literal syntax, property descriptors, getters/setters, factory functions, constructors, the `new` keyword, `[[Prototype]]` chain, `Object.create`, `class` syntax, `instanceof`, mixins, and `Symbol`.

### Phase 05 — Arrays & Collections (15 topics)
Array methods (map, filter, reduce, find, every, some, flat, flatMap), typed arrays, `Set`, `Map`, `WeakSet`, `WeakMap`, and array-like objects.

### Phase 06 — Asynchronous JavaScript (20 topics)
Callbacks, callback hell, `Promise` (construction, chaining, static methods), `async`/`await`, `for await...of`, `Promise.allSettled`, `Promise.any`, abort signals, microtasks vs macrotasks, and the event loop in depth.

### Phase 07 — Browser & DOM (15 topics)
DOM tree, selecting & manipulating elements, events (capture, bubble, delegation), `IntersectionObserver`, `ResizeObserver`, `MutationObserver`, Shadow DOM, `documentFragment`, and the `window` object.

### Phase 08 — Modern ES6+ (15 topics)
`let`/`const`, modules (`import`/`export`), `class` fields & private members, `Array.from`, `Object.entries`/`values`, `flatMap`, optional chaining, nullish coalescing, logical assignment, top-level await, and `Promise.withResolvers`.

### Phase 09 — Node.js (15 topics)
The Node runtime, `process` object, file system (`fs`), streams & buffers, `path`, `os`, `child_process`, event emitters, `require` vs `import`, the module system, `npm`/`yarn`, and environment configuration.

### Phase 10 — Backend Development (15 topics)
HTTP servers, Express.js basics, middleware, routing, the request lifecycle, RESTful APIs, input validation, authentication (sessions, JWT), authorization, cookies, rate limiting, structured logging, error handling, and API versioning.

### Phase 11 — Testing (8 topics)
Unit testing, integration testing, Jest & Vitest, mocking & spies, snapshot testing, API testing with supertest, and end-to-end testing with Playwright.

### Phase 12 — Performance (10 topics)
Debouncing & throttling, lazy loading, code splitting, tree shaking, memory leak detection, garbage collection mechanics, the Performance API, profiling CPU/heap, and advanced optimization techniques.

### Phase 13 — Design Patterns (12 topics)
Module pattern, revealing module pattern, Singleton, Factory, Builder, Observer, Strategy, Adapter, Decorator, Command, Mediator, and Publish/Subscribe.

### Phase 14 — System Design (8 topics)
Cache layers, Redis integration, message queues, event-driven architecture, WebSocket architecture, API gateways, distributed sessions, and horizontal scaling strategies.

### Phase 15 — Build Your Own (12 topics)
Implement `Promise` from scratch, `EventEmitter`, `Function.prototype.bind`, `call`, `apply`, debounce, throttle, deep clone, custom `Array.prototype.map`/`Set`, virtual DOM, and a state manager.

### Phase 16 — Projects (10 topics)

| Project | Stack | Focus |
|---|---|---|
| Calculator | Vanilla JS | DOM manipulation, events |
| Weather App | Vanilla JS + Fetch API | Async data fetching, API integration |
| Todo App | Vanilla JS | CRUD, state management, persistence |
| Notes App | Vanilla JS | LocalStorage, search, markdown |
| Expense Tracker | Vanilla JS | Data visualization, filtering |
| Chat Application | Node.js + WebSocket | Real-time communication |
| Blog Backend | Express + MongoDB | REST API, database modeling |
| Auth System | Express + JWT/Sessions | Authentication, security |
| URL Shortener | Express + Redis | Key-value stores, redirects |
| Real-Time Dashboard | Express + Socket.IO | Live data streaming, UI updates |

### Phase 17 — Expert Projects (10 topics)

| Project | What You Build | Core Concepts |
|---|---|---|
| Build Express Clone | Your own minimalist web framework | Middleware pipeline, routing, Request/Response wrapping |
| Build React-like | Your own reactive UI library | Virtual DOM, reconciliation, Fiber-like scheduling |
| Build WebSocket Server | Raw WebSocket protocol implementation | Handshake, framing, masking, opcodes |
| Build GraphQL Server | Schema-based query engine | Type system, resolvers, execution, subscriptions |
| Build Job Queue | Distributed task queue | Producer/consumer, priority, retries, backpressure |
| Build Event Bus | Publish/subscribe event infrastructure | Topics, wildcards, delivery guarantees |
| Build API Gateway | Reverse proxy with routing | Load balancing, rate limiting, auth middleware |
| Build Reverse Proxy | Layer-7 proxy from scratch | Request forwarding, header rewriting, connection pooling |
| Build AI Chat Backend | LLM-powered chat service | Streaming, context management, token budgeting |
| Build SaaS Backend | Multi-tenant production backend | Tenant isolation, billing, webhooks, audit logging |

---

## How to Use This Repo

```
JavaScript/
├── Phase-01-Fundamentals/
│   ├── 001-hello-world/
│   │   ├── hello-world.js          # Code examples
│   │   ├── exercises.md            # Practice problems
│   │   ├── interview_questions.md  # Common interview questions
│   │   ├── notes.md                # Deep dives & observations
│   │   └── README.md               # Topic summary
│   ├── 002-variables/
│   └── ...
├── Phase-02-Control-Flow/
└── ...
```

1. **Go in order.** Phases build on each other. Skipping ahead without the foundation will hurt.
2. **For each topic:**
   - Read the `notes.md` for conceptual understanding.
   - Run the `.js` file to see the code in action: `node topic-file.js`
   - Complete the exercises in `exercises.md` — type the solutions, don't copy-paste.
   - Attempt the interview questions before looking at answers.
3. **Build the projects.** Phases 16–17 are where everything clicks. Don't skip them.
4. **Revisit.** Come back to earlier phases when you encounter a gap. The roadmap is a spiral, not a line.

---

## Project Highlights

Three projects that demonstrate the full arc of this curriculum:

**🔧 Phase 15 — Build Your Own Virtual DOM**  
You implement a virtual DOM engine similar to what powers React. You'll handle `createElement`, diffing reconciliation, and batched DOM updates — all in vanilla JavaScript.

**🏗️ Phase 16 — Real-Time Dashboard**  
A full-stack application with Express, Socket.IO, and chart visualizations. You'll handle WebSocket connections, event broadcasting, and live data streaming at scale.

**🚀 Phase 17 — Build a SaaS Backend**  
A production-grade multi-tenant backend with authentication, billing via Stripe, webhooks, audit logging, and tenant-isolated data stores. This project is the capstone that validates every skill learned across all 17 phases.

---

## Interview Preparation

Every topic folder includes `interview_questions.md` with curated questions ranging from "Explain closures" to "Design an event-driven microservices architecture." Use these alongside dedicated LeetCode practice for a complete interview prep strategy.

Key areas covered:
- **Core JS**: closures, `this`, event loop, promises, prototypal inheritance
- **System Design**: caching strategies, WebSocket architecture, horizontal scaling
- **Backend**: RESTful design, JWT security, SQL vs NoSQL trade-offs
- **Performance**: debounce/throttle, code splitting, memory profiling

---

## Repository Stats

| Stat | Count |
|---|---|
| **Total Topics** | 230+ |
| **Phases** | 17 |
| **Hands-On Projects** | 20 |
| **Design Patterns** | 12 |
| **System Design Modules** | 8 |
| **Testing Modules** | 8 |
| **"Build Your Own" Implementations** | 12 |

---

## Contributing

Contributions are what make the open-source community such an incredible place to learn, inspire, and grow. See [CONTRIBUTING](CONTRIBUTING.md) for guidelines.

If you find a bug, have a suggestion, or want to add a topic:
1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-addition`)
3. Commit your changes (`git commit -m 'feat: add amazing thing'`)
4. Push to the branch (`git push origin feat/amazing-addition`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes exercises, notes, and interview questions when adding new topics.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>
    <strong>JavaScript Mastery Roadmap</strong> — 2026 Edition
  </p>
  <p>
    Built with dedication. Maintained with ❤️ for the open-source community.
  </p>
</div>
