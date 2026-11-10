---
title: "ThinkCyber GoPhish (Admin Edition)"
summary: "Privacy-first enterprise Chrome Extension (Manifest V3) protecting K-12 educational administrators from targeted Gmail phishing and credential harvesting, built to strict FERPA/COPPA compliance standards."
date: "2026-08-15"
language: "JavaScript (MV3) / Python (XGBoost)"
role: "Researcher & Core Engineer (Team Project)"
tags: ["Cybersecurity", "Chrome Extension", "Manifest V3", "FERPA / COPPA", "Machine Learning", "DOM MutationObserver", "ThinkCyber"]
mitreTags: ["T1566: Phishing", "T1204: User Execution", "GRC: FERPA / COPPA"]
notPubliclyShared: true
status: "Active"
featured: true
---

## Executive Summary
Developed as part of the **ThinkCyber Foundation Research Fellowship**, **GoPhish (Admin Edition)** serves as a client-side defensive sensor directly within Google Chrome for K-12 educational administrators.

Traditional email gateways often fail against localized spear-phishing targeting student records and W-2 forms. GoPhish evaluates live email DOM components locally inside Gmail to inject color-coded threat advisories without transmitting sensitive student data outside the district boundary.

### Technical Architecture & Dual Tracks
- **Live Browser Sensor (Chrome Extension MV3)**:
  - Engineered in **Vanilla JavaScript (ES6+)** using `content.js` with `MutationObserver` to intercept DOM changes when emails are opened in the Gmail SPA.
  - Evaluates anchor attributes, domain homoglyphs, and sender anomalies.
  - Background service worker (`background.js`) manages Google Workspace enterprise policies via `chrome.storage.managed` and routes sanitized telemetry to district SIEM endpoints.
- **Offline ML Research Pipeline**:
  - Python / Pandas / Scikit-Learn / XGBoost pipeline trained on Kaggle phishing corpora, SpamAssassin datasets, and a custom corpus of 295 Washington State school district domains.
- **Compliance & Governance**:
  - Built strictly under **FERPA**, **COPPA**, and the **Washington SUPER Act (RCW 28A.604)** ensuring zero educational PII leaves the browser runtime.
