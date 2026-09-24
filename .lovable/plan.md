# Expand the Usifolio Projects section

## Goal
Keep the current terminal-style portfolio intact while adding three technically substantial projects, recruiter-friendly details, and the requested project order.

## What will change
- Preserve the existing project-card layout, dark terminal palette, typography, motion, navigation, About, and Contact.
- Add **Multi-Agent AI System** first, identified as `Snoonu · AI Operations Internship` and `INTERNSHIP PROJECT · PROPRIETARY`.
- Add **WHOOP BLE Tracker** second, identified as `PERSONAL PROJECT · IN DEVELOPMENT`, using the supplied tracker screenshot at its original aspect ratio.
- Keep **Esh7an** third with its current image, content, and working link.
- Add **IVR Backend Refactoring** fourth, identified as `Snoonu · AI Operations Internship` and `INTERNSHIP PROJECT · PROPRIETARY`.
- Keep **Lab Portal**, **Vertere Project**, and **Usifolio** afterward with their current images, information, and links.
- Retain the existing GitHub profile link, but add no source-code links to either proprietary internship project.

## Project details experience
- Add a clear `VIEW PROJECT →` control to the three substantial new projects.
- Open a focused, scrollable detail window that works on desktop and mobile.
- Use concise numbered sections for overview, problem, contribution, architecture, technologies, status, and visuals where relevant.
- Keep supporting content short and scannable rather than turning it into long-form essays.

## Visuals
- Build a new sanitized terminal-style architecture diagram for the Multi-Agent AI System using only generic public labels and the conceptual flow provided.
- Build a new sanitized `BEFORE → AFTER` architecture diagram for IVR refactoring.
- Do not copy, embed, publish, or reproduce details from the supplied internal workflow and code screenshots.
- Use the supplied WHOOP tracker screenshot directly as the main WHOOP visual.
- Add a small conceptual WHOOP data-flow diagram beneath the screenshot without inventing protocol details.

## Technical details
- Use existing semantic color tokens and existing button/dialog components.
- Store the WHOOP screenshot through the project asset flow and import its pointer.
- Keep cards keyboard accessible; external links continue opening safely in a new tab.
- Prevent a card click from accidentally opening an external URL when the project-detail control is used.
- Verify card order, labels, links, modal behavior, image presentation, and mobile layout in the running preview.
