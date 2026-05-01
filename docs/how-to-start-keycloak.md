# How to Start the Keycloak Server with Docker

This is a straightforward guide to get the local Keycloak authentication server running.

## 1. Run Keycloak for the First Time

If you are running the container for the first time, use this command. It will download the official Keycloak image, create a container named `keycloak-sso`, and start it.

```bash
docker run -d --name keycloak-sso -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev
```

## 2. Start an Existing Container

If you have already run the command above and the `keycloak-sso` container exists, you just need to start it.

```bash
docker start keycloak-sso
```

To check if it's running, you can use:
```bash
docker ps | grep keycloak-sso
```

## 3. Access the Admin Console

Once the container is running, you can access the Keycloak admin panel:

-   **URL:** [http://localhost:8080](http://localhost:8080)
-   **Username:** `guiassys`
-   **Password:** `<your_password>`
