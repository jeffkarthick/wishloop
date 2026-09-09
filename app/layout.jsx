import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://wishloop-chi.vercel.app"),

  title: "WishLoop — Create. Share. Celebrate.",

  description:
    "Create beautiful festival wishes and share them with your loved ones.",

  openGraph: {
    title: "WishLoop — Create. Share. Celebrate.",

    description:
      "Create beautiful festival wishes and share them with your loved ones.",

    url: "https://wishloop-chi.vercel.app",

    siteName: "WishLoop",

    images: [
      {
        url: "/wishloop-preview.png",
        width: 1792,
        height: 1024,
        alt: "WishLoop — Create. Share. Celebrate.",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "WishLoop — Create. Share. Celebrate.",

    description:
      "Create beautiful festival wishes and share them with your loved ones.",

    images: ["/wishloop-preview.png"],
  },

  icons: {
    icon: "/wishloop-preview.png",
  },
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