import Image from "next/image";
import Button from "../ui/Button";

import CurrencyFilter from "@/components/filters/CurrencyFilter";

export default function Header() {
  return (
    <header className="">
      <div className="max-w-7xl gap-4 mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex gap-3 items-center">
          <Image
            src="/images/logo.webp"
            alt="Casino Logo"
            width={200}
            height={200}
            className="w-8 h-8"
          />
          <h1 className="text-3xl font-bold text-white">Casino Lobby</h1>
        </div>
        <ul className="flex space-x-3 items-center">
          <li className="">
            <CurrencyFilter />
          </li>
          <li>
            <Button variant="primary">Login</Button>
          </li>
          <li>
            <Button variant="secondary">Sign Up</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
