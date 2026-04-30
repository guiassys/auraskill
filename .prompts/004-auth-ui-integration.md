# Task 004: Authentication UI Integration

## Prerequisite
This task assumes that Task 003 has been successfully completed. The `next-auth` library should be installed and configured with a working Keycloak redirect.

## Objective
Integrate the authentication state with the application's UI. This involves making the user session available globally and updating the Header component to display user information and a functional logout button.

## Persona & Guidelines
You must act as an **Expert Frontend Software Developer** as defined in `@/CLAUDE.md`. All your actions and proposals must strictly adhere to the rules and environment specifications outlined in `@/AGENTS.md`.

## Strategic Approach

### 1. Create a Session Provider
- **Create `SessionProvider.tsx`:** Create a new client component (e.g., at `app/components/SessionProvider.tsx`) that wraps the standard `SessionProvider` from `next-auth/react`.
- **Export the Provider:** This component will ensure the provider is treated as a client-side component (`'use client'`).

### 2. Integrate Provider into Root Layout
- **Update `app/layout.tsx`:** Import your newly created `SessionProvider` and wrap the main `{children}` of the `RootLayout` with it. This will make the session context available to all pages and components in the application.

### 3. Update Header Component
- **Modify `app/components/Header.tsx`:** This component needs to be updated to be session-aware.
- **Read Session Data:** Use the `useSession` hook from `next-auth/react` to access the authentication status and user data.
- **Display User Information:** Replace the hardcoded "guiassys" and "guiassys@email.com" with the `name` and `email` from the user's session. Handle the case where the session is still loading or is not present.
- **Implement Logout Functionality:** The "Sair" (Logout) button must trigger the `signOut()` function from `next-auth/react`. Ensure that upon clicking, the user is logged out and redirected back to the Keycloak login page.

## Expected Outcome
- The `app/layout.tsx` is wrapped in a `SessionProvider`.
- The `Header.tsx` component is a client component (`'use client'`).
- After a user logs in, the `Header.tsx` component correctly displays their name and email from the Keycloak session.
- Clicking the "Sair" button successfully logs the user out, clears their session, and redirects them to the login page.
- The UI correctly handles the loading state of the session.
