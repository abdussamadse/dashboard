import { Libre_Franklin } from "next/font/google";
import "../../app/globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Sidebar from "@/shared/Sidebar";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
});

export const metadata = {
  title: "Dashboard",
  description: "Your dashboard layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const theme = localStorage.getItem('theme');
                if (theme) {
                  document.documentElement.classList.add(theme);
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${libreFranklin.variable} bg-white antialiased dark:bg-zinc-900`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
