import { SignInButton } from "@clerk/nextjs";
import Welcome from "./Welcome";

const Guest = () => {
  return (
    <div className="guest  h-[60vh] md:h-[80vh] ">
      <Welcome name="" />
      <div className="text-2xl md:text-4xl w-full">
        <SignInButton />
      </div>
    </div>
  );
};

export default Guest;
<div className="guest"></div>;
