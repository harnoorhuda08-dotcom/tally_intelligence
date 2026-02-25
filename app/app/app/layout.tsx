import "./globals.css";

export const metadata = {
  title: "Tally Intelligence",
  description: "Virtual CFO Prototype",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
