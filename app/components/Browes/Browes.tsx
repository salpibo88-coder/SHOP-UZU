"use client";

import { useState, useRef } from "react";
import { HiSearch, HiArrowLeft, HiSun, HiMoon } from "react-icons/hi";
import { BsStarFill, BsHeart, BsHeartFill, BsGridFill, BsList } from "react-icons/bs";

interface Props {
  onBuy?: () => void;
  onBack?: () => void;
}

const allItems = [
  { image: "https://static.vecteezy.com/system/resources/thumbnails/031/158/144/small/midnight-black-modern-fast-sports-beauty-shot-photo.jpg", name: "Bugatti Chiron", price: "$1,000", category: "Car", rating: 4.9, reviews: 234 },
  { image: "https://t3.ftcdn.net/jpg/04/06/40/40/360_F_406404058_NEhE49oNHXA4DdgA45S17TQbIcnSLR5Y.jpg", name: "Ferrari F40", price: "$10,000", category: "Car", rating: 4.8, reviews: 189 },
  { image: "https://www.shutterstock.com/image-photo/bmw-m4-car-transparent-background-600nw-2654621533.jpg", name: "BMW M4", price: "$69,090", category: "Car", rating: 4.7, reviews: 312 },
  { image: "/Lambo.jpg", name: "Lamborghini", price: "$120,000", category: "Car", rating: 5.0, reviews: 445 },
  { image: "https://thumbs.dreamstime.com/b/white-nissan-gt-r-sports-car-background-daz-d-style-gtr-concept-stunning-model-rendered-sleek-blend-light-black-302486997.jpg", name: "Nissan GTR", price: "$69,090", category: "Car", rating: 4.6, reviews: 98 },
  { image: "https://img.freepik.com/premium-photo/3d-red-super-sports-motorbike-white-isolated-background-3d-illustration_101266-2287.jpg", name: "Yamaha R1", price: "$5,000", category: "Motorbike", rating: 4.7, reviews: 289 },
  { image: "https://premiumbikes.ph/wp-content/uploads/2023/12/Honda-NEW-PCX-ABS-3.png", name: "Honda PCX", price: "$4,399", category: "Motorbike", rating: 4.5, reviews: 567 },
  { image: "https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-sleek-two-seater-urban-motorcycle-in-black-against-a-white-background-image_3803728.jpg", name: "Classic Moto", price: "$3,200", category: "Motorbike", rating: 4.3, reviews: 92 },
  { image: "https://www.shutterstock.com/image-photo/suv-on-white-background-front-600nw-2557812519.jpg", name: "SUV Luxury", price: "$45,000", category: "Truck", rating: 4.7, reviews: 189 },
  { image: "https://thumbs.dreamstime.com/b/pickup-truck-white-background-isolated-3d-rendering-pickup-truck-white-background-isolated-3d-rendering-138498887.jpg", name: "Pickup Pro", price: "$38,000", category: "Truck", rating: 4.5, reviews: 234 },
  { image: "https://www.shutterstock.com/image-photo/mountain-bike-isolated-on-white-600nw-1907935398.jpg", name: "Mountain Pro", price: "$1,200", category: "Bicycle", rating: 4.7, reviews: 234 },
  { image: "https://thumbs.dreamstime.com/b/electric-bicycle-isolated-white-background-3d-rendering-electric-bicycle-isolated-white-background-3d-rendering-138498887.jpg", name: "E-Bike Pro", price: "$2,500", category: "Bicycle", rating: 4.8, reviews: 445 },
  { image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400", name: "Espresso", price: "$6", category: "Drink", rating: 4.8, reviews: 445 },
  { image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400", name: "Orange Juice", price: "$4", category: "Drink", rating: 4.6, reviews: 312 },
  { image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400", name: "Cocktail", price: "$12", category: "Drink", rating: 4.7, reviews: 189 },
  { image: "https://thumbs.dreamstime.com/b/one-rich-strawberry-fruit-white-isolated-background-35372483.jpg", name: "Strawberries", price: "$5", category: "Fruit", rating: 4.8, reviews: 445 },
  { image: "https://thumbs.dreamstime.com/b/orange-fruit-isolated-white-background-61947616.jpg", name: "Alphonso Mango", price: "$4", category: "Fruit", rating: 4.9, reviews: 189 },
  { image: "https://thumbs.dreamstime.com/b/fresh-red-apple-fruit-isolated-white-background-130051566.jpg", name: "Orange", price: "$3", category: "Fruit", rating: 4.6, reviews: 234 },
  { image: "https://st.depositphotos.com/1500766/2998/i/450/depositphotos_29982189-stock-photo-sofa-furniture-isolated-on-white.jpg", name: "Modern Sofa", price: "$850", category: "Sitting", rating: 4.8, reviews: 124 },
  { image: "https://png.pngtree.com/thumb_back/fh260/background/20230806/pngtree-clean-white-living-room-with-white-sofa-image_12985535.jpg", name: "Armchair", price: "$420", category: "Sitting", rating: 4.5, reviews: 89 },
  { image: "https://img.magnific.com/free-photo/cosmetic-products-rose-white-paper-clipboard-isolated-against-white-background_23-2148074025.jpg?semt=ais_hybrid&w=740&q=80", name: "4K Dash Cam", price: "$200", category: "Accessories", rating: 4.8, reviews: 445 },
  { image: "https://img.magnific.com/premium-photo/perfume-accessories-cosmetics-phone-white-background_392895-452227.jpg?semt=ais_hybrid&w=740&q=80", name: "Phone Holder", price: "$25", category: "Accessories", rating: 4.6, reviews: 567 },
];

const categories = ["All", "Car", "Motorbike", "Truck", "Bicycle", "Drink", "Fruit", "Sitting", "Accessories"];

const catAccent: Record<string, { badge: string; btn: string; price: string }> = {
  Car:         { badge: "bg-indigo-100 text-indigo-700",  btn: "bg-indigo-600",  price: "text-indigo-600" },
  Motorbike:   { badge: "bg-orange-100 text-orange-700",  btn: "bg-orange-500",  price: "text-orange-600" },
  Truck:       { badge: "bg-yellow-100 text-yellow-700",  btn: "bg-yellow-500",  price: "text-yellow-600" },
  Bicycle:     { badge: "bg-green-100 text-green-700",    btn: "bg-green-600",   price: "text-green-600" },
  Drink:       { badge: "bg-blue-100 text-blue-700",      btn: "bg-blue-600",    price: "text-blue-600" },
  Fruit:       { badge: "bg-red-100 text-red-700",        btn: "bg-red-500",     price: "text-red-500" },
  Sitting:     { badge: "bg-purple-100 text-purple-700",  btn: "bg-purple-600",  price: "text-purple-600" },
  Accessories: { badge: "bg-pink-100 text-pink-700",      btn: "bg-pink-500",    price: "text-pink-500" },
};

const filterActive: Record<string, string> = {
  All: "bg-gray-900 text-white",
  Car: "bg-indigo-600 text-white", Motorbike: "bg-orange-500 text-white",
  Truck: "bg-yellow-500 text-white", Bicycle: "bg-green-600 text-white",
  Drink: "bg-blue-600 text-white", Fruit: "bg-red-500 text-white",
  Sitting: "bg-purple-600 text-white", Accessories: "bg-pink-500 text-white",
};

export default function Browes({ onBuy, onBack }: Props) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [sort, setSort] = useState("default");
  const [dark, setDark] = useState(false);
  const [grid, setGrid] = useState<"grid" | "list">("grid");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const toggleWishlist = (i: number) =>
    setWishlist((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]);

  const filtered = allItems
    .filter((item) => filter === "All" || item.category === filter)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => {
      const p = parseInt(item.price.replace(/\D/g, ""));
      if (minPrice && p < parseInt(minPrice)) return false;
      if (maxPrice && p > parseInt(maxPrice)) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
      if (sort === "price-desc") return parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""));
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "reviews") return b.reviews - a.reviews;
      return 0;
    });

  const bg = dark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900";
  const headerBg = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const cardBg = dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const inputCls = dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400";

  return (
    <div className={`min-h-screen ${bg} transition-colors duration-300`}>

      {/* Compact navbar with mouse-follow bunny */}
      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className="relative overflow-hidden bg-linear-to-r from-gray-900 via-indigo-950 to-gray-900 h-14 flex items-center px-3 sm:px-4 gap-3 border-b border-white/10 shadow-lg"
      >
        <div className="absolute inset-0 bg-linear-to-r from-indigo-600/10 via-transparent to-pink-500/10 pointer-events-none" />

        <button onClick={onBack} className="relative z-10 h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all shrink-0">
          <HiArrowLeft className="text-base" />
        </button>

        <div className="relative z-10 shrink-0"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.35}px)`, transition: "transform 0.1s ease-out" }}>
          <img src="/bunny.png" alt="logo" className="h-9 w-9 object-contain drop-shadow-lg"
            style={{ transform: `rotate(${mousePos.x * 0.5}deg)`, transition: "transform 0.1s ease-out" }} />
        </div>

        <div className="relative z-10 flex-1 min-w-0"
          style={{ transform: `translateX(${mousePos.x * 0.12}px)`, transition: "transform 0.15s ease-out" }}>
          <span className="font-black text-sm sm:text-base tracking-wide"
            style={{ background: "linear-gradient(to right,#facc15,#f472b6,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Shop Uzu TR77
          </span>
          <span className="text-xs text-gray-500 ml-2">{filtered.length} items</span>
        </div>

        <div className="relative z-10 flex items-center gap-1.5 shrink-0">
          <button onClick={() => setDark(!dark)}
            className={`h-7 w-7 rounded-lg flex items-center justify-center transition-all text-sm ${dark ? "bg-yellow-400 text-gray-900" : "bg-white/10 text-white hover:bg-white/20"}`}>
            {dark ? <HiSun /> : <HiMoon />}
          </button>
          <div className={`flex rounded-lg overflow-hidden border ${dark ? "border-gray-700" : "border-white/20"}`}>
            <button onClick={() => setGrid("grid")} className={`px-2 py-1.5 text-xs transition-all ${grid === "grid" ? "bg-indigo-600 text-white" : "bg-white/5 text-gray-400"}`}><BsGridFill /></button>
            <button onClick={() => setGrid("list")} className={`px-2 py-1.5 text-xs transition-all ${grid === "list" ? "bg-indigo-600 text-white" : "bg-white/5 text-gray-400"}`}><BsList /></button>
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)}
            className={`px-2 py-1 rounded-lg border text-xs font-semibold focus:outline-none ${dark ? "bg-gray-800 border-gray-700 text-white" : "bg-white/10 border-white/20 text-white"}`}>
            <option className="text-gray-900" value="default">Sort</option>
            <option className="text-gray-900" value="price-asc">Price ↑</option>
            <option className="text-gray-900" value="price-desc">Price ↓</option>
            <option className="text-gray-900" value="rating">⭐ Top</option>
            <option className="text-gray-900" value="reviews">💬 Most</option>
          </select>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className={`sticky top-0 z-30 ${headerBg} border-b px-4 sm:px-6 py-3 flex flex-col gap-3 shadow-sm transition-colors duration-300`}>

        <div className="relative">
          <HiSearch className={`absolute left-3 top-1/2 -translate-y-1/2 text-lg ${dark ? "text-gray-500" : "text-gray-400"}`} />
          <input type="text" placeholder="Search anything..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all ${inputCls}`} />
        </div>

        <div className="flex gap-2">
          <input type="number" placeholder="Min $" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}
            className={`flex-1 px-3 py-2 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all ${inputCls}`} />
          <input type="number" placeholder="Max $" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}
            className={`flex-1 px-3 py-2 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all ${inputCls}`} />
          {(minPrice || maxPrice) && (
            <button onClick={() => { setMinPrice(""); setMaxPrice(""); }}
              className="px-3 py-2 rounded-xl bg-red-100 text-red-500 text-xs font-bold hover:bg-red-200 transition-all">
              Clear
            </button>
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${filter === cat ? filterActive[cat] : dark ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className={`p-4 sm:p-6 ${grid === "grid" ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" : "flex flex-col gap-4"}`}>
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-24">
            <p className="text-6xl mb-4">🔍</p>
            <p className={`text-xl font-bold ${dark ? "text-gray-400" : "text-gray-400"}`}>No items found</p>
            <button onClick={() => { setSearch(""); setFilter("All"); setMinPrice(""); setMaxPrice(""); }}
              className="mt-4 px-6 py-2 rounded-full bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-all">
              Clear Filters
            </button>
          </div>
        ) : filtered.map((item, i) => {
          const accent = catAccent[item.category] || { badge: "bg-gray-100 text-gray-700", btn: "bg-gray-600", price: "text-gray-600" };
          const saved = wishlist.includes(i);

          if (grid === "list") {
            return (
              <div key={i} className={`${cardBg} rounded-2xl border overflow-hidden flex gap-4 p-3 transition-all duration-300 hover:shadow-md`}>
                <div className="relative h-24 w-32 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <span className={`absolute top-1 left-1 text-xs font-bold px-1.5 py-0.5 rounded-full ${accent.badge}`}>{item.category}</span>
                </div>
                <div className="flex flex-col flex-1 justify-between min-w-0">
                  <div>
                    <h3 className="font-bold text-sm truncate">{item.name}</h3>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, s) => (<BsStarFill key={s} className={`text-xs ${s < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}`} />))}
                      <span className={`text-xs ml-1 ${dark ? "text-gray-400" : "text-gray-400"}`}>({item.reviews})</span>
                    </div>
                    <p className={`text-lg font-extrabold mt-1 ${accent.price}`}>{item.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => toggleWishlist(i)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${saved ? "border-red-400 text-red-500" : dark ? "border-gray-600 text-gray-400" : "border-gray-200 text-gray-400"}`}>
                      {saved ? "❤️ Saved" : "🤍 Save"}
                    </button>
                    <button onClick={onBuy}
                      className={`flex-1 py-1.5 rounded-xl ${accent.btn} hover:opacity-90 text-white font-bold text-xs transition-all hover:scale-[1.02]`}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={i} className={`${cardBg} rounded-2xl shadow-sm hover:shadow-lg border overflow-hidden group flex flex-col transition-all duration-300 hover:-translate-y-0.5`}>
              <div className="relative h-36 sm:h-44 overflow-hidden bg-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <button onClick={() => toggleWishlist(i)}
                  className="absolute top-2 right-2 h-7 w-7 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-110 transition-all">
                  {saved ? <BsHeartFill className="text-red-500 text-xs" /> : <BsHeart className="text-gray-400 text-xs" />}
                </button>
                <span className={`absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full ${accent.badge}`}>{item.category}</span>
              </div>
              <div className="flex flex-col flex-1 p-3 gap-1.5">
                <h3 className="font-bold text-sm truncate">{item.name}</h3>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, s) => (<BsStarFill key={s} className={`text-xs ${s < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-200"}`} />))}
                  <span className={`text-xs ml-1 ${dark ? "text-gray-400" : "text-gray-400"}`}>({item.reviews})</span>
                </div>
                <p className={`text-lg font-extrabold ${accent.price}`}>{item.price}</p>
                <div className="flex gap-1.5 mt-auto">
                  <button onClick={() => toggleWishlist(i)}
                    className={`flex-none px-2 py-1.5 rounded-xl text-xs font-bold border transition-all ${saved ? "border-red-400 text-red-500" : dark ? "border-gray-600 text-gray-400" : "border-gray-200 text-gray-400 hover:border-red-300 hover:text-red-400"}`}>
                    {saved ? "❤️" : "🤍"}
                  </button>
                  <button onClick={onBuy}
                    className={`flex-1 py-1.5 rounded-xl ${accent.btn} hover:opacity-90 text-white font-bold text-xs transition-all hover:scale-[1.02] shadow-sm`}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
