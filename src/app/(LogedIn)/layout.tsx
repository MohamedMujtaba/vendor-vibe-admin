import { MainNav } from "@/components/dashboardComponents/main-nav";
import { Search } from "@/components/dashboardComponents/search";
import { UserNav } from "@/components/dashboardComponents/user-nav";
import { ModeToggle } from "@/components/mode-toggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          {/* <TeamSwitcher /> */}
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="flex-col md:flex ">
        <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
      </div>
    </div>
  );
}
