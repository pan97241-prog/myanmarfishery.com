# Myanmar Open Golf Website Plan & Content Structure

This document serves as the primary layout and content blueprint for developing or rebuilding the official **Myanmar Open** golf website (`myanmaropen.com`).

---

## 📄 Site Structure (Sitemap)

```
myanmaropen.com/
├── 🏠 Home (Index)
├── 🏆 About & History
│   ├── Overview
│   └── Past Champions
├── ⛳ Venues & Host Courses
├── 📰 News & Media
└── 📬 Contact & Inquiries
```

---

## 🎨 Design & Theme Guidelines

| Element | Specification |
| :--- | :--- |
| **Primary Color** | Deep Forest Green (`#1E4D2B`) |
| **Secondary Color** | Warm Gold (`#D4AF37`) |
| **Accent Color** | Off-White / Cream (`#F9F9FB`) |
| **Typography** | Sans-serif for UI (e.g., *Inter*, *Roboto*), Serif for Headings (e.g., *Playfair Display*) |
| **Target Audience** | International golf fans, players, sponsors, sports journalists, and local golf enthusiasts. |

---

## 📝 Page Contents & Layouts

### 1. Home Page (`index.html` / `pages/index.js`)

#### **Hero Section**
* **Headline:** The Premier Professional Golf Tournament in Myanmar
* **Subheadline:** Home of world-class golf action, featuring champions from the Asian Tour & global circuits.
* **Call to Action (CTA) Buttons:**
  * `[ Explore Past Champions ]` → Scroll to Champions Section
  * `[ View Host Venues ]` → Navigate to Venues Page

#### **Highlights Grid**
* **Rich Golfing History:** Established in 1996 as a cornerstone event for Southeast Asian professional golf.
* **World-Class Venues:** Hosted across top-tier courses like Pun Hlaing Golf Club and Royal Mingalardon.
* **Global Field:** Historically co-sanctioned with the **Asian Tour** and **Japan Golf Tour**.

---

### 2. About & History (`about.md`)

#### **Tournament History**
> Established in **1996**, the Myanmar Open has played a pivotal role in growing professional golf in Southeast Asia. For over two decades, the 72-hole stroke play tournament attracted elite international fields and provided a platform for Asian golfing talent to shine on the world stage.

#### **Past Champions Hall of Fame**

| Year | Champion | Country | Winning Score | Host Course |
| :---: | :--- | :---: | :---: | :--- |
| **2018** | Paul Peterson | 🇺🇸 USA | 271 (−13) | Pun Hlaing Golf Club |
| **2017** | Todd Sinnott | 🇦🇺 Australia | 270 (−14) | Pun Hlaing Golf Club |
| **2016** | Shaun Norris | 🇿🇦 South Africa | 264 (−24) | Royal Mingalardon |
| **2013** | Chawalit Plaphol | 🇹🇭 Thailand | 270 (−18) | Royal Mingalardon |
| **2012** | Kieran Pratt | 🇦🇺 Australia | 273 (−15) | Royal Mingalardon |
| **2010** | Tetsuji Hiratsuka | 🇯🇵 Japan | 264 (−24) | Royal Mingalardon |
| **2004** | Thongchai Jaidee | 🇹🇭 Thailand | 281 (−7) | Yangon Golf Club |
| **1996** | Boonchu Ruangkit | 🇹🇭 Thailand | 206 (−10) | Yangon Golf Club |

---

### 3. Host Venues (`venues.md`)

#### **1. Pun Hlaing Golf Club**
* **Location:** Hlaingthaya Township, Yangon
* **Architect:** Gary Player
* **Par:** 72 | **Length:** ~7,012 yards
* **Description:** Known as the "Jewel of Myanmar," this championship course hosted the 2017 and 2018 Myanmar Open editions.

#### **2. Royal Mingalardon Golf & Country Club**
* **Location:** Mingalardon Township, Yangon
* **Par:** 72 | **Length:** ~7,200 yards
* **Description:** A stunning 18-hole championship layout that frequently hosted the tournament during its Asian Tour co-sanctioned era.

---

### 4. Contact & Inquiries (`contact.md`)

```markdown
### Get in Touch

For general inquiries regarding tournament history, media coverage, or partnership opportunities:

* 📧 **Email:** info@myanmaropen.com
* 📍 **Location:** Yangon, Myanmar
```

---

## 🛠️ Developer Technical Requirements

* **Framework Suggestions:** Next.js, Astro, or static HTML/Tailwind CSS.
* **SEO Metadata:**
  * **Title:** `Myanmar Open Golf | Official Tournament Archive`
  * **Description:** `Official details, historical records, past champions, and host venues for the Myanmar Open Golf Championship.`
  * **Keywords:** `Myanmar Open, Golf Myanmar, Asian Tour, Pun Hlaing Golf Club, Golf Championship`