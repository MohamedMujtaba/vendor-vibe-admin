import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  title: string;
  content: string;
  des?: string;
  Icon: React.JSXElementConstructor<T>;
}

interface T {
  className: string;
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  content,
  des,
  Icon,
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={cn("h-4 w-4 text-muted-foreground")} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
        <p className="text-xs text-muted-foreground">{des}</p>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
