/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
// import "tailwindcss/tailwind.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "Hannan Imtiaz",
  keywords: [
    "Hannan Imtiaz",
    "hannan imtiaz",
    "fullstack",
    "react developer",
    "reactjs",
    "nextjs",
    "Node",
    "AWS",
  ],
  title:
    "Hannan Imtiaz - Web Developer, React, Next, Node. I create.... stuff.",
  description:
    "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js with proven experience. Don't be shy, take a look at my projects.",
  alternates: {
    canonical: "https://hannanimtiaz.com/",
  },
  metadataBase: new URL("https://hannanimtiaz.com"),
  openGraph: {
    title:
      "Hannan Imtiaz - Web Developer, React, Next, Node. I create.... stuff.",
    description:
      "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js with proven experience. Don't be shy, take a look at my projects.",
    url: "https://hannanimtiaz.com",
    siteName: "Hannan Imtiaz",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon.ico`,
      },
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: [`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon.ico`],
    apple: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/site.webmanifest`,
  twitter: {
    card: "summary_large_image",
    title: "Hannan Imtiaz - Web Developer, React, Next, Node.",
    description:
      "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.",
    images: {
      url: "/static/misc/og.png",
      alt: "Hannan Imtiaz",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body>{children}</body>
    </html>
  );
}
