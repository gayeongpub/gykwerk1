import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/site";
import ClientProviders from "@/components/ClientProviders";
// mantine
// import { MantineProvider } from '@mantine/core';
// import { Notifications } from '@mantine/notifications';
// scss
import "@/styles/scss/_globals.scss";
import "@/styles/scss/_index.scss";

// cmp
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Every table has its own story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {/* <MantineProvider withGlobalStyles withNormalizeCSS>
          <Notifications />
          {children}
        </MantineProvider> */}
        <ClientProviders>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
