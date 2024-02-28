import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import mobileLogo from "../../public/mobile_logo.svg";
import UserNav from "./UserNav";

function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-32 hidden lg:block" />
          <Image
            src={mobileLogo}
            alt="Mobile Logo"
            className="block lg:hidden w-12"
          />
        </Link>
        <div className="rounded-full border px-5 py-2">
          <h1>Hello from search </h1>
        </div>

        <UserNav />
      </div>
    </nav>
  );
}

export default Navbar;
