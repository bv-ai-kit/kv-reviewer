# Module 08 — Cost & Budget Management

> **Estimated study time:** ~50 min · **Level:** Intermediate · **Prerequisites:** [Module 07 — Schedule Management](07-schedule-management.md) · Part of the **Sales -> Project Management Reviewer**.

*The one where you finally get to be the person who saw the budget twist coming — at chapter 2, not chapter 12.*

## 🎯 What you'll be able to do

- [ ] Pick the right cost-estimating method (analogous, parametric, bottom-up) and state how accurate it is.
- [ ] Build a cost baseline and explain the difference between contingency reserve and management reserve.
- [ ] Calculate the core Earned Value metrics — PV, EV, AC — and the formulas built on them.
- [ ] Read a CPI or SPI number and translate it into a plain-English status for a sponsor.
- [ ] Forecast where a project will land financially using EAC, ETC, VAC, and TCPI.

## 👋 From your mentor

Okay, real talk: the word "budget" makes a lot of new PMs go a little pale, because they think it means math, and math means school, and school means that one teacher. Breathe. None of that lives here.

Here's the secret you already know in your bones. Every single time you stared at your pipeline and asked *"am I actually on track to hit the number?"* — you were doing the exact thing Earned Value Management does. You just did it without the formulas and without anyone calling it a "framework."

The math in this module is grade-school arithmetic (mostly division, I promise), and the *thinking* behind it is pure sales thinking. By the last page you'll be able to glance at a project mid-flight and tell your sponsor, in one clean sentence, whether the money's on track and what it'll cost to finish. That's the kind of line that makes a room go quiet and then turn to look at you. Let's go earn it.

---

## 💸 Estimating costs: three methods, three trade-offs

Before you can *manage* a budget, you have to *estimate* one — and estimating is basically a first date. You don't know everything yet, so how confident you sound should match how much you actually know. The PMBOK Guide gives you three workhorse techniques: a gut quote, a pricing model, and a line-item proposal.

| Method | How it works | Speed | Accuracy | When to use it |
|---|---|---|---|---|
| **Analogous** (top-down) | "Last similar project cost \$80k, so this one is roughly \$80k." Uses history + expert judgment. | Fast | Low | Early, when detail is thin. |
| **Parametric** | Multiply a unit rate by a quantity: 1,200 sq ft × \$150/sq ft = \$180k. Statistical/per-unit. | Fast–medium | Medium–high (if the data is good) | When you have a reliable cost-per-unit. |
| **Bottom-up** | Estimate every small work package, then roll the numbers up. | Slow | Highest | When you need a defensible, detailed number. |

> 🔁 **Sales → PM bridge:** Analogous estimating is the "just ballpark it for me" number you toss out on a discovery call. Parametric is your **price-per-seat × number-of-seats** quote. Bottom-up is the full, itemized proposal your sales engineer builds once the deal gets real and the lawyers are circling. Same spectrum you already live on — fast-and-fuzzy to slow-and-precise.

### Accuracy ranges: ROM vs definitive

An estimate is only honest if you say out loud how rough it is. (Confidence you can't back up is how thrillers start — and not the fun part.) PMI gives you two anchor points:

- **Rough Order of Magnitude (ROM):** early, wide. A common range is **−25% to +75%**. ("Somewhere between \$75k and \$175k.")
- **Definitive estimate:** late, tight. A common range is **−5% to +10%**. ("\$98k to \$113k.")

As the project moves from idea to plan, your estimate **converges** — it narrows as the unknowns shrink. This slow tightening has a name: the *cone of uncertainty*. The cardinal sin is giving a single, breezy number early and letting everyone treat it like a vow.

```mermaid
flowchart LR
    A["Project idea (vague)"] --> B["ROM estimate -25% to +75%"]
    B --> C["More detail gathered"]
    C --> D["Budget estimate"]
    D --> E["Definitive estimate -5% to +10%"]
    E --> F["Approved cost baseline"]
```

*Estimates narrow as you learn more — the cone of uncertainty closing in on an approved baseline.*

---

## 🧱 From estimates to a budget: the cost baseline

A pile of individual estimates isn't a budget yet — it's a guest list, not a dinner party. You **aggregate** them and then add reserves in layers, like setting the table before anyone arrives. PMI is fussy about exactly what nests inside what, and this distinction shows up *constantly* on the PMP/CAPM exams — so let's lock it in for good.

| Layer | What it contains | Who can release it |
|---|---|---|
| **Work package cost estimates** | The raw cost of the actual work. | The team. |
| **+ Contingency reserve** | Money for **known risks** ("known unknowns") — the risks you identified and planned for. | The **project manager**. |
| **= Cost baseline** | The approved, time-phased spending plan you measure performance against. | — |
| **+ Management reserve** | Money for **unknown unknowns** — risks nobody saw coming. | The **sponsor / management**. |
| **= Total project budget** | Everything. | — |

Two ideas to burn into memory:

- **Contingency reserve** lives *inside* the cost baseline. It covers risks you already know about — the rainy-day jar you packed on purpose. You control it.
- **Management reserve** lives *outside* the cost baseline. It covers the truly out-of-nowhere stuff. You usually need sponsor approval to crack it open, and using it often means re-baselining.

The **BAC (Budget at Completion)** is the total value of the cost baseline — the full planned budget for the work. You'll lean on BAC constantly in the EVM formulas below, so keep it close.

```mermaid
flowchart TD
    WP["Work package estimates"] --> CA["Control accounts"]
    CA --> CR["+ Contingency reserve (known risks)"]
    CR --> CB["= Cost baseline / BAC"]
    CB --> MR["+ Management reserve (unknown unknowns)"]
    MR --> TB["= Total project budget"]
```

*The budget is built in layers — contingency lives inside the baseline, management reserve sits just outside it.*

---

## ⏸️ Pause & reflect

Take a breath — this is a lovely spot to dog-ear the page and come back later if you need to. Before you wander off for coffee, sit with these:

- In your own words, what's the difference between **contingency reserve** and **management reserve**? Who controls each?
- Why is it both dishonest *and* risky to hand someone a single-number ROM estimate and let them treat it as a commitment?

If those two land cleanly, the EVM section is going to click fast. If they're still a little blurry, re-skim that layered table — honestly, it's worth the two minutes.

---

## 📊 Earned Value Management, from scratch

EVM *sounds* like a closed door with a keypad. It's actually three numbers, and everything else is just arithmetic standing on their shoulders. Master the three numbers and the rest practically writes itself.

Picture a 4-week project. You planned to spend \$10,000 total, evenly — \$2,500 of *value* delivered each week.

It's the **end of week 2**, and here's our crime scene, three clues laid out:

| Term | Question it answers | In our example |
|---|---|---|
| **PV — Planned Value** | How much work *should* be done by now (in \$)? | By end of week 2 we planned 50% → **\$5,000** |
| **EV — Earned Value** | How much work is *actually* done (valued at the plan)? | We've actually finished 40% → 40% × \$10,000 = **\$4,000** |
| **AC — Actual Cost** | How much have we actually *spent*? | We've spent **\$6,000** |

Read those three one more time, slowly. PV is the plan, EV is the progress, AC is the spend. Every other formula in this module is just two of these three side-eyeing each other.

> 🔁 **Sales → PM bridge:** This is your quarterly number wearing a different outfit. **PV** is your quota pacing ("by week 8 I should have \$5k booked"). **EV** is what you've actually closed, valued at quota. **AC** is what you burned — time and spend — to get there. CPI and SPI are just your attainment ratios with fancier names and better posture.

### The core formulas (with our worked example)

One mnemonic does all the heavy lifting: **for the *variances*, EV goes first and you subtract; for the *indexes*, EV goes on top and you divide.** That's it. That's the whole trick.

| Formula | Meaning | Our numbers | Result | Read it as |
|---|---|---|---|---|
| **CV = EV − AC** | Cost Variance | 4,000 − 6,000 | **−\$2,000** | Negative = over budget |
| **SV = EV − PV** | Schedule Variance | 4,000 − 5,000 | **−\$1,000** | Negative = behind schedule |
| **CPI = EV / AC** | Cost Performance Index | 4,000 / 6,000 | **0.67** | < 1 = over budget |
| **SPI = EV / PV** | Schedule Performance Index | 4,000 / 5,000 | **0.80** | < 1 = behind schedule |

So in plain human: we're getting \$0.67 of value for every \$1 we spend (ouch), and we're crawling along at 80% of planned pace (behind). This project is in trouble — but here's the plot twist that makes you the hero: we caught it at week 2 instead of finding the body at week 4.

### Forecasting: where will we land?

The indexes above describe *right now*. These next formulas are the part where you read ahead and predict the ending. (BAC here = \$10,000.)

| Formula | Meaning | Our numbers | Result |
|---|---|---|---|
| **EAC = BAC / CPI** | Estimate at Completion (assumes current cost performance continues) | 10,000 / 0.67 | **≈ \$14,925** |
| **ETC = EAC − AC** | Estimate to Complete (cost of the work *remaining*) | 14,925 − 6,000 | **≈ \$8,925** |
| **VAC = BAC − EAC** | Variance at Completion (projected overrun/underrun) | 10,000 − 14,925 | **≈ −\$4,925** |
| **TCPI = (BAC − EV) / (BAC − AC)** | To-Complete Performance Index — efficiency needed on remaining work to still hit BAC | (10,000 − 4,000) / (10,000 − 6,000) | **1.50** |

That **EAC of ~\$14,925** is the line that makes a sponsor put down their coffee: "At our current efficiency, this \$10k project finishes around \$15k." And **TCPI = 1.50** delivers the gut-punch: to *still* hit the original budget, the team would have to suddenly sprint at 150% efficiency for the entire rest of the project — which, let's be honest, is not happening. That's how you turn a row of numbers into an honest, grown-up conversation.

> **Note on EAC:** `EAC = BAC / CPI` is the common, exam-default formula and assumes current cost performance keeps right on going. PMI defines other EAC variants too — e.g. when the original estimate is no longer valid, `EAC = AC + Bottom-up ETC`, or when both cost *and* schedule pressure persist, `EAC = AC + (BAC − EV) / (CPI × SPI)`. The formula you pick quietly encodes an *assumption* about how the rest of the story goes. Choose it on purpose.

```mermaid
flowchart TD
    PV["PV - Planned Value (the plan)"] --> SV["SV = EV - PV"]
    EV["EV - Earned Value (progress)"] --> SV
    EV --> CV["CV = EV - AC"]
    AC["AC - Actual Cost (the spend)"] --> CV
    EV --> SPI["SPI = EV / PV"]
    PV --> SPI
    EV --> CPI["CPI = EV / AC"]
    AC --> CPI
    CPI --> EAC["EAC = BAC / CPI"]
    EAC --> VAC["VAC = BAC - EAC"]
    EAC --> ETC["ETC = EAC - AC"]
```

*The three measured values (PV, EV, AC) quietly feed every variance, index, and forecast in EVM.*

---

## 🟢🔴 How to read EVM at a glance

Here's the cheat sheet that turns you fluent. The whole secret: **1.0 is the line. Above it you're winning, below it you've got work to do. An index is a ratio; a variance is dollars.**

| Metric | Value | What it means | Sponsor-speak |
|---|---|---|---|
| **CPI** | > 1 | Under budget | "We're getting more value per dollar than planned." |
| **CPI** | = 1 | On budget | "Spending exactly as planned." |
| **CPI** | < 1 | Over budget | "Each dollar is buying less than planned — we're overspending." |
| **SPI** | > 1 | Ahead of schedule | "We're delivering faster than planned." |
| **SPI** | < 1 | Behind schedule | "We're delivering slower than planned." |
| **CV / SV** | Positive | Good (under budget / ahead) | — |
| **CV / SV** | Negative | Bad (over budget / behind) | — |

Quick way to keep the indexes straight: **C is for Cost, S is for Schedule; over 1 you're the hero of the chapter, under 1 you've got a recovery arc to write.**

### Telling the story to a sponsor

Sponsors don't want your formulas — they want the verdict, the way you'd want the ending of a thriller without the 400 pages. Translate like this:

> "We're at **CPI 0.85, SPI 0.92**. In plain terms: we're spending about 18% more than planned for the value we've delivered, and we're running a bit behind pace. At this rate the project finishes around **\$118k against a \$100k budget**. Here's my recovery plan…"

That one sentence — number, plain-English meaning, forecast, plan — *is* the job. Nail it and you'll never sound like the panicked person in the meeting again.

```mermaid
quadrantChart
    title Project health at a glance
    x-axis Behind Schedule --> Ahead of Schedule
    y-axis Over Budget --> Under Budget
    quadrant-1 Under budget and ahead
    quadrant-2 Under budget but behind
    quadrant-3 Over budget and behind
    quadrant-4 Over budget but ahead
    "Our example": [0.30, 0.20]
    "Healthy project": [0.75, 0.80]
    "Cost trouble": [0.70, 0.25]
```

*Plotting SPI (horizontal) against CPI (vertical) — the bottom-left quadrant is where projects go to get quietly cancelled.*

---

## 🥧 A sample budget breakdown

When you present a budget, show *where the money actually goes*, not just the bottom-line total. A clear breakdown builds trust fast and brings the awkward debates forward, where they're cheap to have.

```mermaid
pie title Sample project budget breakdown
    "Labor / staffing" : 55
    "Vendors and contractors" : 20
    "Tools and licenses" : 10
    "Contingency reserve" : 10
    "Travel and other" : 5
```

*A representative cost baseline — labor usually steals the show, with a visible slice carved out for contingency.*

Notice that contingency is right there in the open. Hiding your reserves erodes trust the second someone finds them; showing them says, calmly, "I've already planned for things going sideways."

---

## 🧠 Check yourself

**1. A project has EV = \$8,000, AC = \$10,000, PV = \$9,000. Is it over or under budget, and ahead or behind schedule?**

<details><summary>Show answer</summary>

CPI = EV/AC = 8,000/10,000 = **0.80** → CPI < 1 → **over budget**.
SPI = EV/PV = 8,000/9,000 = **0.89** → SPI < 1 → **behind schedule**.
Both bad — the project is over budget *and* behind. (CV = −\$2,000, SV = −\$1,000.)

</details>

**2. What's the difference between contingency reserve and management reserve, and which one is inside the cost baseline?**

<details><summary>Show answer</summary>

**Contingency reserve** covers **known risks** ("known unknowns"), is controlled by the **PM**, and is **inside** the cost baseline. **Management reserve** covers **unknown unknowns**, is controlled by **management/sponsor**, and sits **outside** the cost baseline (in the total budget).

</details>

**3. BAC = \$200,000 and CPI = 0.80. What's the EAC, and what does it tell you?**

<details><summary>Show answer</summary>

EAC = BAC / CPI = 200,000 / 0.80 = **\$250,000**. At the current cost efficiency, the project is forecast to finish \$50,000 over its \$200k budget (VAC = BAC − EAC = −\$50,000).

</details>

**4. You need a fast, early estimate for a project very similar to one you finished last year. Which estimating method fits, and what accuracy should you claim?**

<details><summary>Show answer</summary>

**Analogous (top-down)** estimating — base it on the prior project's actuals plus expert judgment. Because it's early and coarse, state it as a **ROM** (e.g. −25% to +75%), not a precise number.

</details>

**5. TCPI comes out to 1.35. In one sentence, what does that mean for the team?**

<details><summary>Show answer</summary>

To finish within the original budget (BAC), the team must perform the remaining work at **135% efficiency** — getting \$1.35 of value per \$1 spent. That's far above the typical 1.0, so hitting the original budget is likely unrealistic and you should re-set expectations.

</details>

**6. Translate "CPI = 1.10, SPI = 0.95" into one plain-English sentence for a sponsor.**

<details><summary>Show answer</summary>

"We're spending about 10% *less* than planned for the value delivered (good), but we're running slightly behind pace at 95% of plan — so we're cost-efficient but a touch slow." (CPI > 1 = under budget; SPI < 1 = behind schedule.)

</details>

---

## 🧰 Try it

Grab a small, real-ish project — say a **\$12,000, 6-week website rebuild**, planned to deliver \$2,000 of value per week. (Pretend it's yours. Get a little attached.)

1. It's the **end of week 3**. Decide three numbers: how much value *should* be done (**PV**), how much is *actually* done as a dollar value (**EV**), and how much you've *spent* (**AC**). Make EV and AC realistic but imperfect — life rarely lands on the plan.
2. Calculate **CV, SV, CPI, SPI**.
3. Forecast **EAC, ETC, and VAC** (BAC = \$12,000).
4. Write **one sentence** you'd say to the sponsor: the number, the plain-English meaning, and the forecast.

If you can do all of that in under ten minutes, you can do EVM on a live project under real pressure. That's the entire skill — rehearsed once, in private, before opening night.

---

## 🔑 Key terms

- **ROM (Rough Order of Magnitude)** — an early, wide estimate, commonly −25% to +75%.
- **Definitive estimate** — a late, tight estimate, commonly −5% to +10%.
- **Cost baseline** — the approved, time-phased budget used to measure performance; includes contingency reserve.
- **BAC (Budget at Completion)** — the total approved value of the cost baseline.
- **Contingency reserve** — funds for *known* risks; inside the cost baseline; PM-controlled.
- **Management reserve** — funds for *unknown* risks; outside the cost baseline; sponsor-controlled.
- **PV (Planned Value)** — budgeted cost of work *scheduled* to be done by now.
- **EV (Earned Value)** — budgeted value of work *actually completed*.
- **AC (Actual Cost)** — money actually spent to date.
- **CPI / SPI** — Cost / Schedule Performance Index; > 1 good, < 1 bad.
- **CV / SV** — Cost / Schedule Variance in dollars; positive good, negative bad.
- **EAC (Estimate at Completion)** — forecast total cost; default `BAC / CPI`.
- **ETC (Estimate to Complete)** — forecast cost of the *remaining* work; `EAC − AC`.
- **VAC (Variance at Completion)** — forecast over/under run; `BAC − EAC`.
- **TCPI (To-Complete Performance Index)** — efficiency required on remaining work to hit a target; `(BAC − EV) / (BAC − AC)`.

You can now look at a project mid-flight and call its financial ending before anyone else in the room. But money is only one way a project can quietly go off the rails — next up, we chase the suspect everyone *swears* they're already handling: quality.

---
⬅️ **Previous:** [Module 07 — Schedule Management](07-schedule-management.md) · 🏠 **[Reviewer Home](../README.md)** · ➡️ **Next:** [Module 09 — Quality Management](09-quality-management.md)
