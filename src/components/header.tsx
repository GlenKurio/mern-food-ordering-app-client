import { Link } from "react-router-dom";
import MobileNav from "./mobile-nav";
import MainNav from "./ui/main-nav";

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          className="text-3xl font-bold tracking-tight text-orange-500"
          to="/"
        >
          MernEats.com
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
}