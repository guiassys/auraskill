# Task 003: Integrate Keycloak for Authentication

## Objective
Integrate the application with Keycloak to manage user authentication. The system should protect all pages, redirecting unauthenticated users to a Keycloak login screen. After a successful login, the user's session and access token should be managed by the application for use in backend API requests.

## Requirements

1.  **Authentication Library:** Use a standard, secure library for authentication in Next.js, such as `next-auth`, to facilitate the integration with Keycloak. This aligns with using best practices and established patterns.

2.  **Protected Routes:** All application routes should be protected by default. Any attempt to access a page while unauthenticated must automatically trigger a redirection to the Keycloak login page.

3.  **Keycloak Configuration:**
    *   Configure the Keycloak provider within the chosen authentication library.
    *   **The necessary credentials for this configuration (Client ID, Client Secret, etc.) should be based on the values found in the `docs/postman-test.json` file.**
    *   All sensitive Keycloak credentials must be stored securely in environment variables (`.env.local`), adhering to the "No Hardcoded Parameters" rule. You will also need to define the Keycloak `issuer` URL, which is not present in the JSON file.

4.  **Login and Token Flow:**
    *   Upon successful login via Keycloak, the user must be redirected back to the application.
    *   The application must securely retrieve and manage the `access_token` provided by Keycloak.

5.  **Session Management:**
    *   Authenticated user information (e.g., name, email) should be stored and managed in a secure frontend session, making it accessible throughout the application (e.g., via a session provider or hook).

6.  **Authenticated API Requests:**
    *   A mechanism must be implemented to automatically include the `access_token` as a Bearer token in the `Authorization` header for all outgoing requests made to the backend API gateway.

7.  **User Interface Update (Header Component):**
    *   After successful authentication, the `app/components/Header.tsx` component must be updated to display the authenticated user's name and email, replacing the current hardcoded values ("guiassys" and "guiassys@email.com") with actual data obtained from the Keycloak session.

8.  **Logout Flow:**
    *   The "Sair" (Logout) button in the `app/components/Header.tsx` component must trigger the `next-auth` sign-out process.
    *   Upon successful logout, the user's local session must be destroyed.
    *   The user must then be redirected to the Keycloak login screen.

## Expected Outcome

*   Users are unable to access any part of the application without first authenticating via Keycloak.
*   After logging in, the user is automatically redirected to the main application page.
*   The `Header` component dynamically displays the authenticated user's name and email.
*   **Users can successfully log out by clicking the "Sair" button, which clears their session and redirects them to the Keycloak login page.**
*   The user's session information is available within the frontend application.
*   All subsequent API calls from the frontend to the backend gateway automatically include the user's valid access token for authorization.
