# Design Document for Myanmar Open – Antigravity Golf Championship

> [!NOTE] This design document is derived from the **Myanmar Open Antigravity Golf Development Guide** and expands it into a structured architectural overview for developers, designers, and stakeholders.

---

## 1. Purpose & Scope
- Provide a high‑level description of the web application architecture.
- Detail UI component hierarchy, state management, and data flow.
- Outline the physics engine, audio subsystem, and visual design system.
- Serve as a reference for implementing new features or onboarding contributors.

---

## 2. High‑Level Architecture
The application follows a **single‑page application (SPA)** pattern built with modern front‑end tooling (e.g., **Vite**, **React** or **Svelte**, **Tailwind CSS**, **TypeScript**). The major layers are:

```mermaid
flowchart TD
    subgraph UI[UI Layer]
        Nav[Navigation Bar]
        Hero[Hero Header]
        Sim[2D Trajectory Engine]
        Matrix[Gravity Comparison Matrix]
        Leader[Leaderboard & Historical Champions]
        Venue[Venue Showcase Grid]
        VIP[VIP Ticket Booking Modal]
    end
    subgraph State[State Management]
        Store[Global Store (e.g., Redux/Zustand)]
    end
    subgraph Data[Data Layer]
        API[REST / GraphQL API]
        LocalDB[IndexedDB Cache]
    end
    subgraph Physics[Physics Engine]
        Kinematics[Trajectory Math]
        Presets[Gravity Presets]
    end
    subgraph Audio[Audio Subsystem]
        Impact[Impact Sound]
        Hum[Flight Hum]
    end
    UI --> Store
    Store --> API
    Store --> LocalDB
    Sim --> Kinematics
    Sim --> Presets
    Sim --> Impact
    Sim --> Hum
    Nav --> Store
    Hero --> Store
    Matrix --> Store
    Leader --> Store
    Venue --> Store
    VIP --> Store
```

---

## 3. UI Component Layout (Derived from Section 5 of the guide)
1. **Navigation Bar** – Fixed glass‑morphic header with scroll links, audio mute toggle, VIP action trigger.
2. **Hero Header** – Shows tournament status, key metrics (purse, participants, mode), and background hero image.
3. **2D Flight Simulator** – HTML5 `<canvas>` rendering trajectory dots, telemetry markers, and interactive sliders for power, launch angle, and yaw.
4. **Gravity Comparison Matrix** – 4‑column card grid (Earth, Mars, Moon, Zero‑G) with drive distances and conditions.
5. **Leaderboard & Historical Champions** – Filterable table with live search, country flags, scores, and round breakdowns.
6. **Venue Showcase Grid** – Responsive cards for each venue with specs and key hole highlights.
7. **VIP Ticket Booking Modal** – Tier selector (Courtside, Orbital Lounge, Zero‑G Suite) with dynamic price calculation.

---

## 4. Visual Design System (Section 3 of the guide)
- **Theme Tokens**: Cosmic Void, Cosmic Dark, Cosmic Indigo, Cosmic Emerald, Cosmic Gold, Cosmic Cyan, Cosmic Magenta, Cosmic Sand.
- **Glass‑morphism**: `backdrop-filter: blur(16px);` with semi‑transparent layers using the token colors.
- **Image Assets**: High‑resolution photography with gradient overlays (hero, venue cards, orbital stations).
- **Responsive Layout**: Tailwind CSS breakpoints (`sm`, `md`, `lg`, `xl`) to ensure mobile‑first experience.

---

## 5. Physics & Trajectory Engine (Section 4)
- **Kinematic Formulas** (from the guide):
  ```math
  x(t) = v \cdot \cos(θ) \cdot \cos(φ) \cdot t \cdot e^{-k t}
  y(t) = v \cdot \sin(θ) \cdot t - \frac{1}{2} g t^2
  z(t) = v \cdot \cos(θ) \cdot \sin(φ) \cdot t
  ```
- **Gravity Presets** (`EARTH`, `MARS`, `MOON`, `ZERO_G`) defined in `GRAVITY_PRESETS` with `g`, `multiplier`, `drag`, and UI color.
- **Implementation**: A dedicated `physics.ts` module exposing `calculateTrajectory(params)` returning an array of `{x, y, z}` points for canvas rendering.

---

## 6. Audio Subsystem (Section 6)
- **Procedural Synthesis** using the Web Audio API.
- Two primary sound generators:
  - `playImpactSound()` – short sine‑wave burst for club impact.
  - `playFlightHum(duration)` – triangle‑wave hum that ramps in frequency as the ball flies.
- Audio hooks are triggered from the physics module when the ball is struck and during trajectory updates.

---

## 7. Data Model & Persistence
- **Static Data**: Historical champions, venue specs, and token definitions are bundled as JSON files (`/data/champions.json`, `/data/venues.json`).
- **Dynamic Data**: Leaderboard scores, VIP bookings, and user preferences are fetched from a back‑end API (REST/GraphQL) and cached in IndexedDB for offline support.
- **State Store**: Central store holds UI selections (gravity zone, slider values), fetched data, and UI flags (audio muted, dark mode).

---

## 8. Build & Deployment
- **Toolchain**: Vite + ESBuild → optimized bundles.
- **CSS**: Tailwind with custom theme extensions for the cosmic palette.
- **CI/CD**: GitHub Actions pipeline (install → lint → test → build → deploy to Netlify/Vercel).
- **Performance Optimizations**:
  - Lazy‑load image assets with `loading="lazy"`.
  - Canvas rendering performed off the main thread using `OffscreenCanvas` where supported.
  - Audio context reused across interactions to avoid repeated initialization.

---

## 9. Development Checklist (Section 7)
- [x] Tailwind CSS with custom tokens.
- [x] Historical champion records integration.
- [x] Glass‑morphic CSS classes.
- [x] Responsive high‑resolution images.
- [x] 2D canvas trajectory calculator.
- [x] Real‑time leaderboard filtering.
- [x] Procedural audio feedback.
- [x] VIP booking modal with dynamic pricing.

---

## 10. Future Enhancements
- **3D Trajectory Visualizer** using WebGL or Three.js.
- **Live Tournament Feed** via WebSockets for real‑time score updates.
- **User Authentication** for personalized dashboards and saved simulations.
- **Multilingual Support** (Burmese, English, Japanese) to broaden audience.

---

*Maintained by the Myanmar Open Cosmic Tour Development Committee.*
