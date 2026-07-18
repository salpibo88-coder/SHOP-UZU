"use client";

import { useState } from "react";
import { HiSun, HiMoon, HiSearch } from "react-icons/hi";
import { BsStarFill, BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image"; 
import { FiShoppingCart } from "react-icons/fi";

const items = [
  { name: "SUV Luxury", category: "SUV", date: "May 25, 2024", price: "$45,000", img: "https://img.magnific.com/premium-photo/isolated-white-freightliner-cargo-truck-commercial-transportation-white-background_1257223-59038.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Pickup Pro", category: "Pickup", date: "May 25, 2024", price: "$38,000", img: "https://t3.ftcdn.net/jpg/02/82/90/80/360_F_282908065_i4cyqVUOLJ8SHN401WC5bY9r0D1zslKR.jpg" },
  { name: "City Van", category: "Van", date: "May 25, 2024", price: "$28,000", img: "https://thumbs.dreamstime.com/b/dump-body-truck-20689138.jpg" },
  { name: "Heavy Duty", category: "Pickup", date: "May 25, 2024", price: "$75,000", img: "https://t4.ftcdn.net/jpg/14/25/33/39/360_F_1425333972_gw84Lzf5kLrZbHRqWHjgmOeo1nQhQUP7.jpg" },
  { name: "Off-Road King", category: "Pickup", date: "May 25, 2024", price: "$52,000", img: "https://png.pngtree.com/png-clipart/20250427/original/pngtree-a-bright-red-semi-truck-with-sleek-design-and-white-trailer-png-image_20859633.png" },
  { name: "Cargo Van", category: "Van", date: "May 25, 2024", price: "$32,000", img: "https://img.magnific.com/premium-photo/front-view-modern-white-semitruck-box-trailer-studio-pure-white-background_909686-1854.jpg?semt=ais_hybrid&w=740&q=80" },
];

type Product = { name: string; price: string; img: string; category: string };

interface Props {
  onBuy?: () => void;
}

export default function Truck({ onBuy }: Props) {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [buying, setBuying] = useState<Product | null>(null);

  const filtered = items.filter((item) => filter === "All" || item.category === filter)
                        .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const bg = dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900";

  return (
    <section className={`min-h-screen py-6 ${bg} transition-colors duration-300`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Trucks & SUVs</h1>
            <p className="text-sm text-gray-400 font-medium">{filtered.length} items found</p>
          </div>
          <button onClick={() => setDark(!dark)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {dark ? <HiSun className="text-[#00ff00]" /> : <HiMoon />}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-3">
                <span className="absolute top-2 left-2 z-10 text-[10px] font-bold text-white bg-[#fa00e5] px-2 py-0.5 rounded-md">NEW</span>
                {/* Fixed: Removed leading slash from src */}
                <Image src={item.img} alt={item.name} fill className="object-contain p-3" unoptimized />
                <button onClick={() => setWishlist(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])} 
                        className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full">
                  {wishlist.includes(i) ? <BsHeartFill className="text-red-500" /> : <BsHeart />}
                </button>
              </div>

              <h3 className="font-extrabold text-sm text-[#474646] truncate">{item.name}</h3>
              <p className="text-xs text-gray-400 font-bold mb-2">{item.category}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[#ff00b3]  font-black text-sm">{item.price}</span>
                <button onClick={() => { setBuying({ name: item.name, price: item.price, img: item.img, category: item.category }); onBuy?.(); }}
                        className="bg-pink-50 text-[#ff00d4] p-2 rounded-lg hover:bg-[#ff00d4] hover:text-white transition-colors">
                  <FiShoppingCart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}