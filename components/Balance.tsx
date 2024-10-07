import getUserBalance from "@/app/actions/getUserBalance";

const Balance = async () => {
  const { balance } = await getUserBalance();
  return (
    <>
      <h4>Your Balance</h4>
      <h1 className="text-4xl font-bold">Ksh, {balance}</h1>
    </>
  );
};

export default Balance;
