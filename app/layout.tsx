import SideBar from "@/components/SideBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ClientProvider from "@/components/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Botify - Your AI friend",
  icons: "/favicon.ico",
  description: "An Ai friend indeed is a friend in need",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="gradient" />
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex h-screen ">
              {/* {sidebar} */}
              <div className="bg-[#202123] w-1/3 h-screen overflow-y-auto">
                <SideBar />
              </div>

              {/* {clientprovider - notifications} */}
              <ClientProvider />
              <div className="bg-[#343541] w-2/3">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
