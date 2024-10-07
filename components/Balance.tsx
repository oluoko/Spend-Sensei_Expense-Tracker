import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas, twoDP } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();

  // Ensure balance is passed through twoDP first, then add commas
  const formattedBalance = addCommas(twoDP(balance ?? 0));

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className="text-4xl font-bold">Ksh {formattedBalance}</h1>
    </>
  );
};

export default Balance;
