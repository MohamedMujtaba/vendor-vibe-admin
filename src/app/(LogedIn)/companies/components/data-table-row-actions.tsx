"use client";

import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  Copy,
  HelpCircle,
  MoreHorizontal,
  Pen,
  Star,
  Tags,
  Trash,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { XCircle } from "lucide-react";
import { useContext } from "react";
import { CompanyContext } from "./context-provider";

// "PROGRESSING" | "CANCELED" | "DONE"

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

export const DataTableRowActions = () => {
  const {
    isDeleteAlertOpen,
    setIsDeleteAlertOpen,
    setIsEditingDialogOpen,
    setEditingOrderId,
  } = useContext(CompanyContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={() => setIsEditingDialogOpen(true)}>
          <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Print a copy
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Tags className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Status
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup>
              {statuses.map((status) => (
                <DropdownMenuRadioItem
                  key={status.value}
                  value={status.value}
                  className="pl-2"
                >
                  <div className="flex items-center justify-start gap-2 w-full">
                    {status.icon}
                    {status.label}
                  </div>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setIsDeleteAlertOpen(true)}>
          <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
