import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h1 className="py-6 text-xl">
        Welcome,{" "}
        <span className="text-2xl font-extrabold font-sans">
          {" "}
          {user.firstName}
        </span>
        , to Spend Sensei
      </h1>

      <p className="text-lg font-semibold">Master your money moves!</p>
    </main>
  );
};

export default HomePage;
