"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import { DataTableRowActions } from "./data-table-row-actions";
import { CheckCircle2, XCircle, Verified } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Row = () => {
  return (
    <TableRow>
      <TableCell>
        <Checkbox
          // checked={false}
          // onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      </TableCell>
      <TableCell>toggleAllPageRowsSelected</TableCell>
      <TableCell className="text-center">2-10-2023</TableCell>
      <TableCell className="text-center">MJ Tec</TableCell>
      <TableCell className="text-center flex items-baseline justify-center">
        <Approved approved={true} />
      </TableCell>
      <TableCell className="text-center">
        <Progress progress="DONE" />
      </TableCell>
      <TableCell className="text-left">150,000</TableCell>
      <TableCell className="text-left  flex items-end justify-end">
        <DataTableRowActions />
      </TableCell>
    </TableRow>
  );
};

const Approved = ({ approved }: { approved: boolean }) => {
  if (approved) return <CheckCircle2 className="text-green-500" size={20} />;
  else return <Verified className="text-red-500" />;
};

interface ProgressProps {
  progress: "PROGRESSING" | "CANCELED" | "DONE";
}

const Progress = ({ progress }: ProgressProps) => {
  if (progress === "PROGRESSING")
    return <Badge variant="pending">Progress</Badge>;
  if (progress === "CANCELED") return <Badge variant="danger">Canceled</Badge>;
  if (progress === "DONE") return <Badge variant="success">Done</Badge>;
  return <></>;
};
