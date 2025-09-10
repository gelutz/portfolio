import "@/styles/background.css";
import "@/styles/globals.css";

export const metadata = {
  title: `Lutz's Portfolio`,
  description: "An enthusiastic developer who loves to create.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="polka h-full">{children}</body>
    </html>
  );
}
