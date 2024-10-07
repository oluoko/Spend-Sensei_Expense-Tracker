import AddTransaction from "@/components/AddTransaction";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import Balance from "@/components/Balance";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h2 className="py-6 text-xl">
        Welcome,{" "}
        <span className="text-2xl font-extrabold font-sans">
          {" "}
          {user.firstName}
        </span>
        , to Spend Sensei
      </h2>

      <p className="text-lg font-semibold mb-8">Master your money moves!</p>
      <Balance />
      <AddTransaction />
    </main>
  );
};

export default HomePage;
