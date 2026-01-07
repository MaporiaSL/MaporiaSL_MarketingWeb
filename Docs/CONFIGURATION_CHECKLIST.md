# Maporia Marketing Site - Configuration Checklist

Now that the site is built, you need to update the following placeholders with your real data and assets.

## 1. 🎥 Hero Video Background
The Hero section uses a placeholder color gradient. To add your video:
1.  Place your video file (e.g., `srilanka-hero.mp4`) in the `public/assets/` folder (create the folder if it doesn't exist).
2.  Open `src/components/sections/Hero.jsx`.
3.  Uncomment the `<video>` tag and update the `src` attribute:
    ```jsx
    {/* <video autoPlay loop muted playsInline className="object-cover w-full h-full" src="/assets/srilanka-hero.mp4" /> */}
    ```

## 2. 👥 Team Members
The Team section uses placeholder names and avatars.
1.  Open `src/components/sections/Team.jsx`.
2.  Update the `team` array at the top of the file:
    ```javascript
    const team = [
      {
        name: "Real Name",
        role: "Real Role",
        image: "/assets/team/member1.jpg" // OR an external URL
      },
      // ...
    ];
    ```

## 3. 📝 Survey Link
1.  Create your survey (Google Forms, Typeform, etc.).
2.  Open `src/components/sections/Survey.jsx`.
3.  Update the button `onClick` handler with your URL:
    ```javascript
    onClick={() => window.open('https://your-google-form-url.com', '_blank')}
    ```

## 4. 📧 Waitlist Functionality
Currently, the waitlist form does not send emails. You have two easy options:
*   **Formspree (Easiest)**: Register at [formspree.io](https://formspree.io), get a URL, and set the `<form action="YOUR_URL" method="POST">`.
*   **Google Sheets**: Use a script to save to sheets.
*   **Update File**: `src/components/sections/Waitlist.jsx`.

## 5. 🔗 Social Media Links
1.  Open `src/components/sections/Footer.jsx`.
2.  Replace the `href="#"` with your actual profile links for Instagram, Twitter, and Facebook.
3.  Update "Privacy" and "Terms" links if you have those documents hosting.

## 6. 🖼️ Brand Assets (Favicon & Logo)
*   **Favicon**: Replace `src/app/favicon.ico` with your own (must be named `favicon.ico`).
*   **Logo**: Currently, the site uses text ("Maporia"). If you have a logo image, you can replace the text in `Navbar` (if added) or `Footer.jsx` with an `<img src="..." />`.

## 7. 📄 SEO Metadata
I updated the basics, but you can refine them in `src/app/layout.js`:
```javascript
export const metadata = {
  title: "Maporia - Rediscover Sri Lanka",
  description: "A gamified travel portfolio app...",
};
```
