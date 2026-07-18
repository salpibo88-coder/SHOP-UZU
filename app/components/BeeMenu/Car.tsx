"use client";

import { useState } from "react";
import { HiSun, HiMoon, HiSearch } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const items = [
  { name: "Bugatti Chiron", price: "$1,000", category: "Luxury", img: "https://static.vecteezy.com/system/resources/thumbnails/031/158/144/small/midnight-black-modern-fast-sports-beauty-shot-photo.jpg" },
  { name: "Ferrari F40", price: "$10,000", category: "Sports", img: "https://t3.ftcdn.net/jpg/04/06/40/40/360_F_406404058_NEhE49oNHXA4DdgA45S17TQbIcnSLR5Y.jpg" },
  { name: "BMW M4", price: "$69,090", category: "Sports", img: "https://www.shutterstock.com/image-photo/bmw-m4-car-transparent-background-600nw-2654621533.jpg" },
  { name: "Mercedes AMG", price: "$69,090", category: "Luxury", img: "https://thumbs.dreamstime.com/b/metallic-granite-grey-modern-super-sports-car-metallic-granite-grey-modern-super-sports-car-isolated-white-background-108483828.jpg" },
  { name: "Nissan GTR", price: "$69,090", category: "Sports", img: "https://thumbs.dreamstime.com/b/white-nissan-gt-r-sports-car-background-daz-d-style-gtr-concept-stunning-model-rendered-sleek-blend-light-black-302486997.jpg" },
  { name: "Blue Supercar", price: "$55,000", category: "Sports", img: "https://previews.123rf.com/images/denphumi/denphumi1209/denphumi120900603/15404840-sports-car-on-a-white-background.jpg" },
];

type Product = { name: string; price: string; img: string; category: string };

interface Props {
  onBuy?: () => void;
}

export default function Car({ onBuy }: Props) {
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
            <h1 className="text-2xl font-black tracking-tight">Luxury & Sports Cars</h1>
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