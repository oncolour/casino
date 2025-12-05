"use client";
import Image from "next/image";
import { Select } from "../ui/Select";
import { useLobby } from "@/hooks/useLobby";
import { Currency, CURRENCIES } from "@/lib/types";

export default function CurrencyFilter() {
  const { currency, setCurrency } = useLobby();

  return (
    <div className="items-center flex text-white font-bold h-10 w-full rounded-lg border border-none bg-surfaceTertiary pl-3 py-2 text-sm focus-within:border-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500/50 ">
      <Image
        src="/images/coin.png"
        alt="Casino Logo"
        width={600}
        height={600}
        className="w-5 h-5 -mx-1 z-10"
      />
      <Select
        id="currency-select"
        label="Currency"
        labelClassName="sr-only"
        options={CURRENCIES.map((currency) => ({
          value: currency,
          label: currency,
        }))}
        value={currency}
        onChange={(e) => setCurrency(e.target.value as Currency)}
        placeholder="Currency"
        placeholderDisabled={true}
        className="field-sizing-content focus:ring-0 focus:ring-transparent"
      />
    </div>
  );
}
