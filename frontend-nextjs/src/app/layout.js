import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "streetcore-clothes",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="">
      <body>{children}</body>
    </html>
  );
}
