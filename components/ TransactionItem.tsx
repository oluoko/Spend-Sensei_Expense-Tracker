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
      className={`rounded-lg md:rounded-sm p-3 md:p-6 my-3 md:my-5 w-full ${
        transaction.amount < 0 ? "minus" : "plus"
      }`}
    >
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 bg-slate-300 md:bg-transparent">
        <span className=" h-[77px] md:h-[70px] overflow-hidden hover:h-full hover:overflow-x-hidden hover:overflow-auto custom-gradient relative rounded-lg bg-slate-100 md:bg-transparent">
          {transaction.text}
        </span>
        <span className="item-amount rounded-lg bg-slate-100 md:bg-transparent">
          {sign} Ksh {addCommas(Math.abs(transaction.amount))}
        </span>
        <span className="rounded-lg bg-slate-100 md:bg-transparent">
          <span>{formatDate(new Date(transaction.createdAt), "date")}</span>
        </span>

        <span className="rounded-lg bg-slate-100 md:bg-transparent">
          <span>{formatDate(new Date(transaction.createdAt), "time")}</span>
        </span>
      </div>
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
