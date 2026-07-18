"use client";

import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const items = [
  { name: "Mountain Pro", price: "$1,200", category: "Mountain", img: "https://static.vecteezy.com/system/resources/thumbnails/010/395/922/small/race-road-bike-isolated-on-white-background-free-photo.jpg" },
  { name: "Road Racer", price: "$900", category: "Road", img: "https://previews.123rf.com/images/paulmichaelhughes/paulmichaelhughes1307/paulmichaelhughes130700003/20907427-mountain-bike-silhouette-on-white-background.jpg" },
  { name: "E-Bike Pro", price: "$2,500", category: "Electric", img: "https://img.freepik.com/premium-photo/cartoon-style-bicycle-white-background-ar-169-v-6-job-id-cc963f669b5b46088d4dcf1fa01a1e5d_1134901-385006.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "BMX Street", price: "$600", category: "Mountain", img: "https://thumbs.dreamstime.com/b/pink-vintage-bicycle-wicker-basket-transparent-background-pink-vintage-bicycle-charming-wicker-basket-isolated-335458539.jpg" },
  { name: "City Cruiser", price: "$450", category: "Road", img: "https://c8.alamy.com/comp/CFBT7H/retro-style-ladies-bike-on-plain-white-studio-background-CFBT7H.jpg" },
  { name: "Folding Bike", price: "$380", category: "Electric", img: "https://www.shutterstock.com/image-photo/highquality-studio-shot-black-white-600nw-2580940413.jpg" },
  { name: "Gravel King", price: "$1,100", category: "Mountain", img: "https://thumbs.dreamstime.com/b/red-children-s-bicycle-isolated-white-background-image-74346378.jpg" },
  { name: "E-Mountain", price: "$3,200", category: "Electric", img: "https://www.shutterstock.com/image-photo/isolated-mountain-bike-blue-color-600nw-1429659080.jpg" },
];

type Product = { name: string; price: string; img: string; category: string };

interface Props {
  onBuy?: () => void;
}

export default function Bicycle({ onBuy }: Props) {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [buying, setBuying] = useState<Product | null>(null);

  const filtered = items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  const bg = dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900";

  return (
    <section className={`min-h-screen py-6 ${bg} transition-colors duration-300`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Bicycles</h1>
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
                <Image src={item.img} alt={item.name} fill className="object-contain p-3" unoptimized />
                <button onClick={() => setWishlist(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])} 
                        className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full">
                  {wishlist.includes(i) ? <BsHeartFill className="text-red-500" /> : <BsHeart />}
                </button>
              </div>

              <h3 className="font-extrabold text-sm text-[#474646] truncate">{item.name}</h3>
              <p className="text-xs text-gray-400 font-bold mb-2">{item.category}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[#ff00b3] font-black text-sm">{item.price}</span>
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