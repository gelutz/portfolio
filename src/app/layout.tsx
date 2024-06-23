import "@/styles/globals.css";
import "@/styles/background.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Gabriel Lutz",
  description: "An enthusiastic developer who loves to create.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
