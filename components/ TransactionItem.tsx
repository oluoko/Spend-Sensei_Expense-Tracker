"use client";
import { Transaction } from "@/types/Transaction";
import { addCommas, formatDate } from "@/lib/utils";
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
      className={`flex justify-between gap-4 rounded-lg md:rounded-sm p-3 md:p-6 my-3 md:my-5 md:gap-10 w-full ${
        transaction.amount < 0 ? "minus" : "plus"
      }`}
    >
      <span className="w-2/6 h-[77px] md:h-[70px] overflow-hidden hover:h-full hover:overflow-x-hidden hover:overflow-auto custom-gradient relative ">
        {transaction.text}
      </span>
      <span className="w-1/6 item-amount">
        {sign} Ksh {addCommas(Math.abs(transaction.amount))}
      </span>
      <span className="w-2/6">
        <span>{formatDate(new Date(transaction.createdAt), "date")}</span>
      </span>

      <span className="w-1/6">
        <span>{formatDate(new Date(transaction.createdAt), "time")}</span>
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
