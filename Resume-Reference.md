# Rebirth Portfolio — Design Specification

> Framer Template · Designer: Mark Ashton · URL: re-birth.framer.website

---

## 1. ზოგადი კონცეფცია

**Rebirth Portfolio** — პრემიუმ Framer შაბლონი, სრულიად შავ-თეთრ ფერთა სქემაზე დამყარებული მინიმალისტური, editorial სტილის პორტფოლიო. დიზაინის ძირითადი კონცეფცია: **ტიპოგრაფია + ნეგატიური სივრცე + კინემატოგრაფიული ფოტოგრაფია**. ყველა ვიზუალური გადაწყვეტა ემსახურება ერთ მიზანს — კრეატიული სამუშაოს მაქსიმალური ექსპოზიცია.

---

## 2. ფერთა პალიტრა

| როლი | მნიშვნელობა |
|------|-------------|
| Background | `#000000` — სრული შავი |
| Primary Text | `#FFFFFF` — სუფთა თეთრი |
| Secondary Text | `rgba(255,255,255,0.5)` — ნახევრად გამჭვირვალე თეთრი (subheadings, labels) |
| Accent / Border | `rgba(255,255,255,0.1–0.15)` — ძალიან მსუბუქი თეთრი ზოლები (divider lines) |
| Interactive Hover | `#FFFFFF` ან `#000000` (invert) — ღილაკებზე hover-ი ანათებს ან ინვერტირდება |

სქემა **მონოქრომული**, ობლიგატორული — არანაირი ფერადი accents. სრული სიბნელის ფონზე ყველა ფოტოგრაფია/პროექტი ითამაშებს "ფანჯრის" ფუნქციას.

---

## 3. ტიპოგრაფია

### ძირითადი შრიფტი — Display / Headings

- **სახელი:** ახლობელი სეიფ ან გეომეტრიული სანს-სეიფი (Framer-ის სისტემიდან — სავარაუდოდ **Editorial New**, **PP Editorial New**, ან **Canela** / **Tobias** ტიპის serif-display)
- **სტილი:** კაპიტელური (ALL CAPS), დიდი, სქელი სათაურები
- **ზომა:** H1 — 10–15vw (viewport-ის მიხედვით ავტომასშტაბირება)
- **letter-spacing:** ძალიან ფართო (0.02–0.05em)
- **line-height:** ძალიან მჭიდრო (0.85–0.95)

### Body / Sub-copy

- **სახელი:** ნეიტრალური, სუფთა სანს-სეიფი (სავარაუდოდ **Neue Haas Grotesk**, **Aktiv Grotesk**, ან **DM Sans**)
- **ზომა:** 14–16px (body), 12–13px (labels/tags)
- **სიმძიმე:** Regular (400) ან Light (300)
- **letter-spacing:** -0.01em ან default

### სტრუქტურული ელემენტები

- **Index/Counter სტილი:** `01 ——`, `02 ——` — სეიფ გამყოფით, არ გამოიყენება bullet-ები
- **Signature image:** SVG ხელმოწერა, ჩართულია გამოსახულებად (არა ტექსტი)
- **Tagline:** *"Timeless Visual Stories for Legendary Brands"* — მსუბუქი, italic ან regular, პატარა ზომა

---

## 4. ნავიგაცია (Header)

```
[ MARK ASHTON ]    WORK  ABOUT  THOUGHTS  MAIL  TW  IG  LI
```

- **პოზიცია:** Fixed top, სრული სიგანე
- **ფონი:** გამჭვირვალე (`transparent`) — scroll-ზე ცვლილება შესაძლოა
- **Layout:** Logo მარცხნივ, ნავ-ლინკები ცენტრში ან მარჯვნივ
- **ტიპოგრაფია:** ALL CAPS, letter-spacing ფართო, Regular/Medium სიმძიმე, პატარა ზომა (~12–13px)
- **ლინკები:** WORK · ABOUT · THOUGHTS · MAIL + სოციალური: TW · IG · LI
- **Hover:** ალბათ underline-animate ან opacity გადასვლა
- **Border:** სქელი `border-bottom: 1px solid rgba(255,255,255,0.1)`

---

## 5. Hero სექცია

### 5.1 მარქი (Marquee / Ticker)

სამი ჰორიზონტალური სარბელი ლოგოებით, პროექტის ესქიზებით. ავტომატური, გამეორებადი მარცხნივ სრიალი. ეს ელემენტი ვიზუალური "ხმაური"-ია, ქვეთავამდე სრიალი იქმნება დეპთ-ის განცდა.

### 5.2 ტიპოგრაფიული Hero

```
[ MARK ]    2K26     ./ portfolio
            2K26     ./ portfolio

Timeless Visual Stories for Legendary Brands

[ ASHTON ]
```

- `MARK` და `ASHTON` — ორ ცალკე ხაზად, Viewport-spanning ზომები (100vw-ს მოჭედილი)
- `MARK` — მარცხნივ, `ASHTON` — მარჯვნივ (ან საპირისპირო indent)
- `2K26` + `./ portfolio` — მონაცვლეობს / repeat animation
- Tagline — ცენტრში, პატარა ზომა
- ეს ბლოკი **სრული viewport სიმაღლე** (100vh)
- **ანიმაცია:** ტექსტი ლამაზად fade-in ან slide-up reveal გვერდის ჩატვირთვისას

---

## 6. About / Bio სექცია

### Layout — ორ სვეტი:

**მარცხენა სვეტი (60%):**
- დიდი Heading (H2-H3 დონე):
  > "As a former Creative Director at Oglebee London and a four-time judge for Cannes Lynx..."
- Body ტექსტი ორ პარაგრაფად (Renowned for... / Currently...)
- **Location badge:** `Based and work in London`
- **Clock widget:** Live GMT საათი (`--:-- GMT`)
- **სოციალური ლინკები:** ≈ 6 პლატფორმა (X, IG, YT, LI, FB, TikTok) — ხაზოვანი სია ან icon grid
- **RESUMÉ button** — outlined ან underlined CTA

**მარჯვენა სვეტი (40%):**
- პორტრეტის ფოტოგრაფია — ვერტიკალური (portrait orientation, 9:11 ratio)
- **SVG ხელმოწერა** — ფოტოს ქვემოთ ან თავზე overlay-ად
- **Badge:** `Award-winning DESIGNER, ARTIST and EntrePreneur`

---

## 7. Featured Project ბლოკი

- სათაური: `# Featured Project`
- ერთი large-format პროექტის ბარათი — სრული სიგანე ან 80% სიგანე
- შიგნით: პროექტის სახელი + კლიენტი + მოკლე აღწერა
- **Hover:** მასშტაბი იზრდება ან overlay გამოჩნდება

---

## 8. Brand Logos — Marquee

- **სათაური:** *"I've had the privilege of collaborating with renowned brands..."*
- **Layout:** ავტომატური მარქი (infinite scroll) — ლოგოების 2 რიგი, ან 1 რიგი ორ მიმართულებაში
- ლოგოები: სინამდვილეში გამოგონილი ბრენდები (Giggle, Snapple, Netflux, Beta, Microshaft...)
- **სტილი:** თეთრი SVG ლოგოები შავ ფონზე, `opacity: 0.6–0.8`, hover-ზე `opacity: 1`
- 10 ლოგო × 2 repeat = 20 DOM ელემენტი continuous scroll-ისთვის

---

## 9. Selected Projects გრიდი

```
# SELECTED PROJECTS
```

### პროექტები (4 ბარათი):

| # | კლიენტი | პროექტი | აღწერა |
|---|---------|---------|--------|
| 1 | Nebula Production | Stellar Odyssey | Cinematic 3D Characters |
| 2 | Cryo Studios | Last Journey to Mars | Final Human Visit to Mars |
| 3 | EcoGrid Technologies | Supra Home | Smart Solar Energy Mobile App |
| 4 | Blanc4 UK | Blanc 4 | Redefine. Reposition. Revitalize. |

### ბარათის სტრუქტურა:

```
[ სრული სიგანის გამოსახულება ]
კლიენტის სახელი       პროექტის სახელი
---
მოკლე აღწერა
```

- **Layout:** 2×2 grid ან 1 სვეტი full-bleed ბარათებით
- **ბარათები:** aspect ratio დაახლოებით 16:9 ან 4:3
- **Hover ეფექტი:** სკეილ ↑ / overlay / cursor-ის ტრანსფორმაცია
- **CTA:** `EXPLORE ALL PROJECTS` — outlined button, centered, სექციის ბოლოში

---

## 10. Creative Expertise სექცია

```
# creative expertise

"Design is not just what it looks like and feels like. Design is how it works."
```

### 5 სერვისი — აქარდეონი ან ვერტიკალური სია:

```
01 —— Digital Strategy
02 —— Brand Identity
03 —— UX Design
04 —— Visual Design
05 —— Framer Development
```

**თითოეული ელემენტი:**
- ნომერი + dash (`01 ——`) → სახელი (H6/small uppercase)
- პარაგრაფი (body)
- Tags: `Strategic Planning` · `Market Analysis` · `Campaign Development` · `Analytics and Insights`
- **ინტერაქცია:** ალბათ hover-ზე expand / accordion, ან უბრალოდ static list

---

## 11. Metric Marvels სექცია (Stats)

```
# Metric Marvels
```

**3 ძირითადი სტატისტიკა:**

```
AWARDS & Recognition    040     (6 Cannes Lynx / 4 Wobbly / 7 Ouuuuuch / 23 PWA)
PROJECTS COMPLETED      0119    (65 Web / 36 App / 12 E-Com / 6 Charity)
Client Satisfaction     099%
WORKED WITH MENTAL CLIENTS  1001
```

- **სტილი:** large monospace counter + label
- `040`, `0119`, `099` — პადინგიანი ნომრები (leading zeros)
- ქვე-ბრეიქდაუნი პატარა ზომის ტექსტით (tag სტილი)
- **ანიმაცია:** Counter/odometer scroll-trigger ანიმაცია (0-დან მნიშვნელობამდე)

---

## 12. Testimonials — "Applause Corner"

```
# Applause Corner
```

- **Layout:** Horizontal carousel / slider
- **ნავიგაცია:** ← → ისრები (SVG, outlined)
- **ბარათი:**
  ```
  ციტატა (body text, ~16px)
  [ avatar ] სახელი · პოზიცია, კომპანია
  ```
- 6 უნიკალური მიმოხილვა: Timothy Rodgers / Anna Korhonen / Layne Morgan / Anita Hoffmann / Josh Stevens / Rick Bellante
- **ანიმაცია:** Auto-play ან manual drag

---

## 13. CTA / Contact Block

```
Have a project?
Schedule a Call.
Let's chat!
```

- **Layout:** 2 სვეტი
  - **მარცხენა:** H2/H3 ტექსტი
  - **მარჯვენა:** `BOOK A FREE CALL` ღილაკი + availability date + ფოტო
- **Availability:** `I'm available for new projects from 4th July 2025`
- **ფოტო:** ნახევარ-სიგანის გამოსახულება (interior/workspace)
- **ღილაკი:** `BOOK A FREE CALL` → calendly.com ლინკი
  - სტილი: solid თეთრი ფონი + შავი ტექსტი ან outline

---

## 14. Footer

### ზედა Footer:

```
# MARK ASHTON
© 2026 Mark Ashton — All rights reserved.
[ Video background ]
[ Framerpod logo ]    FOLLOW ME ON X    GET REBIRTH FIGMA
```

### ქვედა Footer (კონტაქტი):

```
MARK ASHTON

[ Copy ] hello@markashton.com     [ Copy ] +44 20 7144 6699

25 Lindsey Street, Epping CM16 6RB, United Kingdom

Instagram · X · Youtube · Facebook · Linkedin · TikTok

© 2026 Mark Ashton — All rights reserved.
Privacy Policy · Terms & Conditions · Imprint
```

- **Copy button:** კლიკზე ტექსტი იცვლება `Email copied!` / `Mobile copied!`
- **Live Clock:** `--:-- London (GMT)`
- **ვიდეო ფონი:** Looping ambient video (framerusercontent.com/assets/...mp4)
- **Promo banner (pop-up/bottom bar):** "New Template! → Preview" + thumbnail

---

## 15. UI კომპონენტები

### ღილაკები

| ტიპი | სტილი |
|------|-------|
| Primary | შავი ფონი + თეთრი ტექსტი, მომრგვალებული (ბრტყელი border-radius ≈ 2–4px) |
| Outlined | გამჭვირვალე ფონი + თეთრი border + თეთრი ტექსტი |
| Text Link | ALL CAPS, underline-on-hover |

### კარდები / ბარათები

- **Border:** `1px solid rgba(255,255,255,0.1)`
- **Padding:** 24–40px
- **Border-radius:** 0 (square) ან 4–8px (minimal)
- **Hover:** `transform: scale(1.02)` + `border-color: rgba(255,255,255,0.3)` ან image reveal

### Dividers

- `1px solid rgba(255,255,255,0.1)` — horizontal ზოლები სექციებს შორის

---

## 16. ანიმაციები და ინტერაქციები

| ელემენტი | ანიმაცია |
|----------|---------|
| Page Load | Staggered fade-up reveal — ყველა ელემენტი 0.6s–1.2s დეგეიით |
| Hero Text | Large text slide-in / split reveal |
| Marquee (Logos) | Infinite CSS scroll — `animation: scroll 20s linear infinite` |
| Stats Counters | Scroll-triggered odometer 0 → final value |
| Project Cards | Hover scale + overlay fade |
| Testimonials | Draggable/swipeable carousel |
| Nav Links | Opacity + underline on hover |
| CTA Button | Background fill on hover (invert) |
| Cursor | Custom cursor (ალბათ dot/ring კომბო) |

---

## 17. Layout სქემა (Desktop)

```
┌─────────────────────────────────────────────┐
│  NAV: MARK ASHTON     WORK ABOUT THOUGHTS   │  ← fixed, transparent
├─────────────────────────────────────────────┤
│  [MARQUEE: project thumbnails scrolling]    │
│                                             │
│  MARK                    2K26 ./ portfolio  │
│                                             │
│        Timeless Visual Stories...           │
│                                             │
│                                    ASHTON   │
├─────────────────────────────────────────────┤
│  ABOUT                                      │
│  [Bio text + clock + social] | [Portrait]   │
├─────────────────────────────────────────────┤
│  FEATURED PROJECT  [Full-width card]        │
├─────────────────────────────────────────────┤
│  [LOGO MARQUEE — infinite scroll]           │
├─────────────────────────────────────────────┤
│  SELECTED PROJECTS                          │
│  [2×2 grid of project cards]                │
│           EXPLORE ALL PROJECTS              │
├─────────────────────────────────────────────┤
│  creative expertise                         │
│  01—— 02—— 03—— 04—— 05——                  │
├─────────────────────────────────────────────┤
│  Metric Marvels   040 / 0119 / 099% / 1001  │
├─────────────────────────────────────────────┤
│  Applause Corner  [←  Carousel  →]         │
├─────────────────────────────────────────────┤
│  Have a project?  |  BOOK A FREE CALL       │
├─────────────────────────────────────────────┤
│  FOOTER: Contact info + Social + Copyright  │
└─────────────────────────────────────────────┘
```

---

## 18. Responsive / Breakpoints

- **Desktop:** 1280px+ — ორ სვეტი, დიდი ტიპოგრაფია
- **Tablet:** 768–1279px — სვეტები სტეკდება, ტიპოგრაფია იკუმშება
- **Mobile:** < 768px — ერთი სვეტი, ნავ-ი burger მენიუში, hero ტექსტი 2–3 ხაზად

---

## 19. ტექნიკური შენიშვნები

- **პლათფორმა:** Framer (No-code + React)
- **ვიდეო ფონი:** `<video autoplay loop muted playsinline>`
- **Copy to Clipboard:** JavaScript `navigator.clipboard.writeText()`
- **Live Clock:** `setInterval` JS, ლოკალური timezone → London GMT
- **Marquee:** CSS `@keyframes` ან Framer Motion ინფინიტური სლაიდი
- **Meta:** OG image, Twitter card, canonical URL — სრულად კონფიგურირებული
- **Fonts:** Google Fonts ან Adobe Fonts (Framer-ის ინტეგრაცია)
- **Analytics:** ინტეგრირებული Framer-ის საანალიზო სისტემასთან

---

*Design spec შეიქმნა: 2026-05-16 · წყარო: re-birth.framer.website*
