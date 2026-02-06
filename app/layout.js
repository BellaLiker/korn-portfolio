export const metadata = {
  title: "Korn Phanna — Portfolio",
  description: "Full-stack developer portfolio (React, Node.js, MySQL).",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Korn Phanna — Portfolio",
    description: "Full-stack developer portfolio (React, Node.js, MySQL).",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
