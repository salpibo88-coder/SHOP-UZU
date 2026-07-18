"use client";

import { useState } from "react";
import { HiSun, HiMoon, HiSearch } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const items = [
  { name: "Seat Cover Set", price: "$80", category: "Interior", img: "https://static.vecteezy.com/system/resources/thumbnails/048/814/858/small/high-performance-all-terrain-tire-displayed-on-a-white-background-for-automotive-enthusiasts-photo.jpeg" },
  { name: "Floor Mat Set", price: "$60", category: "Interior", img: "https://previews.123rf.com/images/evgenyjs1/evgenyjs11712/evgenyjs1171203514/92110584-four-car-candles-on-white-background-isolation.jpg" },
  { name: "4K Dash Cam", price: "$200", category: "Tech", img: "https://bsg-i.nbxc.com/product/b7/76/eb/039c6dd43ebe636cdc8be20daf.jpg@95Q.webp" },
  { name: "Steering Cover", price: "$35", category: "Interior", img: "https://thumbs.dreamstime.com/b/auto-parts-accessories-oil-fuel-air-filter-engine-car-isolated-white-background-260281092.jpg" },
  { name: "Phone Holder", price: "$25", category: "Tech", img: "https://thumbs.dreamstime.com/b/auto-parts-accessories-top-view-oil-fuel-air-filter-engine-car-isolated-white-background-264351884.jpg" },
  { name: "Car Polish Kit", price: "$45", category: "Exterior", img: "https://thumbs.dreamstime.com/b/car-accessories-road-emergency-items-white-background-52135953.jpg" },
  { name: "Air Freshener", price: "$15", category: "Interior", img: "https://scalearts.in/cdn/shop/products/Summit-accessories-garage-set-1-18-greenlight-scale-car-scale-model-car-1.jpg?v=1598631409" },
  { name: "Tire Inflator", price: "$55", category: "Exterior", img: "https://img.freepik.com/premium-photo/sideview-mirror_1489838-24.jpg" },
];

type Product = { name: string; price: string; img: string; category: string };

interface Props {
  onBuy?: () => void;
}

export default function Accessories({ onBuy }: Props) {
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
            <h1 className="text-2xl font-black tracking-tight">Car Accessories</h1>
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