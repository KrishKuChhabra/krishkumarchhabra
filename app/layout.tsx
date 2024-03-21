import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });


export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: 'Krish kumar chhabra',


	description:
		"Based in Bhubaneswar, I'm a Frontend Developer passionate about building modern web applications that users love.",
	openGraph: {
		title: "krish kumar chhabra",
		description:
			"Based in Bhubaneswar, I'm a Frontend Developer passionate about building modern web applications that users love., powered by the real-time capabilities of Supabase database integration in our web app.",
		url: "http://localhost:3000",
		siteName: "krishkumarchhabra",
		images: "/seoImage.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
