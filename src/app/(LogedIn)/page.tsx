import { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  CreditCard,
  DollarSign,
  Download,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import TeamSwitcher from "@/components/dashboardComponents/team-switcher";
import { MainNav } from "@/components/dashboardComponents/main-nav";
import { Search } from "@/components/dashboardComponents/search";
import { UserNav } from "@/components/dashboardComponents/user-nav";
import { CalendarDateRangePicker } from "@/components/dashboardComponents/date-range-picker";
import { Overview } from "@/components/dashboardComponents/overview";
import { RecentSales } from "@/components/dashboardComponents/recent-sales";
import StatusCard from "@/components/StatusCard";
import OverviewTabs from "@/components/OverviewTabs";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      <OverviewTabs />
    </>
  );
}
