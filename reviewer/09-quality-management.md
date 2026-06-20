# Module 09 — Quality Management

> **Estimated study time:** ~40 min · **Level:** Intermediate · **Prerequisites:** [Module 06](06-scope-management.md). Part of the **Sales -> Project Management Reviewer**.

*The deal that closes beautifully and then quietly falls apart three months later — this whole module is the post-mortem on that heartbreak, and how to prevent the sequel.*

## 🎯 What you'll be able to do

- [ ] Tell the difference between **quality** and **grade** — and stop using them as synonyms.
- [ ] Explain how **Quality Assurance (prevention)** differs from **Quality Control (inspection)**.
- [ ] Use the **Cost of Quality** model to argue why spending early saves money later.
- [ ] Pick the right tool from the **seven basic quality tools** for a given problem.
- [ ] Run a **PDCA** loop and describe **Kaizen**, **Lean**, and **Six Sigma** in a sentence each.

## 👋 From your mentor

Okay, real talk: you already manage quality every single day, you just never called it that. You know the one — the deal that closes, everyone high-fives, and then three months later the customer ghosts you and churns. The "deliverable" looked great on the demo and turned out to be a bad match in real life. That ache, that gap between *what was promised* and *what was actually delivered* — congratulations, that's the entire field of quality management, and you've been living it.

In sales you *feel* quality through renewals, referrals, and refunds — the emotional aftermath. In project management we do something kinder to your future self: we make that feeling **measurable and preventable** instead of reactive. This module hands you the vocabulary and the tools so you stop firefighting defects at 11pm and start designing them out before they're ever born. It ties straight back to the scope and requirements you nailed down in Module 06 — because at heart, quality is just "did we build what we said we'd build, and does the thing actually *work*?"

---

## 1. Quality vs. Grade

These two words get swapped constantly, like two characters who keep getting mistaken for each other — and mixing them up will burn you on the PMP exam *and* in a real planning meeting where it matters.

- **Quality** = the degree to which the deliverable meets **requirements** and is **fit for purpose** and **defect-free**. It's about whether the thing *works as promised*.
- **Grade** = a category assigned to deliverables that have the **same functional use but different technical characteristics** (feature richness, materials, capability tier).

The line to tattoo on your brain: **Low quality is always a problem. Low grade may not be.**

| Scenario | Grade | Quality | Acceptable? |
|---|---|---|---|
| Budget laptop, no defects, does what's promised | Low | High | ✅ Yes — fit for purpose |
| Premium laptop that crashes constantly | High | Low | ❌ No — defective |
| Free CRM tier, reliable, limited features | Low | High | ✅ Yes |
| Enterprise CRM, feature-packed, loses data | High | Low | ❌ No |

A simple, reliable economy car is **high quality, low grade** — and honestly, that's a perfectly happy ending. A gorgeous luxury car that won't start is **high grade, low quality** — and that's the plot twist nobody wants. As a PM, you deliver the grade the customer **paid for** and the quality they **always deserve**. Non-negotiable.

> 🔁 **Sales → PM bridge:** Think of the pricing tiers you sell — Bronze, Silver, Gold. Those tiers are **grade**: same product family, different feature sets. A customer who buys Bronze isn't getting "low quality" — they're getting a lower grade that should still work flawlessly. Selling Bronze as if it were Gold is a *grade* mismatch; selling something that's broken is a *quality* failure. Your job is to set grade expectations honestly and never, ever compromise on quality.

---

## 2. The three quality processes

PMI splits quality work into three processes, like a tidy little three-act structure. Knowing which is which — and what each one *cares about* — is the single most-tested distinction in this whole module.

| Process | Process group | Focus | Question it answers |
|---|---|---|---|
| **Plan Quality Management** | Planning | The standard | "What does *good* look like, and how will we know?" |
| **Manage Quality** (QA) | Executing | The **process** — prevention | "Are we *doing the right things* to build it well?" |
| **Control Quality** (QC) | Monitoring & Controlling | The **product** — inspection | "Did this specific deliverable *come out right*?" |

### Plan Quality Management

This is where you decide the **quality standards** for the project and how you'll **demonstrate compliance**. Outputs include the **quality management plan**, **quality metrics** (the actual measurements, e.g. "page load under 2 seconds," "defect rate below 1%"), and a clear definition of what "acceptable" even means. You can't control quality you never defined — set the bar before anyone starts jumping.

### Manage Quality = Quality Assurance (QA)

QA is **process-focused** and about **prevention**. You audit your *processes* to make sure they're capable of producing good output in the first place. Think audits, process improvement, design reviews, and **building quality into the way you work** so defects never even get conceived. QA is the proactive one: "Is our process sound?"

### Control Quality = Quality Control (QC)

QC is **product-focused** and about **inspection**. You examine the *actual deliverables* to catch defects before they reach the customer. Think testing, measuring, peer reviews of finished work, and accept/reject calls. QC catches problems after they exist: "Did this unit pass?"

```mermaid
flowchart LR
    P["Plan Quality (set the standard)"] --> QA["Manage Quality / QA (improve the process)"]
    QA --> Build["Build deliverable"]
    Build --> QC["Control Quality / QC (inspect the product)"]
    QC -->|Pass| Accept["Verified deliverable"]
    QC -->|Fail| Fix["Rework + feed lessons back"]
    Fix --> QA
```
*Plan sets the bar, QA shapes the process that builds it, QC inspects what came out — and every failure loops back to make the process smarter.*

<!-- mobile-diagram:09-quality-management-1 -->
<details><summary>🖼️ View as image (for the GitHub mobile app)</summary>

<img src="diagrams/09-quality-management-1.png" alt="Plan sets the bar, QA shapes the process that builds it, QC inspects what came out — and every failure loops back to mak" />

</details>
<!-- /mobile-diagram -->

> 🔁 **Sales → PM bridge:** QA is like building a **repeatable sales playbook** — a tested discovery script, a qualification checklist, a demo flow — so *every* rep produces good calls by default. QC is like **listening to a recorded call afterward** to check whether it cleared the bar. The playbook (QA, prevention) scales gorgeously; reviewing every single call one by one (QC, inspection) does not. Smart teams pour their love into the playbook.

---

## 3. Cost of Quality (CoQ)

**Cost of Quality** is the total cost of *all* the effort tied to quality across the product's whole life — both the money you spend to *get it right* and the money you bleed when you *get it wrong*. It splits into two buckets, and the contrast between them is the whole moral of the story.

### Cost of Conformance (money spent to PREVENT failure)

| Category | What it is | Examples |
|---|---|---|
| **Prevention costs** | Building quality in | Training, documenting processes, good tooling, design reviews |
| **Appraisal costs** | Checking quality | Testing, inspections, audits, code review |

### Cost of Non-Conformance (money lost BECAUSE of failure)

| Category | What it is | Examples |
|---|---|---|
| **Internal failure costs** | Defects found **before** delivery | Rework, scrap, fixing bugs in-house |
| **External failure costs** | Defects found **after** delivery, by the customer | Warranty claims, recalls, refunds, lost business, damaged reputation |

Here's the entire punchline of CoQ: **prevention is dramatically cheaper than failure**, and the cost of a defect climbs the longer it stays hidden. People call this the "1-10-100 rule" — a defect that costs roughly **$1** to prevent costs about **$10** to fix during inspection and a brutal **$100** once it's already in the customer's hands.

```mermaid
flowchart LR
    A["Conformance: spend a little"] --> B["Prevention (cheapest)"]
    A --> C["Appraisal"]
    D["Non-conformance: pay a lot"] --> E["Internal failure (rework)"]
    D --> F["External failure (most expensive)"]
    B -.->|avoids| E
    B -.->|avoids| F
```
*Every dollar you spend on the left (conformance) quietly buys down many dollars on the right (failure).*

<!-- mobile-diagram:09-quality-management-2 -->
<details><summary>🖼️ View as image (for the GitHub mobile app)</summary>

<img src="diagrams/09-quality-management-2.png" alt="Every dollar you spend on the left (conformance) quietly buys down many dollars on the right (failure)." />

</details>
<!-- /mobile-diagram -->

> 🔁 **Sales → PM bridge:** You already know **external failure cost** in your bones — it's the **churned customer**, the **chargeback**, the **furious one-star review**, the **referral you'll now never get**. Spending one honest hour up front qualifying a deal properly (prevention) is pocket change next to the months you'll burn babysitting and then losing a bad-fit account (external failure). CoQ just slaps a number on the instinct you already trust.

---

## 4. The seven basic quality tools

These seven (sometimes called the "7 QC tools") are the classic toolkit for sniffing out and analyzing quality problems. Good news: you don't need to be a statistician. You just need to know *which tool answers which question* — think of it as knowing which friend to call for which kind of crisis.

| # | Tool | What it does | Use it when you ask... |
|---|---|---|---|
| 1 | **Cause-and-effect (Ishikawa / fishbone)** | Maps possible causes of a problem by category | "*Why* is this happening?" |
| 2 | **Pareto chart** | Bar chart ranking causes by frequency (80/20) | "Which *few* causes drive most defects?" |
| 3 | **Control chart** | Tracks a process over time vs. control limits | "Is the process *stable* / in control?" |
| 4 | **Histogram** | Bar chart of how often values occur (distribution) | "What's the *shape* of my data?" |
| 5 | **Check sheet** | Tally sheet for collecting data as it happens | "How do I *count* defects consistently?" |
| 6 | **Scatter diagram** | Plots two variables to reveal correlation | "Are these two things *related*?" |
| 7 | **Flowchart** | Maps the steps in a process | "*Where* in the process could things go wrong?" |

### Ishikawa / Fishbone — finding root causes

The fishbone is the detective of the bunch: it pushes you past the first obvious suspect into the *categories* of root cause. A common set of category "bones" for manufacturing is the **6 Ms** (Method, Machine, Material, Measurement, Manpower/People, Environment); for services people often reach for the **4 Ps** (People, Process, Policy, Plant).

```mermaid
flowchart LR
    M1["People"] --> P["Problem: late deliverables"]
    M2["Process"] --> P
    M3["Tools"] --> P
    M4["Materials"] --> P
    M5["Measurement"] --> P
    M6["Environment"] --> P
    M1 --> C1["Unclear ownership"]
    M2 --> C2["No handoff checklist"]
    M3 --> C3["Slow build pipeline"]
```
*A fishbone view: the spine points at the problem; each "bone" is a category of suspect worth interrogating.*

<!-- mobile-diagram:09-quality-management-3 -->
<details><summary>🖼️ View as image (for the GitHub mobile app)</summary>

<img src="diagrams/09-quality-management-3.png" alt="A fishbone view: the spine points at the problem; each 'bone' is a category of suspect worth interrogating." />

</details>
<!-- /mobile-diagram -->

### Pareto — focus where it counts

The **Pareto principle** says roughly **80% of effects come from 20% of causes**. A Pareto chart ranks defect types from most to least frequent so you go after the vital few instead of scattering your energy across the trivial many.

```mermaid
pie showData
    title Defects by cause (Pareto view)
    "Login failures" : 42
    "Slow page load" : 27
    "Checkout errors" : 14
    "Display glitches" : 9
    "Other" : 8
```
*The top two causes account for ~69% of defects — fix those first for the biggest payoff.*

<!-- mobile-diagram:09-quality-management-4 -->
<details><summary>🖼️ View as image (for the GitHub mobile app)</summary>

<img src="diagrams/09-quality-management-4.png" alt="The top two causes account for ~69% of defects — fix those first for the biggest payoff." />

</details>
<!-- /mobile-diagram -->

> 🔁 **Sales → PM bridge:** Pareto is just your pipeline instinct dressed up in a chart: a small slice of accounts drives most of your revenue, and a handful of objections kill most of your deals. You already chase the **vital few** instead of spreading yourself thin across everything — that's exactly how a PM decides which defects deserve the attention.

---

## 5. Continuous improvement

Quality isn't a one-and-done gate you slam shut. It's a habit — getting a little better each cycle, the slow burn that pays off.

### PDCA — the Plan-Do-Check-Act cycle

Also called the **Deming cycle** (or Shewhart cycle), PDCA is the engine of continuous improvement. You run it as a loop, not a straight line to a finish.

| Phase | What you do |
|---|---|
| **Plan** | Identify the problem, set a goal, design a small change |
| **Do** | Run the change on a small scale (a pilot) |
| **Check** | Measure results against the goal — did it work? |
| **Act** | If it worked, standardize it; if not, adjust and loop again |

```mermaid
stateDiagram-v2
    [*] --> Plan
    Plan --> Do
    Do --> Check
    Check --> Act
    Act --> Plan: standardize and repeat
```
*PDCA never really "ends" — each Act feeds the next Plan, so improvement quietly compounds.*

<!-- mobile-diagram:09-quality-management-5 -->
<details><summary>🖼️ View as image (for the GitHub mobile app)</summary>

<img src="diagrams/09-quality-management-5.png" alt="PDCA never really 'ends' — each Act feeds the next Plan, so improvement quietly compounds." />

</details>
<!-- /mobile-diagram -->

### Kaizen, Lean, and Six Sigma

- **Kaizen** — Japanese for "change for good / continuous improvement." A philosophy of **small, incremental, everyone-participates** improvements made constantly, rather than rare dramatic overhauls. PDCA is the mechanism; Kaizen is the mindset.
- **Lean** — focuses on **maximizing value by eliminating waste** (anything the customer wouldn't pay for: waiting, rework, overproduction, unnecessary steps).
- **Six Sigma** — a data-driven method to **reduce defects and variation**, targeting fewer than 3.4 defects per million opportunities, often run with the **DMAIC** cycle (Define, Measure, Analyze, Improve, Control). "Lean Six Sigma" simply combines waste reduction with variation reduction.

> 🔁 **Sales → PM bridge:** Every time you tweak your cold-email opener, measure the reply rate, keep what worked, and try the next variation — surprise, you're running **PDCA** and living **Kaizen**. You've been quietly improving your own funnel for years; project quality management is the same discipline, just pointed at deliverables instead of subject lines.

---

## ⏸️ Pause & reflect

Good spot to **stop, breathe, and come back later** if you need to — your progress here is saved by your own understanding, not by powering through in one sitting.

- Picture a past sale where the customer was unhappy after delivery. Was it a **grade** mismatch (they wanted more features) or a **quality** failure (it didn't work)? Naming it right is honestly half the skill.
- Where in *your* current work could a little **prevention** (a checklist, a template, a quick review) save you hours of **external failure** later?

No rush. When you're ready, the self-test is right below.

---

## 🧠 Check yourself

**1. A reliable economy car with no defects is described how, in quality terms?**

<details><summary>Show answer</summary>

**High quality, low grade.** It's fit for purpose and defect-free (high quality) but has fewer features/characteristics than a luxury model (low grade). Low grade is acceptable; low quality is not.

</details>

**2. You audit your team's *process* to make sure defects don't get created. QA or QC?**

<details><summary>Show answer</summary>

**Quality Assurance (Manage Quality).** It's **process-focused** and about **prevention**. QC, by contrast, **inspects the finished product** to catch defects.

</details>

**3. A customer reports a defect after delivery and demands a refund. Which Cost of Quality category?**

<details><summary>Show answer</summary>

**External failure cost** — a cost of **non-conformance** discovered *after* the deliverable reached the customer. These are the most expensive defects of all.

</details>

**4. Which of the seven tools would you use to find the *root causes* of a recurring problem?**

<details><summary>Show answer</summary>

The **cause-and-effect (Ishikawa / fishbone) diagram**, which organizes possible causes by category. To then decide *which* causes to tackle first, you'd pair it with a **Pareto chart**.

</details>

**5. What does the "Check" step of PDCA do?**

<details><summary>Show answer</summary>

You **measure the results** of the change you piloted in "Do" against the goal you set in "Plan" to see whether it actually worked. Based on that, "Act" either standardizes the change or adjusts and loops again.

</details>

**6. In one line, how does Six Sigma differ from Lean?**

<details><summary>Show answer</summary>

**Six Sigma** reduces **defects and variation** (data-driven, via DMAIC); **Lean** reduces **waste** to maximize customer value. Combined, they're "Lean Six Sigma."

</details>

---

## 🧰 Try it

Pick one recurring problem from your own world — late follow-ups, a report that's always wrong, a demo step that keeps breaking right when someone important is watching. Then:

1. **Draw a quick fishbone** (paper is totally fine). Write the problem at the head. Add 3-4 category bones (People, Process, Tools, Environment) and brainstorm at least one cause under each.
2. **Run one PDCA loop on the biggest cause.** Write a one-sentence *Plan* ("If I add a handoff checklist, fewer items will slip"), describe how you'd *Do* it for a week, what you'd *Check* (how many slipped?), and how you'd *Act* on the result.
3. **Classify the cost.** If this problem reaches the customer, is it internal or external failure? Estimate roughly what one prevention step would cost versus one failure event.

Five minutes of this beats an hour of theory. You've just done real quality management — no pop quiz required.

---

## 🔑 Key terms

- **Quality** — degree to which a deliverable meets requirements and is fit for purpose and defect-free.
- **Grade** — a category of deliverables with the same use but different technical characteristics (feature richness).
- **Quality Assurance (Manage Quality)** — process-focused, prevention-oriented quality work.
- **Quality Control (Control Quality)** — product-focused, inspection-oriented quality work.
- **Cost of Quality (CoQ)** — total cost of conformance (prevention + appraisal) plus non-conformance (internal + external failure).
- **Prevention cost** — money spent building quality in (training, good process, tooling).
- **Appraisal cost** — money spent checking quality (testing, inspection, audits).
- **Internal / external failure cost** — cost of defects found before / after delivery, respectively.
- **Ishikawa (fishbone)** — cause-and-effect diagram that maps root causes by category.
- **Pareto principle** — ~80% of effects come from ~20% of causes; the "vital few."
- **PDCA** — Plan-Do-Check-Act continuous-improvement cycle (Deming cycle).
- **Kaizen** — philosophy of small, continuous, everyone-involved improvement.
- **Lean** — eliminating waste to maximize customer value.
- **Six Sigma** — data-driven reduction of defects and variation (DMAIC; <3.4 defects/million).

---
⬅️ **Previous:** [Module 08 — Cost & Budget Management](08-cost-and-budget.md) · 🏠 **[Reviewer Home](../README.md)** · ➡️ **Next:** [Module 10 — Resources, Teams & Leadership](10-resources-teams-leadership.md)
