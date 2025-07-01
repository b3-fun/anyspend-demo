import "@rainbow-me/rainbowkit/styles.css";

import "@b3dotfun/sdk/index.css";

import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
