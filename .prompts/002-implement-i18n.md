# Task 002: Implement Internationalization (i18n) for English and Portuguese

## Objective
Implement full internationalization (i18n) support in the application to allow users to view the User Interface (UI) content in their preferred language, specifically English or Brazilian Portuguese. The application should automatically detect and serve content based on the user's regional settings.

## Requirements

1.  **Supported Locales:** The application must support at least two languages:
    *   English (en)
    *   Brazilian Portuguese (pt)

2.  **Default Language:** English (`en`) must be set as the default language for the application. If no specific locale is detected or provided, the application should default to English.

3.  **Locale Detection and Redirection:**
    *   The application should detect the user's preferred language (e.g., from browser `Accept-Language` header).
    *   Users accessing the root path (`/`) should be automatically redirected to the appropriate localized route (e.g., `/pt` for Portuguese speakers, `/en` for others).

4.  **Content Translation:** All static text content within the UI, including but not limited to:
    *   Header navigation items
    *   Sidebar menu items
    *   Footer links and copyright
    *   Main page content (e.g., welcome messages, card titles, activity descriptions)
        must be translated into both supported languages.

5.  **Translation File Structure:** Language-specific strings must be stored in dedicated, organized translation files (e.g., JSON files) within the project, adhering to the "No Hardcoded Parameters" rule.

6.  **Next.js Features:** The implementation must leverage Next.js framework features for internationalization, specifically the App Router's dynamic segments for locale handling (e.g., `app/[lang]/`).

7.  **Routing:** The URL structure should reflect the current language (e.g., `/en/dashboard`, `/pt/dashboard`).

## Expected Outcome

*   Users accessing the application will experience the UI content in their preferred language (e.g., a Brazilian user will see content in Portuguese, while others will see English by default or their preferred language if supported).
*   The application's URLs will clearly indicate the active language.
*   All static text elements will be dynamically loaded based on the selected or detected locale.