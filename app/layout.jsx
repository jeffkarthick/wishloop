import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "WishLoop — Create. Share. Celebrate.",
  description:
    "Create beautiful festival wishes and share them with your loved ones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}