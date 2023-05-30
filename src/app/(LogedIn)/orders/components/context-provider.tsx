"use client";

import { createContext, useEffect, useState } from "react";

interface OrderContextInterface {
  isDeleteAlertOpen: boolean;
  setIsDeleteAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditingDialogOpen: boolean;
  setIsEditingDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editingOrderId: string;
  setEditingOrderId: React.Dispatch<React.SetStateAction<string>>;
  statusSelectedValues: any[];
  setStatusSelectedValues: React.Dispatch<React.SetStateAction<any[]>>;
}

export const OrderContext = createContext<OrderContextInterface>(
  {} as OrderContextInterface
);

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState<boolean>(false);
  const [isEditingDialogOpen, setIsEditingDialogOpen] =
    useState<boolean>(false);
  const [editingOrderId, setEditingOrderId] = useState<string>("");
  const [statusSelectedValues, setStatusSelectedValues] = useState<any[]>([]);

  return (
    <OrderContext.Provider
      value={{
        isDeleteAlertOpen,
        setIsDeleteAlertOpen,
        editingOrderId,
        setEditingOrderId,
        isEditingDialogOpen,
        setIsEditingDialogOpen,
        statusSelectedValues,
        setStatusSelectedValues,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
