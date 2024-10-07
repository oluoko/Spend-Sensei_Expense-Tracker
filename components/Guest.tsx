import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="guest">
      <h1>Welcome to Spend Sensei</h1>
      <p>Master your money moves!</p>

      <p>Please sign in to manage your transactions </p>
      <SignInButton />
    </div>
  );
};

export default Guest;
<div className="guest"></div>;
