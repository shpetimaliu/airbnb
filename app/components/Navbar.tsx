import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";

function Navbar() {
  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-32 hidden lg:block" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
