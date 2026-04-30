# Task 005: Authenticated API Requests

## Prerequisite
This task assumes that Tasks 003 and 004 have been successfully completed. Users can log in, and their session is available in the frontend.

## Objective
Ensure that all outgoing API requests from the frontend to the backend API gateway are automatically authenticated with the user's `access_token`.

## Persona & Guidelines
You must act as an **Expert Frontend Software Developer** as defined in `@/CLAUDE.md`. All your actions and proposals must strictly adhere to the rules and environment specifications outlined in `@/AGENTS.md`.

## Strategic Approach

### 1. Analyze Existing Data Fetching
- **Identify the Method:** First, investigate the codebase to determine how API calls are currently being made. Is the project using the native `fetch` API, `axios`, or another library? This will determine the best place to intercept requests.

### 2. Update Session Callback
- **Expose Access Token:** In the `auth.ts` file, modify the `callbacks` object in the `auth` configuration.
- **JWT Callback:** Implement the `jwt` callback to include the `access_token` from the Keycloak provider in the token object.
- **Session Callback:** Implement the `session` callback to expose the `access_token` from the token object to the client-side session. This makes it accessible via the `useSession` hook.

### 3. Implement an Interceptor or Wrapper
- **Based on your analysis in step 1, choose one of the following:**
    - **A) If using `axios`:** Create an Axios interceptor. This interceptor will:
        1.  Get the current session.
        2.  Retrieve the `access_token` from the session data.
        3.  If the token exists, automatically add the `Authorization: Bearer <token>` header to every outgoing request.
    - **B) If using native `fetch`:** Create a custom fetch wrapper function (e.g., `fetchWithAuth`). This function will accept the same arguments as `fetch` but will handle getting the token and adding the `Authorization` header before making the actual request. All API calls in the application must then be updated to use this new wrapper function.

### 4. Verify the Implementation
- **Test an API Call:** Identify an existing API call in the application and ensure it now correctly sends the `Authorization` header after your changes.
- **Use Browser DevTools:** Check the "Network" tab in your browser's developer tools to confirm that the Bearer token is being sent with API requests.

## Expected Outcome
- The `access_token` from Keycloak is successfully included in the user's session object.
- A mechanism is in place that automatically attaches the `access_token` as a Bearer token to all outgoing API requests.
- The application's backend API calls are now authenticated, and the frontend continues to function correctly.
