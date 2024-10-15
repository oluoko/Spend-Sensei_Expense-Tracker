import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Logo from "./Logo";

const Header = async () => {
  const user = await checkUser();

  return (
    <nav className="navbar h-14 md:h-20 bg-[#505760] ">
      <div className="navbar-container h-full w-full md:w-4/5 my-4 ">
        <Logo />
        <div className="">
          <SignedOut>
            <div className="sign-in-button">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="user-button">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
