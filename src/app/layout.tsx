import "@rainbow-me/rainbowkit/styles.css";

import "@b3dotfun/react/styles";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
