# Module 07 — Schedule Management

> ⏱️ **Estimated study time:** ~50 min · 📈 **Level:** Intermediate · ✅ **Prerequisites:** [Module 06 — Scope Management](06-scope-management.md) · Part of the **Sales -> Project Management Reviewer**.

*The one where you discover you've been doing the math in your head all along — you just never wrote it down.*

## 🎯 What you'll be able to do

- [ ] Break work packages from the WBS down into **activities**, then sequence them with the right dependency types.
- [ ] Build a simple **network diagram** and find the **critical path** using a forward and backward pass.
- [ ] Estimate durations three ways — **analogous, parametric, and three-point/PERT** — and know when each fits.
- [ ] Read and build a **Gantt chart** with milestones, and explain it to a stakeholder.
- [ ] Choose between **crashing** and **fast-tracking** when the deadline moves up, and say what each costs you.
- [ ] Explain **float/slack** and why it tells you where you can (and can't) afford to slip.

## 👋 From your mentor

Okay, real talk: you have been doing this your entire career. Every quarter, you sat down and quietly worked backward from a close date — figuring out which deals *had* to move this week so the number landed by the 31st. That instinct, "what must happen, in what order, by when," is the entire beating heart of schedule management. You already own it.

The only thing that changes now is that you stop carrying the plan in your head and put it on paper, where a team of ten people can see the same map and actually trust it. That's it. That's the whole difference. This module hands you the vocabulary and the tools to turn that gut feel into something you can defend, calmly, in a status meeting full of people who want a date.

Fair warning: this is the most "mathy" module so far, so settle in somewhere comfy. But I promise every formula in here is just arithmetic with a story attached. Take it slow, and don't let the symbols intimidate you — they're on your side.

## 🗺️ The big picture: from scope to a schedule

In Module 06 you took the work apart into a **WBS** that ended in **work packages** — the smallest chunks of deliverable work. Scheduling is the chapter that comes *next*. You take each work package, break it into the verbs needed to produce it, line those verbs up in order, estimate how long each takes, and — like magic that isn't actually magic — the calendar falls out the other end.

```mermaid
flowchart TD
    A["Work packages (from WBS)"] --> B["Define activities"]
    B --> C["Sequence activities"]
    C --> D["Estimate durations"]
    D --> E["Build network diagram"]
    E --> F["Find critical path (CPM)"]
    F --> G["Develop schedule / Gantt"]
    G --> H["Compress if needed"]
    H --> I["Baseline and control"]
```
*The scheduling process, step by step — each one feeds the next, and you can't sequence what you haven't defined yet.*

<!-- mobile-diagram:07-schedule-management-1 -->
<details><summary>🖼️ Tap to view as an image (for the GitHub mobile app)</summary>

<img src="diagrams/07-schedule-management-1.png" alt="The scheduling process, step by step — each one feeds the next, and you can't sequence what you haven't defined yet." />

</details>
<!-- /mobile-diagram -->

> 🔁 **Sales → PM bridge:** A work package is like an **account** in your pipeline. The *activities* are the touch-points needed to close it — discovery call, demo, proposal, redline, signature. You never closed an account in one undefined blob and you know it; you broke it into ordered steps with owners and dates. Scheduling is exactly that, just pointed at deliverables instead of deals.

## 1) From work packages to activities

Here's the cleanest way to keep these straight: a **work package** is a noun — a thing you'll deliver (say, "User login page"). An **activity** (PMI also calls it a **schedule activity**) is a verb — the work you actually do to produce it ("Design login wireframe," "Build login API," "Write login tests").

**Defining activities** = decomposing each work package into the actions required. **Sequencing activities** = deciding what order they run in and how they connect.

The output of defining is your **activity list**, plus **activity attributes** (owner, assumptions, constraints) and a **milestone list**. Keep activities small enough to estimate honestly — if you can't put a believable number of days on it, it's still too big and you're kidding yourself.

| Term | What it is | Sales analogy |
|---|---|---|
| Work package | Smallest deliverable in the WBS | An account to close |
| Activity | A unit of work to produce it | A call, demo, or proposal step |
| Milestone | A zero-duration marker of an event | "Contract signed" |
| Dependency | A relationship between two activities | "Can't send proposal before discovery" |

## 2) Dependency types and leads/lags

When you sequence activities, you connect them with a **logical relationship**. There are four of them, and — small mercy — the names read literally. The first word is the *predecessor's* end, the second is the *successor's*.

| Dependency | Reads as | Plain meaning | Example |
|---|---|---|---|
| **Finish-to-Start (FS)** | Finish A, then Start B | B can't start until A finishes | Pour foundation (A) → frame walls (B). *The default — ~90% of links.* |
| **Start-to-Start (SS)** | Start A, then Start B | B can't start until A starts | Start pouring concrete (A) → start leveling it (B). |
| **Finish-to-Finish (FF)** | Finish A, then Finish B | B can't finish until A finishes | Finish writing code (A) → finish testing it (B). |
| **Start-to-Finish (SF)** | Start A, then Finish B | B can't finish until A starts | Start new on-call shift (A) → finish old shift (B). *Rare.* |

**Leads and lags** are the fine-tuning knobs on those links:

- A **lead** *pulls the successor earlier* — overlap. "Start testing 2 days before coding finishes" is an FS link with a **2-day lead** (often written as FS − 2d).
- A **lag** *pushes the successor later* — a waiting gap. "Apply second coat 24 hours after the first" is an FS link with a **1-day lag** (FS + 1d). The catch worth remembering: a lag is *imposed waiting time*, not slow work.

> 🔁 **Sales → PM bridge:** You've been using lag for years without naming it. "Send the follow-up email **3 days after** the demo" is a Finish-to-Start link with a 3-day lag. And running discovery for two accounts *at the same time*? That's a Start-to-Start relationship. The sequencing logic isn't new to you — only the labels are.

## 3) The network diagram and the Critical Path Method (CPM)

A **network diagram** (precedence diagram) draws your activities as boxes and your dependencies as arrows. Once it's on the page, you can compute the **critical path**: the *longest* path of dependent activities through the network, which determines the *shortest possible* time to finish the project.

That sounds backwards the first time you hear it, so sit with it for a second — it's the plot twist of this whole module. The longest chain of must-happen-in-order work sets the *floor* on your duration. If that chain is 20 days, the project cannot finish in fewer than 20 days, no matter how fast everything else sprints.

Here's a small network. Each node shows the activity and its duration in days.

```mermaid
flowchart LR
    Start(("Start")) --> A["A Design 3d"]
    A --> B["B Build API 5d"]
    A --> C["C Build UI 4d"]
    B --> D["D Integrate 2d"]
    C --> D
    D --> E["E Test 3d"]
    E --> Finish(("Finish"))
    classDef crit fill:#ffdddd,stroke:#cc0000,stroke-width:2px;
    class A,B,D,E crit
```
*A small network. The highlighted path A → B → D → E is the critical path (3+5+2+3 = 13 days). The path through C is shorter, so C gets some breathing room (float).*

<!-- mobile-diagram:07-schedule-management-2 -->
<details><summary>🖼️ Tap to view as an image (for the GitHub mobile app)</summary>

<img src="diagrams/07-schedule-management-2.png" alt="A small network. The highlighted path A → B → D → E is the critical path (3+5+2+3 = 13 days). The path through C is shor" />

</details>
<!-- /mobile-diagram -->

### Forward pass, backward pass — in plain language

Two passes give you four numbers per activity: **Early Start (ES), Early Finish (EF), Late Start (LS), Late Finish (LF)**. Think of them as the earliest and latest a thing could politely happen.

**Forward pass — "how soon can it happen?"** Walk left to right.
- First activity's ES = 0 (or day 1, depending on convention; we'll use 0).
- **EF = ES + duration.**
- The next activity's ES = the **largest** EF of all its predecessors (you wait for the slowest input — same as always).

**Backward pass — "how late can it slip without delaying the project?"** Walk right to left.
- Last activity's LF = its EF (the project end).
- **LS = LF − duration.**
- A predecessor's LF = the **smallest** LS of its successors.

### Float (slack) and why the critical path matters

**Total float** = LS − ES (equivalently LF − EF). It's how much an activity can slip without pushing out the *project* end date — its margin for error.

- **Critical path activities have zero float.** Slip one day, slip the whole project. These are the deals that *absolutely must* move this week.
- **Non-critical activities have positive float** — wiggle room. Activity C above can take an extra day or two before anyone needs to worry.

Run the numbers on the diagram (project length = 13 days):

| Activity | Dur | ES | EF | LS | LF | Float | Critical? |
|---|---|---|---|---|---|---|---|
| A | 3 | 0 | 3 | 0 | 3 | 0 | ✅ |
| B | 5 | 3 | 8 | 3 | 8 | 0 | ✅ |
| C | 4 | 3 | 7 | 4 | 8 | 1 | ❌ |
| D | 2 | 8 | 10 | 8 | 10 | 0 | ✅ |
| E | 3 | 10 | 13 | 10 | 13 | 0 | ✅ |

Why this matters: the critical path tells you **where to spend your attention** when you can't watch everything (and you never can). Watch the zero-float activities like a hawk. And here's the part people forget under deadline pressure — if you want to finish faster, you *must* shorten the critical path. Speeding up C does absolutely nothing for the end date. Pour your energy there and you've burned effort for zero reward.

> 🔁 **Sales → PM bridge:** Working backward from a quarter-end close date to figure out which deals *must* move this week — that, my friend, is literally a backward pass. The deals with no room to slip are your critical path. The ones you could push to next month without missing the number have float. You've been running CPM in your head for years; you just never drew the boxes.

## 4) Estimating durations

You need a number of days for each activity. There are three respectable ways to get one — and you pick based on how much real data you've got to work with.

| Method | How it works | Accuracy | Use when |
|---|---|---|---|
| **Analogous** (top-down) | "Last similar project's login took 6 days, so ~6 here." | Low — fast & cheap | Early, little detail, similar past work exists |
| **Parametric** | Use a rate: 500 lines ÷ 100 lines/day = 5 days. | Medium–high | You have a measurable unit and a known rate |
| **Three-point / PERT** | Blend optimistic, most likely, pessimistic. | Higher — accounts for uncertainty | Risky or unfamiliar activities |

### Three-point and the PERT formula

Instead of one brave little guess, you gather three: **Optimistic (O)**, **Most Likely (M)**, **Pessimistic (P)**. The **PERT** (beta) estimate weights the most likely outcome four times — because reality usually lands near "most likely," not at either extreme:

**`Estimate = (O + 4M + P) / 6`**

Example: a tricky integration. O = 4 days, M = 6 days, P = 14 days.
`(4 + (4 × 6) + 14) / 6 = (4 + 24 + 14) / 6 = 42 / 6 = 7 days.`

Notice the answer (7) sits *above* the most likely (6), because that long tail of bad days drags it up — and that's exactly the point. A plain average of the three would be (4 + 6 + 14) / 3 = 8 days; PERT's 4× weight on the most likely value keeps the estimate grounded nearer reality at 7. It respects your pessimism without letting it run the show.

> Quick aside: PERT can also estimate the spread via **standard deviation = (P − O) / 6**. Here that's (14 − 4) / 6 ≈ 1.7 days, which tells you how confident to be. You don't need this for every task — but for the high-stakes ones, it's a lovely little reality check.

## 5) Gantt charts and milestones

A **Gantt chart** is a bar chart laid against a calendar: each activity is a horizontal bar whose length is its duration and whose position is its start date. It's the single most common way to *communicate* a schedule, because anyone can read it at a glance — no CPM training, no decoder ring required. This is the version you show people.

A **milestone** is a significant point in time with **zero duration** — "Design approved," "Beta launched," "Go-live." Milestones are how executives track you, so choose them to mark real, verifiable events, not vibes.

```mermaid
gantt
    title Sample Project Schedule
    dateFormat YYYY-MM-DD
    section Design
    Design wireframes      :a1, 2026-07-01, 3d
    Design approved        :milestone, m1, 2026-07-04, 0d
    section Build
    Build API              :a2, after a1, 5d
    Build UI               :a3, after a1, 4d
    section Integrate and Test
    Integrate              :a4, after a2, 2d
    Test                   :a5, after a4, 3d
    Go-live                :milestone, m2, after a5, 0d
```
*A Gantt view of the very same project. Bars show duration on the calendar; the diamonds (milestones) mark zero-duration events like approvals and go-live.*

<!-- mobile-diagram:07-schedule-management-3 -->
<details><summary>🖼️ Tap to view as an image (for the GitHub mobile app)</summary>

<img src="diagrams/07-schedule-management-3.png" alt="A Gantt view of the very same project. Bars show duration on the calendar; the diamonds (milestones) mark zero-duration " />

</details>
<!-- /mobile-diagram -->

The Gantt and the network diagram describe the *same* schedule — the network shows the *logic*, the Gantt shows the *calendar*. So build with the network, then present with the Gantt. One's your workshop, the other's your front window.

## 6) Schedule compression: when the date moves up

Your sponsor leans in and says "we need this two weeks sooner." Deep breath. You have exactly two honest levers, and both only matter when you apply them to the **critical path** — compressing anything else is effort poured straight down the drain.

| Technique | What you do | The cost | Best when |
|---|---|---|---|
| **Crashing** | Add resources to critical activities (more people, overtime, paid expediting) | **Costs more money**; risk of diminishing returns (9 women can't make a baby in 1 month) | Budget exists and the task can absorb more hands |
| **Fast-tracking** | Run activities in **parallel** that were planned in sequence | **Adds risk** of rework (you start downstream work on unfinished inputs) | Activities can partially overlap and you can tolerate rework risk |

```mermaid
flowchart TD
    A["Deadline moved earlier?"] --> B{"Have budget?"}
    B -->|"Yes"| C["Crash the critical path<br/>add resources, costs money"]
    B -->|"No"| D{"Can tasks overlap?"}
    D -->|"Yes"| E["Fast-track<br/>parallelize, adds risk"]
    D -->|"No"| F["Renegotiate scope or date"]
```
*Choosing a compression technique: money buys crashing, tolerance for risk buys fast-tracking, and neither one means it's time for a grown-up scope/date conversation.*

<!-- mobile-diagram:07-schedule-management-4 -->
<details><summary>🖼️ Tap to view as an image (for the GitHub mobile app)</summary>

<img src="diagrams/07-schedule-management-4.png" alt="Choosing a compression technique: money buys crashing, tolerance for risk buys fast-tracking, and neither one means it's" />

</details>
<!-- /mobile-diagram -->

The line to tattoo on your brain: **crashing trades money for time; fast-tracking trades risk for time.** There is no such thing as free compression. If someone promises you free compression, smile politely — because you're about to inherit hidden cost or hidden risk, and it's better to know which.

## 7) Resource leveling and smoothing (briefly)

Two ways to handle people who are over-allocated — that is, asked to be in two places at once:

- **Resource leveling** — you adjust start/finish dates to fit limited resources (one developer can't do two activities at the same time, so one slides). This **can change the critical path and may extend the end date.** It respects the resource limit above all else, even if that costs you days.
- **Resource smoothing** — you adjust work *within the available float only*, so the end date and critical path **don't change.** It's the gentler cousin; it just flattens the peaks and valleys of demand without moving the finish line.

Memory hook: **Leveling** can *lengthen* the project; **smoothing** stays snug inside the slack you already have.

## ⏸️ Pause & reflect

This is a perfectly good place to set the book down, stretch, and come back later — the CPM mechanics above are the densest stretch of the module, and they genuinely read better with a fresh head and a refilled cup.

Before you move on, sit with these:

1. Picture a past quarter. What was *your* critical path — the two or three deals that, if they slipped, the whole number missed?
2. Where in your old workflow did you naturally **fast-track** (overlap steps) versus **crash** (throw your own overtime at it)? And be honest — which one came back to bite you with rework later?
3. Which estimating method matches how you used to forecast a deal's close date — analogous ("deals like this usually take 3 weeks") or three-point ("best case Friday, worst case end of month")?

## 🧠 Check yourself

**1. What is the critical path, in one sentence?**
<details><summary>Show answer</summary>
The longest path of dependent activities through the network diagram, which determines the shortest possible duration of the project. Activities on it have zero float.
</details>

**2. An activity has ES = 5, LS = 9. What is its total float, and is it on the critical path?**
<details><summary>Show answer</summary>
Total float = LS − ES = 9 − 5 = **4 days**. Because float is greater than zero, it is **not** on the critical path.
</details>

**3. Compute the PERT estimate for O = 3, M = 5, P = 13.**
<details><summary>Show answer</summary>
(O + 4M + P) / 6 = (3 + 20 + 13) / 6 = 36 / 6 = **6 days**.
</details>

**4. You must finish 2 weeks early and you have spare budget but the team is already maxed on overtime risk. Crash or fast-track?**
<details><summary>Show answer</summary>
**Crashing** — you have budget to add resources to the critical path. Fast-tracking would add rework risk; crashing spends money instead, which is the lever you actually have. (Always verify the added resources land on critical-path activities.)
</details>

**5. "Apply the second coat of paint 24 hours after the first coat" — what dependency and modifier is this?**
<details><summary>Show answer</summary>
A **Finish-to-Start (FS)** dependency with a **1-day lag**. The lag is imposed waiting time (drying), not slow work.
</details>

**6. What's the difference between resource leveling and resource smoothing?**
<details><summary>Show answer</summary>
**Leveling** adjusts dates to fit limited resources and *may extend* the project end date / change the critical path. **Smoothing** only shifts work within existing float, so the end date and critical path stay the same.
</details>

## 🧰 Try it

Grab a small, real goal — say, "Prepare and deliver a client demo." Do this whole thing on one page:

1. List **5–7 activities** (verbs): e.g., gather requirements, build demo data, script the walkthrough, dry-run, deliver.
2. Mark the **dependencies** — which can't start until another finishes (FS), and any you could overlap (SS).
3. Put a **duration** on each. For the riskiest one, use PERT: write your O, M, P and compute (O + 4M + P) / 6.
4. Sketch the **network** (boxes and arrows) and trace the **longest path** — that's your critical path.
5. Now the plot twist: pretend the demo just got moved up two days. Decide — **crash** (who or what would you add?) or **fast-track** (which two activities would you overlap, and what could go wrong)?

If you can do this for a 6-activity project, you can do it for a 60-activity one. Same moves, bigger stage.

## 🔑 Key terms

- **Activity** — A discrete unit of scheduled work, decomposed from a WBS work package.
- **Dependency (logical relationship)** — How two activities connect: FS, SS, FF, or SF.
- **Lead / Lag** — A modifier that overlaps (lead) or delays (lag) a successor relative to its predecessor.
- **Network diagram** — A graph of activities (nodes) and dependencies (arrows) used to compute the schedule.
- **Critical Path Method (CPM)** — Technique to find the longest path and the shortest project duration via forward/backward passes.
- **Float / Slack (total float)** — How long an activity can slip without delaying the project; LS − ES. Critical-path activities have zero.
- **Forward pass / Backward pass** — Left-to-right calculation of ES/EF; right-to-left calculation of LS/LF.
- **Analogous / Parametric / Three-point (PERT)** — Estimating methods: by similarity, by rate, and by weighted O/M/P average — (O + 4M + P) / 6.
- **Gantt chart** — A calendar bar chart of activities; the standard way to communicate a schedule.
- **Milestone** — A zero-duration marker of a significant event (e.g., approval, go-live).
- **Crashing** — Compressing the schedule by adding resources; costs money.
- **Fast-tracking** — Compressing by running sequential activities in parallel; adds risk.
- **Resource leveling / smoothing** — Resolving over-allocation; leveling may extend the schedule, smoothing stays within float.

---
⬅️ **Previous:** [Module 06 — Scope Management](06-scope-management.md) · 🏠 **[Reviewer Home](../README.md)** · ➡️ **Next:** [Module 08 — Cost & Budget Management](08-cost-and-budget.md)
