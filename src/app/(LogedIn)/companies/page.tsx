"use client";

import React, { use, useContext, useState } from "react";
import { CompanyTable } from "./components/companies-table";
import { CalendarDateRangePicker } from "@/components/dashboardComponents/date-range-picker";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { CompanyTableFilter } from "./components/company-table-filter";
import { DeleteAlert } from "./components/delete-alert";
import { CompanyContext, Provider } from "./components/context-provider";
import { EditOrderDialog } from "./components/edit-company-dialog";
import NewWindow from "react-new-window";
import { Invoice } from "./components/invoice";
import { CreateCompany } from "./components/create-company";
const Orders = () => {
  const { isDeleteAlertOpen, setIsDeleteAlertOpen } =
    useContext(CompanyContext);
  const [openPrint, setOpenPrint] = useState(false);
  return (
    <>
      <Provider>
        {openPrint && (
          <NewWindow
            onUnload={() => setOpenPrint(false)}
            title="test"
            copyStyles
            center="screen"
            features={{
              width: 1360,
              height: 500,
            }}
          >
            <Invoice />
          </NewWindow>
        )}
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Companies</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button size="sm" onClick={() => setOpenPrint(true)}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <CreateCompany />
          </div>
        </div>
        <CompanyTableFilter />
        <CompanyTable />
        <EditOrderDialog />
        <DeleteAlert
          isOpen={isDeleteAlertOpen}
          setIsOpen={setIsDeleteAlertOpen}
        />
      </Provider>
    </>
  );
};

export default Orders;
