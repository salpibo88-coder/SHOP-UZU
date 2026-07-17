"use client";

import { useState } from "react";
import { MdDirectionsCar, MdTwoWheeler } from "react-icons/md";
import { GiTruck, GiCycle, GiSofa } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";
import Car from "../BeeMenu/Car";
import Motobike from "../BeeMenu/Motobike";
import Truck from "../BeeMenu/Truck";
import Bicycle from "../BeeMenu/Bicycle";
import Sitting from "../BeeMenu/Sitting";
import Accessories from "../BeeMenu/Accessories";

interface Props {
  onBuy?: () => void;
  onBack?: () => void;
}

type Category = "CAR" | "MOTORBIKE" | "TRUCK" | "BICYCLE" | "ACCESSORIES" | "SITTING";

const categories = [
  { label: "CAR" as Category,         icon: <MdDirectionsCar className="text-4xl text-indigo-400" />, color: "hover:bg-indigo-50 dark:hover:bg-indigo-950 border-l-indigo-400" },
  { label: "MOTORBIKE" as Category,   icon: <MdTwoWheeler className="text-4xl text-orange-400" />,    color: "hover:bg-orange-50 dark:hover:bg-orange-950 border-l-orange-400" },
  { label: "TRUCK" as Category,       icon: <GiTruck className="text-4xl text-yellow-500" />,          color: "hover:bg-yellow-50 dark:hover:bg-yellow-950 border-l-yellow-400" },
  { label: "BICYCLE" as Category,     icon: <GiCycle className="text-4xl text-green-500" />,          color: "hover:bg-green-50 dark:hover:bg-green-950 border-l-green-400" },
  { label: "ACCESSORIES" as Category, icon: <BsTools className="text-4xl text-pink-400" />,            color: "hover:bg-pink-50 dark:hover:bg-pink-950 border-l-pink-400" },
  { label: "SITTING" as Category,     icon: <GiSofa className="text-4xl text-purple-500" />,           color: "hover:bg-purple-50 dark:hover:bg-purple-950 border-l-purple-400" },
];

export default function BeeMenu({ onBuy, onBack }: Props) {
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      <div className="bg-gray-900 dark:bg-gray-800 px-6 py-4 flex items-center gap-4 sticky top-0 z-50 border-b border-yellow-400">
        <button
          onClick={selected ? () => setSelected(null) : onBack}
          className="h-9 w-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
        >
          <HiArrowLeft className="text-lg" />
        </button>
        <h1 className="text-xl font-extrabold text-white tracking-widest">
          {selected ?? "SELECT CATEGORY"}
        </h1>
      </div>

      {!selected && (
        <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelected(cat.label)}
              className={`flex items-center gap-5 px-8 py-7 text-left bg-white dark:bg-gray-950 border-l-4 border-transparent transition-all duration-200 ${cat.color}`}
            >
              {cat.icon}
              <span className="text-2xl font-black text-gray-800 dark:text-gray-100 tracking-widest">{cat.label}</span>
              <span className="ml-auto text-gray-300 dark:text-gray-600 text-2xl">›</span>
            </button>
          ))}
        </div>
      )}

      {selected === "CAR"         && <Car onBuy={onBuy} />}
      {selected === "MOTORBIKE"   && <Motobike onBuy={onBuy} />}
      {selected === "TRUCK"       && <Truck onBuy={onBuy} />}
      {selected === "BICYCLE"     && <Bicycle onBuy={onBuy} />}
      {selected === "ACCESSORIES" && <Accessories onBuy={onBuy} />}
      {selected === "SITTING"     && <Sitting onBuy={onBuy} />}

    </div>
  );
}