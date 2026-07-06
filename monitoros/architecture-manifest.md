# MonitorOS™ Architecture Manifest

## Purpose
This file defines the internal engineering structure for MonitorOS™ so the CTO / Engineering Agent™ can guide development consistently.

## Core Product Flow
Signal → Review → Proof → Decision → Learning

## Primary Directories

| Directory | Purpose |
|---|---|
| app/ | Next.js application routes and page shell |
| components/ | Reusable UI components |
| lib/ | Shared utilities, helpers, and business logic |
| data/ | JSON-driven scenarios and demo data |
| public/ | Logos, images, icons, and static assets |
| monitoros/ | Product architecture, release rules, validation standards |
| docs/cto-agent/ | CTO Agent operating documentation |
| .github/workflows/ | Automated build and quality checks |

## Engineering Rule
No feature should be built as a one-off page if it can become a reusable component.
