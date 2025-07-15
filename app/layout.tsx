// app/layout.tsx
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "FOOD",
  description: "Best site ever",
  icons: {
    icon: "/image.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
