import { Transaction } from "@/types/Transaction";
import { addCommas, twoDP } from "@/lib/utils";
import { toast } from "react-toastify";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) {
      return;
    }

    await deleteTransaction(transactionId);

    toast.success("Transaction deleted successfully");
  };

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign} Ksh {addCommas(twoDP(Math.abs(transaction.amount)))}
      </span>
      <button onClick={() => handleDeleteTransaction(transaction.id)}>x</button>
    </li>
  );
};

export default TransactionItem;
