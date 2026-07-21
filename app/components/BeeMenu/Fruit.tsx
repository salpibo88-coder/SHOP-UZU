"use client";

import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const items = [
  { name: "Dragon Fruit", price: "$2", category: "Citrus", img: "https://www.shutterstock.com/image-photo/dragon-fruit-isolated-on-white-260nw-422354869.jpg" },
  { name: "Strawberry", price: "$1", category: "Tropical", img: "https://static.vecteezy.com/system/resources/thumbnails/062/511/247/small_2x/strawberry-isolated-two-perfect-strawberries-with-leaf-on-white-background-photo.jpg" },
  { name: "Durian", price: "$3", category: "Tropical", img: "https://thumbs.dreamstime.com/b/durian-fruit-isolated-white-background-high-quality-detailed-image-advertising-301420591.jpg" },
  { name: "Mango", price: "$5", category: "Berry", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400" },
  { name: "Pomegranate", price: "$4", category: "Tropical", img: "https://img.magnific.com/free-photo/pngjuicy-pomegranate-isolated-white-background_185193-165541.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Blueberries", price: "$6", category: "Berry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SCaQPXvz44CN_IEpmItoyWkz3Krc9Ef7Ig&s" },
  { name: "Kiwi", price: "$3", category: "Tropical", img: "https://static.vecteezy.com/system/resources/thumbnails/071/111/325/small/freshly-cut-kiwi-fruit-displays-juicy-green-flesh-isolated-against-a-clean-white-background-free-photo.jpeg" },
  { name: "Apple", price: "$6", category: "Tropical", img: "https://img.magnific.com/free-photo/png-red-apple-isolated-white-background_185193-163303.jpg?semt=ais_hybrid&w=740&q=80" },
];

type Product = { name: string; price: string; img: string; category: string };

interface Props {
  onBuy?: () => void;
}

export default function Fruit({ onBuy }: Props) {
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
            <h1 className="text-2xl font-black tracking-tight">Fruit Market</h1>
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
                <Image src={item.img} alt={item.name} fill className="object-cover p-3" unoptimized />
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