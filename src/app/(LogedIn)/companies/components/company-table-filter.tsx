"use client";

import React, { useContext, useState } from "react";
import { CheckCircle2, Circle, X, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterSelect } from "@/components/FilterSelect";
import { CompanyContext } from "./context-provider";

export const statuses = [
  {
    value: "DONE",
    label: "Done",
    icon: <CheckCircle2 className="text-green-500" size={15} />,
  },
  {
    value: "PROGRESSING",
    label: "Progress",
    icon: <Circle className="text-yellow-500" size={15} />,
  },

  {
    value: "canceled",
    label: "Canceled",
    icon: <XCircle className="text-red-500" size={15} />,
  },
];

export const CompanyTableFilter = () => {
  const { statusSelectedValues, setStatusSelectedValues } =
    useContext(CompanyContext);

  const restAllFilters = () => {
    setStatusSelectedValues([]);
  };

  const showRestButton = () => {
    if (statusSelectedValues.length > 0) {
      return true;
    }
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <FilterSelect
          options={statuses}
          selectedValues={statusSelectedValues}
          setSelectedValues={setStatusSelectedValues}
          title="Status"
        />
        {showRestButton() && (
          <Button
            variant="ghost"
            className="h-8 px-2 lg:px-3"
            onClick={restAllFilters}
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
