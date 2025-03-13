"use client";

import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Provider store={store}>
          <Navbar />
          <main className="pt-16">
          {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
