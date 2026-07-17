"use client";

import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const items = [
  { name: "Racing Pro", price: "$60,225", category: "Sport", img: "https://st2.depositphotos.com/1016223/10323/i/950/depositphotos_103238204-stock-photo-white-motorcycle-isolated-on-a.jpg" },
  { name: "Yamaha R1", price: "$5,000", category: "Sport", img: "https://img.freepik.com/premium-photo/3d-red-super-sports-motorbike-white-isolated-background-3d-illustration_101266-2287.jpg" },
  { name: "Honda PCX", price: "$500", category: "Scooter", img: "https://premiumbikes.ph/wp-content/uploads/2023/12/Honda-NEW-PCX-ABS-3.png" },
  { name: "CF Moto 300", price: "$5,000", category: "Sport", img: "https://acdn-us.mitiendanube.com/stores/001/275/253/products/cf-moto-300-sr-aea8e81ae9314cde2617270974099494-640-0.webp" },
  { name: "Sport Cruiser", price: "$8,500", category: "Cruiser", img: "https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-sleek-two-seater-urban-motorcycle-in-black-against-a-white-background-image_3803728.jpg" },
  { name: "Classic Moto", price: "$3,200", category: "Cruiser", img: "/moto.png" },
  { name: "Harley Style", price: "$12,000", category: "Cruiser", img: "https://www.shutterstock.com/image-illustration/deep-pink-motorcycle-isolated-on-260nw-387436291.jpg" },
  { name: "E-Scooter", price: "$1,900", category: "Scooter", img: "https://c4.wallpaperflare.com/wallpaper/29/381/284/motorbike-derbi-gpr-sports-wallpaper-preview.jpg" },
  { name: "Pink Sportbike", price: "$1,500", category: "Scooter", img: "https://thumbs.dreamstime.com/b/pink-white-sportbike-motorcycle-background-studio-shot-modern-sleek-design-clean-lines-powerful-engine-aerodynamic-body-386870012.jpg" },
];

type Product = { name: string; price: string; img: string; category: string };

export default function Motobike() {
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
            <h1 className="text-2xl font-black tracking-tight">Motorbikes</h1>
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
                <button onClick={() => setBuying({ name: item.name, price: item.price, img: item.img, category: item.category })}
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