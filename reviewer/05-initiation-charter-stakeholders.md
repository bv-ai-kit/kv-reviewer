# Module 05 — Initiation — Business Case, Charter & Stakeholders

> ⏱️ **Estimated study time:** ~35 min · 🎚️ **Level:** Beginner · 📋 **Prerequisites:** [Module 03](03-lifecycle-and-process-groups.md) · Part of the **Sales -> Project Management Reviewer**.

## 🎯 What you'll be able to do

- [ ] Explain why a project exists using a **business case** and a high-level **ROI** argument.
- [ ] Read, critique, and draft a **project charter** with all its standard contents.
- [ ] Identify **stakeholders** early and tell the **sponsor** apart from the **champion**.
- [ ] Document **assumptions and constraints** so they protect you later.
- [ ] Run a **kickoff meeting** that sets the right tone.

## 👋 From your mentor

Here's the good news: you already do initiation every week. Every time you qualify a deal, uncover the customer's *real* need, and get a decision-maker to commit budget — that's chartering. In project management we just write it down and make the authority explicit.

This module is where a project stops being "a good idea someone mentioned" and becomes **officially real**, with a name, a sponsor, money, and *you* in charge. Get this stage right and the whole project breathes easier. Get it wrong — fuzzy goals, no real sponsor, undocumented assumptions — and you'll spend the next six months fighting fires you could have prevented in week one.

---

## Why a project exists: the business case and needs assessment

Before anyone writes a charter, someone has to answer one blunt question: **why are we spending money on this at all?**

A **needs assessment** is the diagnosis. It looks at a business problem or opportunity and asks what the organization actually needs — *before* jumping to a solution. In sales terms, it's discovery: you don't pitch the product until you understand the pain.

The **business case** is the justification document built on that assessment. It argues that the expected **benefits** outweigh the cost and effort. It's owned by the sponsor and the business, *not* by you as PM — but you'll read it constantly, because it's your compass. When someone proposes a shiny new feature mid-project, you ask: "Does that serve the business case?"

A solid business case usually covers:

| Element | What it answers |
| --- | --- |
| **Problem / opportunity** | What pain or chance are we responding to? |
| **Options considered** | What alternatives exist (including "do nothing")? |
| **Recommended option** | Which path and why? |
| **Expected benefits** | Financial and non-financial value we expect |
| **Costs & timeline** | Rough investment and how long |
| **Risks** | What could undermine the value |

### ROI thinking at a high level

You don't need to be a finance major, but you should recognize the language sponsors use to decide *go / no-go*. These are **benefit measurement methods**:

| Term | Plain meaning | Rule of thumb |
| --- | --- | --- |
| **ROI** (Return on Investment) | Gain relative to cost, as a % | Higher is better |
| **NPV** (Net Present Value) | Future cash flows discounted to today's dollars | **Positive** NPV = worth doing; pick the higher NPV |
| **Payback period** | How long until the project pays for itself | Shorter is better |
| **IRR** (Internal Rate of Return) | The interest rate at which NPV equals zero | Higher is better |
| **BCR** (Benefit-Cost Ratio) | Benefits ÷ costs | Greater than 1 is good |

A simple ROI sketch: `ROI = (Net Benefit ÷ Cost) × 100`. If a $50,000 project is expected to generate $80,000 in value, the net benefit is $30,000 and ROI ≈ 60%.

> 💡 You rarely *calculate* these yourself in initiation — the finance or sponsor side does. Your job is to understand the argument so you can defend the project's purpose and recognize when a change request quietly destroys the ROI.

---

## The initiation flow

Here's the path from a half-formed idea to a project with a heartbeat.

```mermaid
flowchart TD
    A["Idea or business problem"] --> B["Needs assessment"]
    B --> C["Business case (benefits, ROI)"]
    C --> D{"Sponsor decision: go?"}
    D -->|No| X["Shelve or rethink"]
    D -->|Yes| E["Project charter drafted"]
    E --> F["Charter approved & signed"]
    F --> G["PM officially authorized"]
    G --> H["Stakeholders identified"]
    H --> I["Kickoff meeting"]
    I --> J["Planning begins"]
```

*From a vague idea to an authorized project: each gate filters out work that isn't worth doing.*

---

## The project charter: your authorization to lead

The **project charter** is the single most important document of initiation. In PMI's *PMBOK® Guide* (7th edition), the charter is the **formal document that authorizes the existence of a project and gives the project manager the authority to apply organizational resources** to project activities.

Three things to lock in:

1. **It authorizes the project.** No charter, no project — it's the official "this is real."
2. **It's issued by the sponsor**, not by you. The sponsor is the senior person funding and backing the project; their signature is what gives the charter its power. (You may *draft* it — and often should — but it must be issued and signed by someone with authority over the budget.)
3. **It names you as PM and defines your authority.** This is the document you point to when someone questions whether you can make a call.

> ⚠️ A common rookie trap: writing your own charter and signing it yourself. That's like a salesperson "approving" their own discount — it carries no weight. Authority has to come from above you.

### Typical charter contents

A charter is short — often one to three pages. It's high-level on purpose; the detail comes later in planning. Standard contents:

| Section | What it contains | Sales analogy |
| --- | --- | --- |
| **Purpose / justification** | Why the project exists (links to the business case) | The customer's core pain |
| **Measurable objectives** | What success looks like, in numbers | The quota / target |
| **High-level scope** | What's broadly in and out | What you're selling vs. not |
| **High-level requirements** | Top-level needs to be met | Must-have features |
| **Milestones** | Major target dates | Key deal-stage dates |
| **Summary budget** | Ballpark money approved | Deal size |
| **Key stakeholders** | Who's involved and affected | The buying committee |
| **Success criteria** | How we'll judge "done and good" | "Closed-won" definition |
| **High-level risks** | Big things that could go wrong | Deal-killers |
| **Assumptions & constraints** | What we're taking as given / our limits | Budget cycle, contract terms |
| **PM name & authority level** | Who leads and how much they can decide | Your rep-of-record authority |
| **Sponsor name & sign-off** | Who's backing and funding it | The economic buyer |

> 🔁 **Sales → PM bridge:** The charter is your project's **signed proposal**. In sales, nobody starts delivering until the prospect signs the SOW or contract — the signature converts interest into commitment and gives you authority to act. The charter does exactly that for a project. The sponsor's signature is your "closed-won," and just like a signed deal, it's what you reach for when scope creep shows up later: "That wasn't in what we agreed."

### Mapping the charter

```mermaid
flowchart TD
    R["Project charter"]
    R --> WHY["Why"]
    R --> WHAT["What"]
    R --> LIM["How much / how limited"]
    R --> WHO["Who"]
    WHY --> WHY1["Purpose"]
    WHY --> WHY2["Business case link"]
    WHY --> WHY3["Success criteria"]
    WHAT --> WHAT1["Objectives"]
    WHAT --> WHAT2["High-level scope"]
    WHAT --> WHAT3["Key requirements"]
    WHAT --> WHAT4["Milestones"]
    LIM --> LIM1["Summary budget"]
    LIM --> LIM2["Assumptions"]
    LIM --> LIM3["Constraints"]
    LIM --> LIM4["High-level risks"]
    WHO --> WHO1["Sponsor"]
    WHO --> WHO2["Project manager"]
    WHO --> WHO3["Key stakeholders"]
    WHO --> WHO4["PM authority level"]
```

*Four questions every charter answers: why, what, how much / how limited, and who.*

---

## Identifying stakeholders early

A **stakeholder** is anyone who can affect, be affected by, or *perceive* themselves to be affected by the project. That last part matters — perception alone makes someone a stakeholder, even if you think they're irrelevant.

Identify them **early and broadly**. The cost of a missed stakeholder rises sharply over time: the legal reviewer you forgot in week one becomes a two-week blocker in week twelve. Start a **stakeholder register** in initiation — a living list of who they are, their interest, their influence, and how they feel about the project.

Two special roles to know cold:

| Role | What they do | Authority |
| --- | --- | --- |
| **Sponsor** | Funds the project, issues the charter, removes high-level obstacles, owns the business case | Formal, top-down — the buck stops here |
| **Champion** | Enthusiastically promotes the project, sells it to peers, builds momentum | Informal, influence-based |

The **sponsor** is your power source — you escalate to them and they clear roadblocks. The **champion** is your amplifier — often a respected colleague who isn't paying for the project but makes everyone else *want* it to succeed. Sometimes one person is both. Often they're not, and you need both.

> 🔁 **Sales → PM bridge:** You already map buying committees. The **economic buyer** who signs the check is your **sponsor**. The **internal advocate** who champions your product in meetings you're not in is your **champion**. The quiet **influencer** who can veto the deal? That's the high-influence, low-interest stakeholder you must keep informed or they'll sink you. Same map, new labels.

---

## Assumptions and constraints: the things that protect you

These two are quiet heroes of initiation. Document them and they shield you. Skip them and they become the reasons a project fails "for no clear reason."

- An **assumption** is something you believe to be true *without proof* and plan around. Example: "The client's data will be available by sprint 2." If that turns out false, your plan breaks — so you write it down and watch it.
- A **constraint** is a real **limiting factor** you must work within. The classic trio is the **triple constraint**: **scope, time, cost** (with quality, resources, and risk close behind). Example: "Must launch before the trade show on March 1" is a time constraint.

| | Assumption | Constraint |
| --- | --- | --- |
| **Nature** | Believed true, unverified | Known limit / boundary |
| **Risk if wrong** | Plan may break | (Not "wrong" — it's a fixed reality) |
| **Example** | "Vendor delivers on time" | "Budget capped at $200k" |
| **Your job** | Validate and monitor it | Plan within it |

**Why writing them down protects you:** every documented assumption is a tripwire. If it later proves false, you have a paper trail showing it was a *known, shared* belief — not your oversight. This is your defense against the dreaded "but you should have known." It turns a finger-pointing argument into a calm "we documented this assumption in the charter; it changed, so here's the impact."

> 💡 Treat each assumption as a small future risk. Many will graduate into your risk register during planning.

---

## The kickoff meeting: setting the tone

Once the charter is signed and stakeholders are identified, you bring people together for the **kickoff meeting**. It's part information-sharing, part ceremony. The content matters, but the *tone* matters just as much — this is the team's first impression of you and the project.

A good kickoff covers:

- **Why** — the purpose and business case, in human language.
- **What** — high-level scope, objectives, and success criteria.
- **Who** — introductions, roles, who the sponsor is, who to go to for what.
- **How** — the approach (predictive, agile, or hybrid — see [Module 04](04-predictive-agile-hybrid.md)), cadence, and communication norms.
- **When** — major milestones on the horizon.
- **Questions & commitment** — space to surface concerns and get visible buy-in.

```mermaid
sequenceDiagram
    participant Sp as Sponsor
    participant PM as Project Manager
    participant St as Key Stakeholders
    PM->>Sp: Draft charter for review
    Sp->>PM: Feedback and adjustments
    PM->>Sp: Revised charter
    Sp->>St: Share intent and confirm support
    St-->>Sp: Concerns and buy-in
    Sp->>PM: Approve and sign charter
    PM->>St: Invite to kickoff meeting
    St-->>PM: Confirm attendance and commitment
```

*Charter approval is a conversation, not a rubber stamp — the PM drafts, the sponsor authorizes, stakeholders buy in.*

> 🔁 **Sales → PM bridge:** Your kickoff is the **discovery + alignment call** you've run a hundred times. You walk in, confirm everyone understands the goal, surface objections early, and leave with verbal commitment. The skill of reading the room, getting the decision-maker to say "yes, this is what we want," and turning skeptics into allies — that's *exactly* what makes a kickoff land. You're not learning a new skill here; you're renaming one you already have.

---

## ⏸️ Pause & reflect

This is a natural place to stop — grab a coffee and come back later if you need to. Initiation is dense, and it's worth letting it settle.

Before you move on, sit with these:

1. Think of a deal you closed. Who was the **economic buyer** (your sponsor) and who was the **internal champion**? Could you name them both, or were you relying on just one?
2. Recall a time a project or deal went sideways because of an **assumption nobody wrote down**. What was it, and how would documenting it have changed the conversation?
3. If a sponsor handed you a one-paragraph charter and said "go," what's the *first* missing piece you'd ask for?

No need to write essays — just notice how much of this you already understand from selling.

---

## 🧠 Check yourself

**1. Who has the authority to issue and sign a project charter?**

<details><summary>Show answer</summary>

The **sponsor** (or someone with authority over the funding/resources). The PM may *draft* the charter, but it must be authorized by someone senior enough to commit the organization's resources. A PM signing their own charter carries no real authority.

</details>

**2. What's the difference between a sponsor and a champion?**

<details><summary>Show answer</summary>

The **sponsor** has *formal* authority — they fund the project, issue the charter, and remove high-level obstacles. The **champion** has *informal* influence — they promote the project and build enthusiasm but typically don't control the budget. One person can be both, but often they're separate.

</details>

**3. Why does documenting an assumption protect you?**

<details><summary>Show answer</summary>

A documented assumption is a shared, agreed-upon belief on the record. If it later proves false, you have a paper trail showing it was a *known* assumption — not your personal oversight. It converts a blame argument into a calm impact discussion, and many assumptions later become tracked risks.

</details>

**4. Name four standard contents of a project charter.**

<details><summary>Show answer</summary>

Any four of: purpose/justification, measurable objectives, high-level scope, high-level requirements, milestones, summary budget, key stakeholders, success criteria, high-level risks, assumptions and constraints, the PM's name and authority level, and the sponsor's sign-off.

</details>

**5. What does a positive NPV tell a sponsor?**

<details><summary>Show answer</summary>

A **positive Net Present Value** means the project's expected future cash flows, discounted to today's dollars, exceed its cost — so it's financially worth doing. When comparing projects, the one with the **higher** NPV is generally preferred.

</details>

**6. What is the "triple constraint"?**

<details><summary>Show answer</summary>

The classic trio of competing project constraints: **scope, time, and cost** (often visualized as a triangle, with **quality** in the middle). Change one and you usually affect the others. Resources and risk are frequently added to the modern view.

</details>

---

## 🧰 Try it

**Draft a one-page charter for a project you'd actually run.**

Pick something real and small — "launch a customer referral program," "migrate the team to a new CRM," "run a Q3 webinar series." Then fill in these lines (one or two sentences each):

1. **Purpose** — why does this exist? (Tie it to a benefit or ROI.)
2. **Objectives** — 2-3 measurable success criteria.
3. **High-level scope** — one sentence on what's in, one on what's out.
4. **Milestones** — 3 major dates.
5. **Sponsor & champion** — name a real person for each.
6. **Two assumptions** — things you're taking as true.
7. **Two constraints** — your real limits (budget, deadline, headcount).
8. **Your authority** — one sentence on what decisions you can make alone.

If you can fill all eight in 20 minutes, you can charter a project. Notice how much of it is just structured discovery — the same instinct you use on every qualified deal.

---

## 🔑 Key terms

- **Business case** — the justification for a project, weighing expected benefits against cost; owned by the sponsor/business.
- **Needs assessment** — analysis of the underlying problem or opportunity *before* choosing a solution.
- **Project charter** — the formal document that authorizes the project's existence and empowers the PM to apply organizational resources.
- **Sponsor** — the senior person who funds the project, issues the charter, and removes high-level obstacles; holds formal authority.
- **Champion** — an enthusiastic advocate who promotes the project and builds momentum; holds informal influence.
- **Stakeholder** — anyone who can affect, be affected by, or perceives themselves affected by the project.
- **Stakeholder register** — a living list of stakeholders with their interest, influence, and attitude.
- **Assumption** — something believed true without proof and planned around.
- **Constraint** — a real limiting factor the project must work within (e.g., scope, time, cost).
- **Triple constraint** — the interdependent trio of scope, time, and cost (with quality at the center).
- **ROI** — Return on Investment; gain relative to cost, expressed as a percentage.
- **NPV** — Net Present Value; future cash flows discounted to today's dollars; positive means worth doing.
- **Kickoff meeting** — the first gathering that aligns the team on why, what, who, how, and when, and sets the project's tone.

---
⬅️ **Previous:** [Module 04 — Predictive, Agile & Hybrid — Choosing Your Approach](04-predictive-agile-hybrid.md) · 🏠 **[Reviewer Home](../README.md)** · ➡️ **Next:** [Module 06 — Scope Management](06-scope-management.md)
