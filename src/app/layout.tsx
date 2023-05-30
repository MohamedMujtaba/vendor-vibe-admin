import { MainNav } from "@/components/dashboardComponents/main-nav";
import { Search } from "@/components/dashboardComponents/search";
import { UserNav } from "@/components/dashboardComponents/user-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Providers } from "@/lib/providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ["latin"], weight: "200" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "min-h-screen bg-background")}
        style={{ colorScheme: "dark" }}
      >
        <Providers>
          {/* <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <TeamSwitcher /> 
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
                <ModeToggle />
              </div>
            </div>
          </div> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
