import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="guest w-full h-[60vh] md:h-[80vh]  flex flex-col justify-center items-center gap-5 md:gap-10">
      <h1 className="text-3xl md:text-6xl font-extrabold">
        Welcome to Spend Sensei
      </h1>
      <p className="text-2xl md:text-4xl">Master your money moves!</p>

      <p className="text-2xl md:text-4xl">
        Please sign in to manage your transactions{" "}
      </p>
      <div className="text-2xl md:text-4xl w-full">
        <SignInButton />
      </div>
    </div>
  );
};

export default Guest;
<div className="guest"></div>;
