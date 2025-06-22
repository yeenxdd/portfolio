import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Portfolio from "@/components/Portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tai Ye En's Portfolio",
  description: "A portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Portfolio />
        {/* <PortfolioHeader />
              <Content style={{ padding: "0 48px" }}>
                <Breadcrumb
                  style={{ margin: "16px 0" }}
                  items={[
                    { title: "Home" },
                    { title: "List" },
                    { title: "App" },
                  ]}
                />
                <div
                  style={{
                    // background: colorBgContainer,
                    minHeight: 280,
                    padding: 24,
                    // borderRadius: borderRadiusLG,
                  }}
                >
                  Content
                  {children}
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
              </Footer> */}
      </body>
    </html>
  );
}
