1. Site Pages

Pages include: Home, About, Our Work, Projects, Contact, Legal

2. JavaScript Logic (Script.js)

Explain clearly (non-code heavy):

Mobile sidebar navigation

Navbar color change on scroll

“Get Started” & “About Us” navigation

Contact form submission logic

Automatic year update in footer

No framework used

Easy to extend or replace

1. Contact Form Integration

Uses Web3Forms API

Requires an access_key

Sends form submissions to configured email

No backend server required

Include:

Access key can be located and change at assets/js/script.js

On Success: \* By default, the user is redirected to the Web3Forms Success Page (a clean "Thank You" page hosted by them).

On Failure: The user is redirected to a Web3Forms error page that describes the issue (e.g., "Invalid Access Key" or "Missing Field").

Rate-limit & spam protection note:

250 Submissions/Month: Resets every month.

Unlimited Forms: You can use your one Access Key on as many different forms or websites as you like.

Unlimited Domains: No restriction on which websites send the data.

Basic Spam Protection: Includes a "Honeypot" field and a basic spam filter.

3. Newsletter form Integration (Brevo)

Uses Brevo API v3 to handle transactional email and contact management.

Requires an API Key: Authenticates your website with the Brevo engine.

Workflow: Sends form submissions directly to your configured email or adds them as a new contact in your Brevo dashboard.

Infrastructure: No backend server required if using a client-side fetch or a dedicated Brevo integration script.

Key Location: The API Key can be located and changed at: html file

On Success:
AJAX Implementation: The user remains on the page, and a success message (e.g., "Thank you! Your message has been sent.") is triggered via JavaScript.

Redirect Option: You can manually configure the script to redirect the user to a custom thanks.html page upon a successful 200 OK response from the Brevo API.

On Failure:
Error Handling: If the submission fails (e.g., 401 Unauthorized due to a bad key or 400 Bad Request), the script will display an error alert on the current page.

Common Issues: Invalid API key, daily sending limit reached, or missing required fields (like a valid email address).

Rate-Limit & Spam Protection Note:
300 Emails/Day: The free tier allows up to 300 submissions per day (approx. 9,000 per month). Note that this resets daily and does not roll over.

Unlimited Contacts: You can store up to 100,000 contacts in your database regardless of the number of forms.

Unlimited Domains: You can use the same API key across multiple websites or subdomains.

4. External Services Used

List them clearly:

Bootstrap CDN – layout & utilities

Google Fonts – typography

Google Maps Embed – office location

Web3Forms – contact form backend

Brevo - Newsletter subscription

Explain:

What happens if any service is removed: part of the site using that service will not function

Which ones are optional: none

5. Styling System

Explain:

Based on the content of your `Style.css` file, here is the explanation of the **Styling System** following your requested structure:

### 1. CSS Variables in `:root`

The styling system uses a robust set of CSS variables defined in the `:root` selector to ensure consistency and easy maintenance across the site.

- **Primary Branding**: Defines core brand colors like `--gold-primary-color` (#d9a520) and `--gold-secondary-color` (#efc579).
- **Base Neutrals**: Includes essential UI colors such as `--white` (#ffffff), `--ofWhite` (#f9f9f9), and `--black` (#000000).
- **System Accents**: Features specialized colors for focus areas and borders, such as `--ofa-faded-yellow` and `--border-color`.

### 2. Color System

The color system is built around high-contrast pairings and sophisticated gradients.

- **Gradients**: Frequently uses a linear gradient from `--gold-primary-color` to `--gold-secondary-color` for buttons and interactive elements.
- **Dark Accents**: Utilizes a deep base palette (`--base-primary-color`: #1a1a1a to `--base-secondary-color`: #0f1c2c) for structural elements like the sidebar and section backgrounds.
- **Functional Colors**: Uses `--faded-text` (#646464) and various silver shades for secondary information and background depth.

### 3. Typography Classes

The system utilizes three primary font families: **Open Sans**, **Plus Jakarta Sans**, and **Playball**.

- **Body & Utility**: `.open-sans-regular` is used for standard text at a 12px base size.
- **Headings (Jakarta)**: A scale ranging from `.plus-jakarta-sans-super-small` (9px) to `.plus-jakarta-sans-large` (5.3rem).
- **Specialty Styles**:
- `.plus-jakarta-sans-medium-large` features a text-clipped gradient for a premium look.
- `.playball-regular` provides a stylized cursive option at a large 7rem scale.

### 4. Responsive Behavior

The stylesheet implements responsiveness through a mix of fluid layouts and media queries.

- **Layout Fluidity**: Containers like `.delta-container` use `width: 100%` and `margin: auto` to adapt to screen widths.
- **Media Queries**: Specific breakpoints (e.g., 600px, 550px) adjust the layout for mobile devices.
- **Mobile Navigation**: The footer's bottom bar switches from a flex-row to a `flex-direction: column` at 600px to maintain readability.
- **Form Adaptation**: Newsletter inputs are set to `width: 100%` on smaller screens to ensure they fit the viewport.

- **Transitions**: Smooth `0.3s` to `0.5s` transitions are applied to hover states and sidebar movements to enhance the mobile-to-desktop user experience.
