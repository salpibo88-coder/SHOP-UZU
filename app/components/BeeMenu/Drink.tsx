"use client";

import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const items = [
  { name: "Coffee", price: "$5", category: "Energy", img: "https://thumbs.dreamstime.com/b/cup-coffee-cream-isolated-white-background-33090195.jpg" },
  { name: "Sport Hydrate", price: "$3", category: "Energy", img: "https://img.freepik.com/premium-photo/glass-strawberry-milkshake-isolated-white-background_185193-46813.jpg" },
  { name: "Tropical Cocktail", price: "$12", category: "Cocktail", img: "https://t4.ftcdn.net/jpg/19/66/04/51/360_F_1966045177_SJeXUk3X8PnXigVz2S1Tr7QvVaHRoYv6.jpg" },
  { name: "Espresso", price: "$6", category: "Coffee", img: "https://static.vecteezy.com/system/resources/previews/070/210/049/large_2x/fresh-orange-juice-isolated-on-white-background-photo.jpeg" },
  { name: "Orange Juice", price: "$4", category: "Juice", img: "https://png.pngtree.com/thumb_back/fh260/background/20240604/pngtree-cocktail-cosmopolitan-isolated-on-the-white-background-image_15739504.jpg" },
  { name: "Green Tea", price: "$3", category: "Coffee", img: "https://static.vecteezy.com/system/resources/previews/030/708/209/large_2x/of-a-tibetan-butter-tea-drink-isolated-on-flat-white-background-generative-ai-photo.jpg" },
  { name: "Mango Smoothie", price: "$7", category: "Juice", img: "https://5.imimg.com/data5/RT/YU/MY-5825824/milk-cream-500x500.png" },
  { name: "Lemon Mojito", price: "$10", category: "Cocktail", img: "https://static.vecteezy.com/system/resources/thumbnails/028/636/318/small/white-cup-with-cappuccino-on-white-background-coffee-drink-with-latte-art-ai-generated-photo.jpg" },
];

type Product = { name: string; price: string; img: string; category: string };

interface Props {
  onBuy?: () => void;
}

export default function Drink({ onBuy }: Props) {
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
            <h1 className="text-2xl font-black tracking-tight">Drinks Menu</h1>
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