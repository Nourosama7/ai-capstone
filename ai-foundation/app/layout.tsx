import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex flex-wrap gap-5 p-5 bg-gray-900 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/health">Health</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}