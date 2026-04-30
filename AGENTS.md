# Vibe Code - General Development Guidelines

This document outlines the general best practices to be followed by any AI agent working on this project.

## Core Principles

1.  **Propose Before Changing:** Always request authorization before modifying the source code. Present your proposed changes and wait for developer approval.
2.  **Simplicity and Maintenance:** Keep the code simple to facilitate maintenance. Make the minimum changes necessary to achieve the desired goal.
3.  **Don't Break What Works:** Avoid breaking existing functionality. Your changes should be incremental improvements.
4.  **No Code Repetition (DRY):** Follow the "Don't Repeat Yourself" principle.
5.  **English Only:** All source code, comments, logs, and user-facing messages must be in English.

## Technical Implementation

6.  **Design Patterns:** Apply relevant Design Patterns where applicable.
7.  **Clean Code & SOLID:** Adhere to Clean Code principles and the SOLID paradigm.
8.  **Defensive & Secure Implementation:**
    *   Implement defensive coding practices to handle unexpected states and inputs.
    *   Ensure security measures are in place to prevent common vulnerabilities (e.g., SQL Injection, XSS).
9.  **Configuration Files:** Do not use hardcoded parameters. All system configurations must be stored in dedicated configuration files.

---

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
