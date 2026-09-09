import "./globals.css";

export const metadata = {
  title: "WishLoop — Create. Share. Celebrate.",
  description:
    "Create beautiful festival wishes and share them with your loved ones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}