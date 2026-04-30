    # Task 001: Configure Host and Port via Next.js Config

    ## Objective
    Modify the application so that the development server's host and port can be configured through the Next.js configuration. This will make it easier for developers to change startup parameters without modifying the `package.json` scripts.

    ## Requirements
    1.  The `dev` script in `package.json` should be modified to accept `--hostname` and `--port` flags.
    2.  The `next.config.ts` file should not be the primary source for this configuration, as Next.js's `dev` command is the standard way to handle this. The goal is to enable command-line overrides.
    