# AI RULES

## Rules for All AI-Assisted Development Work

---

## 1. Workflow

Follow this process for every meaningful change:

**Understand → Inspect → Plan → Obtain approval when necessary → Implement → Test → Correct → Document → Report**

### Understand
Read the prompt or task carefully. Identify what is being asked and what constraints apply.

### Inspect
Before changing files, inspect the existing implementation. Identify the files involved, understand dependencies, and preserve working functionality.

### Plan
Determine the smallest suitable change. Do not plan a full rebuild when a targeted edit is sufficient.

### Obtain approval when necessary
Major changes to approved design, architecture, functionality, or deployment decisions require the project owner's approval before implementation. Do not repeatedly ask for approval on minor implementation details covered by the approved design system.

### Implement
Write clean, readable code. Follow the approved technology stack and styling rules. Keep components focused and manageable in size.

### Test
Run available checks (lint, production build). Verify functionality. Do not claim a feature works unless it has been tested.

### Correct
If a check fails, investigate and correct the root cause before declaring the stage complete. Do not suppress or simplify failing checks to manufacture a green result.

### Document
Update relevant documentation when an approved decision, workflow, or requirement changes. Keep documentation consistent with the actual project.

### Report
Report honestly: what was completed, what was modified, what was tested, what failed, what is unresolved, and what requires approval.

---

## 2. Targeted Changes

- Prefer focused edits over complete rewrites.
- Do not rebuild working features to match a preferred coding style.
- Do not delete approved features or documentation.
- Preserve existing functionality unless a change is explicitly required.

---

## 3. Beginner-Readable Code

- Write simple, clear JavaScript.
- Use meaningful filenames and component names.
- Avoid unnecessary abstractions and overengineering.
- Keep components small and focused.
- Add comments only where they clarify non-obvious decisions.
- Mark genuinely advanced JavaScript with `// JS / ADVANCED — LEARN LATER` and a short explanation.
- Do not add JavaScript when HTML and Tailwind CSS are sufficient.

---

## 4. Academic Accuracy

- Never invent or assume academic information.
- Verify that online sources refer to the correct person.
- Record sources and unresolved questions in `RESEARCH_REGISTER.md`.
- Use explicit placeholders during development; never present placeholders as verified facts.
- Content representing Dr. Linus's professional identity requires approval before public release.

---

## 5. Honest Reporting

At the end of each meaningful stage, report:

- What was completed.
- Files created or modified.
- Dependencies added or changed.
- Tests performed and actual results.
- Known issues, missing information, and unverified content.
- Outstanding decisions.
- Recommended next step.

Distinguish between implemented, tested, planned, blocked, and unverified work. Never fabricate test results or claim success without evidence.
