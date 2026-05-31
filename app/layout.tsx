import "./globals.css";

export const metadata = {
  title: 'Mannat Cafe & Lakeview Restaurant | Best Lakeside Restaurant in Udaipur',
  description: 'Enjoy rooftop dining, romantic ambience, delicious cuisine, and breathtaking lake views.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
