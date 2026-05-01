**Title:** 
Configure Host and Port

**Objective:** 
Modify the application to allow configuring the development server's host and port via command-line flags, making it easier for developers to change startup parameters without editing `package.json`.

**Expected Result:** 
The `dev` script in `package.json` is updated to accept `--hostname` and `--port` flags, allowing developers to start the server with custom values (e.g., `npm run dev -- --hostname 0.0.0.0 --port 3001`).
