import CustomersTabs from "@/app/(LogedIn)/customers/CustomersTabs";
import { DataTable } from "@/app/tasks/components/data-table";
import OverviewTab from "@/components/OverviewTabs";
import { CalendarDateRangePicker } from "@/components/dashboardComponents/date-range-picker";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from "react";

import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";
import { taskSchema } from "@/app/tasks/data/schema";
import { columns } from "@/app/tasks/components/columns";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/tasks/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}
const Customers = async () => {
  const tasks = await getTasks();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </>
  );
};

export default Customers;
