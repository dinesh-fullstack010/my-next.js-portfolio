import "./globals.css";
export const metadata = {
  title: "Dinesh Senthil Kumar — Software Engineer / Next.js",
  description:
    "Software engineer in Chennai. Three years building full-stack web, mobile and real-time experiences with React, Node.js and React Native.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
