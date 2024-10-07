"use client";
import { Transaction } from "@/types/Transaction";
import { addCommas } from "@/lib/utils";
import { toast } from "react-toastify";
import deleteTransaction from "@/app/actions/deleteTransaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };

  return (
    <li
      className={`flex justify-between gap-4 md:gap-10 w-full ${
        transaction.amount < 0 ? "minus" : "plus"
      }`}
    >
      <span className="w-1/2">{transaction.text}</span>
      <span className="w-1/4">
        {sign} Ksh {addCommas(Math.abs(transaction.amount))}
      </span>
      <span className="w-1/4">
        {new Date(transaction.createdAt).toLocaleDateString()}
      </span>

      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
