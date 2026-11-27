import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Verrar Forge | Software Solutions & Technology Consulting",
    template: "%s | Verrar Forge",
  },
  description:
    "Verrar Forge is an independent technology consultancy delivering custom software development, cloud and DevOps engineering, AI integration, and workflow automation.",
  keywords: [
    "Verrar Forge",
    "software development",
    "technology consulting",
    "cloud engineering",
    "DevOps",
    "AI integration",
    "workflow automation",
    "AWS",
    "custom software",
  ],
  metadataBase: new URL("https://www.verrarforge.com"),
  openGraph: {
    title: "Verrar Forge | Engineering the Next Generation of Digital Business",
    description:
      "Software engineering, cloud infrastructure, AI integration, and business automation.",
    siteName: "Verrar Forge",
    type: "website",
  },
  icons: {
    icon: "/vf-mark.svg",
  },
};

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