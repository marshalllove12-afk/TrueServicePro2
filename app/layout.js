export const metadata = {
  title: "TrueServicePro",
  description: "Marketplace MVP"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
