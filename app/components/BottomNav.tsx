"use client";

import { MdDirectionsCar, MdOutlineLocalGroceryStore, MdSearch, MdPersonOutline } from "react-icons/md";
import { BsCart } from "react-icons/bs";

const NAV_ITEMS = [
  { icon: MdDirectionsCar, label: "Cars", page: "Car" },
  { icon: MdOutlineLocalGroceryStore, label: "Grocery", page: "browes" },
  { icon: MdSearch, label: "Search", page: "browes" },
  { icon: BsCart, label: "Carts", page: "payment" },
  { icon: MdPersonOutline, label: "Account", page: "login" },
];

interface Props { onNav?: (page: string) => void; }

export default function BottomNav({ onNav }: Props) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-3 z-50">
      {NAV_ITEMS.map((item, i) => (
        <button
          key={i}
          onClick={() => onNav?.(item.page)}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-amber-500 transition"
        >
          <item.icon className="text-2xl" />
          <span className="text-[10px] font-bold">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
