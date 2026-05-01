# Keycloak Authentication Flow Overview

This document outlines the standard authentication and logout flow when integrating a client application with Keycloak using OpenID Connect (OIDC).

## Authentication Flow

The authentication process follows the Authorization Code Flow with PKCE (Proof Key for Code Exchange), which is a secure and recommended method for public clients.

1.  **User Initiates Login:** The user clicks "Sign in" in the client application.
2.  **Client Redirects to Keycloak:** The client application redirects the user's browser to Keycloak's authorization endpoint. This request includes parameters like `client_id`, `redirect_uri`, `scope`, `response_type=code`, and PKCE parameters (`code_challenge`, `code_challenge_method`).
3.  **User Authenticates with Keycloak:** Keycloak presents the login page to the user. The user enters their credentials (username and password).
4.  **Keycloak Grants Authorization Code:** Upon successful authentication, Keycloak redirects the user's browser back to the `redirect_uri` specified by the client application. This redirect includes an `authorization code`.
5.  **Client Exchanges Code for Tokens:** The client application's backend receives the `authorization code`. It then makes a direct, server-to-server request to Keycloak's token endpoint, exchanging the `authorization code` (and the `code_verifier` for PKCE) for an `ID Token`, `Access Token`, and `Refresh Token`.
6.  **Client Establishes Session:** The client application's backend validates the tokens and establishes a local session for the user. The user is now logged into the application.

## Logout Flow

The logout process ensures that the user's session is terminated in both the client application and Keycloak (federated logout).

1.  **User Initiates Logout:** The user clicks "Sign out" in the client application.
2.  **Client Clears Local Session:** The client application first clears its local session for the user.
3.  **Client Redirects to Keycloak Logout Endpoint:** The client application then redirects the user's browser to Keycloak's `end_session_endpoint`. This request includes the `id_token_hint` (the `ID Token` received during login) and a `post_logout_redirect_uri` (the URL where Keycloak should redirect the user after its own logout).
4.  **Keycloak Terminates Session:** Keycloak receives the logout request, validates the `id_token_hint`, and terminates the user's session on the Keycloak server.
5.  **Keycloak Redirects Back to Client:** After successfully logging out the user, Keycloak redirects the user's browser back to the `post_logout_redirect_uri` specified by the client application.
6.  **User is Fully Logged Out:** The user is now logged out from both the client application and Keycloak.
