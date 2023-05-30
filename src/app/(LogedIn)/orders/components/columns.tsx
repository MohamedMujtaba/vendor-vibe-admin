import { Checkbox } from "@/components/ui/checkbox";
import { TableHead, TableRow } from "@/components/ui/table";
import React from "react";

export const Columns = () => {
  return (
    <TableRow>
      <TableHead>
        <Checkbox
          // checked={false}
          // onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      </TableHead>
      <TableHead>ID</TableHead>
      <TableHead className="text-center">Created At</TableHead>
      <TableHead className="text-center">Business</TableHead>
      <TableHead className="text-center">Approved</TableHead>
      <TableHead className="text-center">Status</TableHead>
      <TableHead className="text-left">Amount</TableHead>
      <TableHead></TableHead>
    </TableRow>
  );
};


