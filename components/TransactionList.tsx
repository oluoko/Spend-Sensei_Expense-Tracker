"use client";
import { useState, useEffect } from "react";
import { Transaction } from "@/types/Transaction";
import TransactionItem from "./ TransactionItem";
import getTransactions from "@/app/actions/getTransactions";

const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); // Default to 5 transactions per page
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { transactions, error } = await getTransactions();
      if (error) {
        setError(error);
      } else {
        if (transactions) {
          setTransactions(transactions);
        }
      }
    };

    fetchTransactions();
  }, []);

  const totalPages = Math.ceil(transactions.length / pageSize);

  const currentTransactions = transactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when page size changes
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <>
      <div className="flex justify-between mb-2 py-2 text-lg md:text-xl border-b border-slate-700/35">
        <div>History</div>
        <div>No. of Transactions: {transactions.length}</div>
      </div>

      <div className="pagination-controls flex justify-between w-full md:w-1/2">
        <label htmlFor="pageSize">Transactions per page:</label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={handlePageSizeChange}
          className="page-size-select"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <ul className="list">
        {currentTransactions.map((transaction: Transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>

      <div className="navigation-buttons flex justify-between mb-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="prev-btn bg-[#505760] text-white h-[40px] w-[100px] text-lg md:text-xl"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="next-btn bg-[#505760] text-white h-[40px] w-[100px] text-lg md:text-xl"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TransactionList;
