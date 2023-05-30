import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import StatusCard from "../../../components/StatusCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentSales } from "../../../components/dashboardComponents/recent-sales";
import { Overview } from "../../../components/dashboardComponents/overview";
import { DataTable } from "./data-table";
import { Payment, columns } from "./columns";

const data: Payment[] = [
  {
    id: "728erd52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728edd52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728edew52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728wed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
];

const CustomersTabs = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatusCard
            Icon={DollarSign}
            title="Total Revenue"
            content="$45,231.89"
            des=" +20.1% from last month"
          />
          <StatusCard
            Icon={Users}
            title="Subscriptions"
            content="+2350"
            des="+180.1% from last month"
          />
          <StatusCard
            Icon={CreditCard}
            title="Sales"
            content="+12,234"
            des="+19% from last month"
          />
          <StatusCard
            Icon={Activity}
            title="Active Now"
            content="+573"
            des="+19% from last month"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card> */}
          <div className="w-full mx-auto py-10 col-span-7  ">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default CustomersTabs;
