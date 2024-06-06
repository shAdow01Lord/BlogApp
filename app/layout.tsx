import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "../components/nav/Navbar";
import { Toaster } from "@/components/ui/toaster";
import SessisonProvider from "../components/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dailyblog-demo.vercel.app/"),

  title: {
    template: "%s | Daily Blog",
    default: "Daily Blog",
  },
  authors: {
    name: "chensokheng",
  },

  description:
    "Discover a treasure trove of captivating stories and insightful articles on our blog. Dive into the latest trends and in-depth analyses, with content spanning a wide array of topics designed to inform and entertain. Join our vibrant community of readers and uncover thought-provoking pieces that ignite curiosity and spark meaningful discussions. Stay up-to-date with our diverse collection of posts, crafted by passionate contributors who bring their expertise and unique perspectives to the table. Engage with a platform that goes beyond the ordinary, offering enriching content that aligns with your interests and keeps you coming back for more.",
  openGraph: {
    title: "Daily Blog",
    description:
      "Welcome to our blog, where captivating stories and insightful articles are served with a side of humor! Whether you're hunting for the latest trends or diving into in-depth analyses, our blog has a smorgasbord of topics to keep you informed and entertained. Join our lively community of readers and discover thought-provoking content that not only sparks curiosity but also tickles your funny bone. Stay updated with our eclectic collection of posts, crafted by passionate contributors who sprinkle their expertise with a dash of wit and unique perspectives. Engage with a platform that goes beyond the ordinary, offering enriching content that resonates with your interests and guarantees a good laugh. Come for the knowledge, stay for the chuckles!.",
    url: "https://dailyblog-demo.vercel.app/",
    siteName: "Daily Blog",
    images: "/og.png",
    type: "website",
  },
  keywords: ["every Day coding", "rajeev", "codeRocks"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased dark:bg-[#09090B]", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto lg:py-10 space-y-10 p-5 lg:p-0">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
        <Toaster />
        <SessisonProvider />
      </body>
    </html>
  );
}
