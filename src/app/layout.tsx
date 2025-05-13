import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster as Toast } from "@/components/ui/sonner";
import QueryProvider from "@/context/query-provider";
import { ClientOnly } from "@/components/ui/ClientOnly";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap", // ensures consistent rendering between SSR and client
});

export const metadata: Metadata = {
  title: "StackDrive - Cloud Storage Application",
  description: "The only solution you ever need for secure file storage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", outfit.variable)}>
        <QueryProvider>
          {children}

          <ClientOnly>
            <Toast
              position="top-right"
              richColors
              toastOptions={{
                style: {
                  background: "#1d1d21",
                  color: "#fff",
                  border: "1px solid #d45710",
                },
                className: "toast-title toast-description toast-toast-action",
              }}
            />
          </ClientOnly>
        </QueryProvider>
      </body>
    </html>
  );
}
