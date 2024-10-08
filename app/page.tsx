// "use client";

import AddTransaction from "@/components/AddTransaction";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";
import Welcome from "@/components/Welcome";
// import { useEffect } from "react";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  // window on load
  // window.onload = function () {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       return <Welcome name={user.firstName ?? "deji"} />;
  //     });
  //   }, []);
  // };

  return (
    <main className="w-full">
      <div className="grid md:flex md:justify-between">
        <div className="w-full md:w-2/3 md:pr-[70px]">
          <AddTransaction />
          <TransactionList />
        </div>
        <div className="w-full md:w-1/3  relative ">
          <div className="relative md:fixed w-full md:w-1/3 md:top-[15%] shadow-xl rounded-2xl bg-gradient-to-br from-[#D9D0CC] via-[#9E7959] to-[#9A5A4C] p-4 md:p-10">
            <Balance />
            <IncomeExpense />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
