# Task 003: Authentication Setup and Configuration

## Objective
Install a compatible authentication library and configure the core authentication flow. This task focuses on protecting all application routes and ensuring unauthenticated users are redirected to the Keycloak login page.

## Persona & Guidelines
You must act as an **Expert Frontend Software Developer** as defined in `@/CLAUDE.md`. All your actions and proposals must strictly adhere to the rules and environment specifications outlined in `@/AGENTS.md`.

## Strategic Approach

### 1. Dependency Analysis and Library Installation
- **Analyze `package.json`:** Carefully review all existing dependencies and their versions, paying close attention to the `next` version.
- **Research `next-auth` Compatibility:** Investigate and identify the specific version of `next-auth` (Auth.js v5) that is fully compatible with the project's Next.js version. **Do not assume the latest version is correct.**
- **Propose Installation:** Once you have confirmed the correct version, propose the `npm install` command to add it to the project.

### 2. Core Authentication Configuration
- **Create `auth.ts`:** Create a new file, `auth.ts`, in the project root. This file will contain the main Auth.js configuration.
- **Configure Keycloak Provider:** Inside `auth.ts`, configure the Keycloak provider. The configuration must read its credentials (client ID, secret, issuer URL) from environment variables.
- **Define Environment Variables:** Add the necessary Keycloak and NextAuth variables to the `.env.local` file. Do not commit sensitive data.
  ```
  # .env.local
  KEYCLOAK_CLIENT_ID="your-client-id"
  KEYCLOAK_CLIENT_SECRET="your-client-secret"
  KEYCLOAK_ISSUER="http://localhost:8080/realms/your-realm"
  NEXTAUTH_URL="http://localhost:3000"
  NEXTAUTH_SECRET="generate-a-strong-secret" # Use `openssl rand -hex 32` to generate a secret
  ```

### 3. Implement Route Protection
- **Create `middleware.ts`:** Create a `middleware.ts` file in the project root (`/`).
- **Protect Routes:** Use the `auth` object from your `auth.ts` configuration to protect all routes by default. The middleware should automatically redirect any unauthenticated request to the Keycloak login page.

## Expected Outcome
- The correct version of `next-auth` is installed and added to `package.json`.
- The `auth.ts` and `middleware.ts` files are created and correctly configured.
- All application routes are protected. Any attempt to access a page while unauthenticated results in a redirect to the Keycloak login page.
- The application builds and runs successfully without dependency conflicts.
