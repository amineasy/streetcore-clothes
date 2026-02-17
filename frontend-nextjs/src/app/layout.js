import BottomBar from "./_components/BottomBar";
import Header from "./_components/Header";
import "./globals.css";
import localFont from "next/font/local";

export const iranyekan = localFont({
  src: [
    {
      path: "./_styles/fonts/woff/iranyekanwebthinfanum.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./_styles/fonts/woff/iranyekanweblightfanum.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./_styles/fonts/woff/iranyekanwebregularfanum.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_styles/fonts/woff/iranyekanwebmediumfanum.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_styles/fonts/woff/iranyekanwebboldfanum.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./_styles/fonts/woff/iranyekanwebextraboldfanum.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./_styles/fonts/woff/iranyekanwebblackfanum.woff",
      weight: "850",
      style: "normal",
    },
    {
      path: "./_styles/fonts/woff/iranyekanwebextrablackfanum.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "streetcore-clothes",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranyekan.variable} font-iranyekan h-[200vh] antialiased bg-red-600`}
      >
        <div className="hidden lg:block">
          <Header />
        </div>
        <div className="lg:hidden">
          <BottomBar />
        </div>

        <main className=" bg-red-500  ">{children}</main>
      </body>
    </html>
  );
}
