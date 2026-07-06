export const metadata = {
  title: "MonitorOS™",
  description: "Operational Signal Intelligence System™ by SafeNation AI",
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
