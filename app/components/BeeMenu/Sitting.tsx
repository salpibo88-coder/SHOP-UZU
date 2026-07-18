"use client";

import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const furniture = [
  { name: "Modern Sofa", price: "$850", category: "Sofa", img: "https://static.vecteezy.com/system/resources/thumbnails/019/051/012/small/isolated-chair-on-white-background-furniture-interior-design-modern-gray-chair-free-photo.jpg" },
  { name: "Armchair", price: "$420", category: "Chair", img: "https://st4.depositphotos.com/38013370/39992/i/450/depositphotos_399921568-stock-photo-modern-comfortable-furniture-white-background.jpg" },
  { name: "Office Chair", price: "$320", category: "Chair", img: "https://img.magnific.com/free-vector/pink-armchair-isolated-white-background_107791-29339.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Recliner", price: "$650", category: "Sofa", img: "https://static.vecteezy.com/system/resources/thumbnails/032/384/976/small/furniture-on-white-background-ai-generative-photo.jpg" },
  { name: "Bean Bag", price: "$120", category: "Casual", img: "https://img.magnific.com/free-vector/white-3d-table-chairs-isolated-background_107791-25856.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Lounge Chair", price: "$580", category: "Chair", img: "https://static.vecteezy.com/system/resources/previews/032/385/458/large_2x/furniture-on-white-background-ai-generative-photo.jpg" },
  { name: "Sectional Sofa", price: "$1,200", category: "Sofa", img: "https://static.vecteezy.com/system/resources/thumbnails/050/024/722/small/collection-of-rattan-chairs-each-cut-out-in-highquality-on-a-white-background-perfect-for-patio-and-garden-furniture-catalogs-free-photo.jpg" },
  { name: "Accent Chair", price: "$380", category: "Chair", img: "https://thumbs.dreamstime.com/b/table-four-chairs-kitchen-isolated-white-background-furniture-made-natural-wood-table-four-chairs-kitchen-173276722.jpg" },
  { name: "Rocking Chair", price: "$290", category: "Casual", img: "https://static.vecteezy.com/system/resources/previews/032/384/718/large_2x/furniture-on-white-background-ai-generative-photo.jpg" },
];

type Product = { name: string; price: string; img: string; category: string };

interface Props {
  onBuy?: () => void;
}

export default function Sitting({ onBuy }: Props) {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [buying, setBuying] = useState<Product | null>(null);

  const filtered = furniture.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  const bg = dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900";

  return (
    <section className={`min-h-screen py-6 ${bg} transition-colors duration-300`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Furniture Collection</h1>
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