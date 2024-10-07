import AddTransaction from "@/components/AddTransaction";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main className="w-full">
      <h2 className="py-6 text-xl">
        Welcome,{" "}
        <span className="text-2xl font-extrabold font-sans">
          {" "}
          {user.firstName}
        </span>
        , to Spend Sensei
      </h2>

      <p className="text-lg font-semibold mb-8">Master your money moves!</p>
      <div className="grid md:flex md:justify-between">
        <div className="w-full md:w-2/3 md:pr-[70px]">
          <AddTransaction />
          <TransactionList />
        </div>
        <div className="w-full md:w-1/3  relative ">
          <div className="relative md:fixed w-full md:w-1/3 md:top-[15%] border-black border-[0.4px] shadow-md bg-[#D9D0CC]  rounded-xl p-4 md:p-10">
            <Balance />
            <IncomeExpense />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
