import Head from "./head";
import "./styles/global.scss";
import { Plus_Jakarta_Sans } from "next/font/google";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="home">
          <div className="container h-screen mx-auto px-6 lg:px-10 2xl:px-32">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
