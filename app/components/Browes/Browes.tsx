"use client";

import { useState, useRef } from "react";
import { HiSearch, HiArrowLeft, HiSun, HiMoon, HiX, HiShoppingBag, HiCheckCircle } from "react-icons/hi";
import { BsStarFill, BsHeart, BsHeartFill, BsGridFill, BsList, BsTrash } from "react-icons/bs";

interface Props {
  onBuy?: () => void;
  onBack?: () => void;
}

interface Item {
  image: string;
  name: string;
  price: string;
  category: string;
  rating: number;
  reviews: number;
  description?: string;
}

interface CartItem extends Item {
  quantity: number;
}

const allItems: Item[] = [
  { image: "https://static.vecteezy.com/system/resources/thumbnails/031/158/144/small/midnight-black-modern-fast-sports-beauty-shot-photo.jpg", name: "Bugatti Chiron", price: "$1,000", category: "Car", rating: 4.9, reviews: 234, description: "An engineering masterpiece built for hyper-speed and unmatched luxury styling." },
  { image: "https://t3.ftcdn.net/jpg/04/06/40/40/360_F_406404058_NEhE49oNHXA4DdgA45S17TQbIcnSLR5Y.jpg", name: "Ferrari F40", price: "$10,000", category: "Car", rating: 4.8, reviews: 189, description: "A legendary twin-turbocharged classic icon born on the race track." },
  { image: "https://www.shutterstock.com/image-photo/bmw-m4-car-transparent-background-600nw-2654621533.jpg", name: "BMW M4", price: "$69,090", category: "Car", rating: 4.7, reviews: 312, description: "Precision German engineering combined with aggressive daily-drive capability." },
  { image: "/Lambo.jpg", name: "Lamborghini", price: "$120,000", category: "Car", rating: 5.0, reviews: 445, description: "Sharp, ferocious V10 performance wrapped in futuristic aerodynamic carbon fiber." },
  { image: "https://thumbs.dreamstime.com/b/white-nissan-gt-r-sports-car-background-daz-d-style-gtr-concept-stunning-model-rendered-sleek-blend-light-black-302486997.jpg", name: "Nissan GTR", price: "$69,090", category: "Car", rating: 4.6, reviews: 98, description: "The iconic Godzilla supercar engineered to conquer both track and street." },
  { image: "https://img.freepik.com/premium-photo/3d-red-super-sports-motorbike-white-isolated-background-3d-illustration_101266-2287.jpg", name: "Yamaha R1", price: "$5,000", category: "Motorbike", rating: 4.7, reviews: 289, description: "Track-focused supersport machine delivering breathtaking acceleration." },
  { image: "https://premiumbikes.ph/wp-content/uploads/2023/12/Honda-NEW-PCX-ABS-3.png", name: "Honda PCX", price: "$4,399", category: "Motorbike", rating: 4.5, reviews: 567, description: "Sleek, fuel-efficient urban scooter designed for seamless city commuting." },
  { image: "https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-sleek-two-seater-urban-motorcycle-in-black-against-a-white-background-image_3803728.jpg", name: "Classic Moto", price: "$3,200", category: "Motorbike", rating: 4.3, reviews: 92, description: "Vintage character paired with reliable modern mechanics." },
  { image: "https://www.shutterstock.com/image-photo/suv-on-white-background-front-600nw-2557812519.jpg", name: "SUV Luxury", price: "$45,000", category: "Truck", rating: 4.7, reviews: 189, description: "Spacious, powerful, and built to handle any terrain in absolute comfort." },
  { image: "https://thumbs.dreamstime.com/b/pickup-truck-white-background-isolated-3d-rendering-pickup-truck-white-background-isolated-3d-rendering-138498887.jpg", name: "Pickup Pro", price: "$38,000", category: "Truck", rating: 4.5, reviews: 234, description: "Heavy-duty towing capability with a rugged, indestructible frame." },
  { image: "https://www.shutterstock.com/image-photo/mountain-bike-isolated-on-white-600nw-1907935398.jpg", name: "Mountain Pro", price: "$1,200", category: "Bicycle", rating: 4.7, reviews: 234, description: "Lightweight carbon frame equipped with advanced dual-suspension." },
  { image: "https://thumbs.dreamstime.com/b/electric-bicycle-isolated-white-background-3d-rendering-electric-bicycle-isolated-white-background-3d-rendering-138498887.jpg", name: "E-Bike Pro", price: "$2,500", category: "Bicycle", rating: 4.8, reviews: 445, description: "Long-range pedal-assist technology for effortless urban exploration." },
  { image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400", name: "Espresso", price: "$6", category: "Drink", rating: 4.8, reviews: 445, description: "Rich, bold artisan roast extracted to perfection." },
  { image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400", name: "Orange Juice", price: "$4", category: "Drink", rating: 4.6, reviews: 312, description: "Freshly squeezed vitamin-packed citrus refreshment." },
  { image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400", name: "Cocktail", price: "$12", category: "Drink", rating: 4.7, reviews: 189, description: "Artisanal mixology crafted with premium spirits and fresh botanicals." },
  { image: "https://thumbs.dreamstime.com/b/one-rich-strawberry-fruit-white-isolated-background-35372483.jpg", name: "Strawberries", price: "$5", category: "Fruit", rating: 4.8, reviews: 445, description: "Plump, sweet, organically grown summer berries." },
  { image: "https://thumbs.dreamstime.com/b/orange-fruit-isolated-white-background-61947616.jpg", name: "Alphonso Mango", price: "$4", category: "Fruit", rating: 4.9, reviews: 189, description: "The king of fruits—lusciously sweet and aromatic." },
  { image: "https://thumbs.dreamstime.com/b/fresh-red-apple-fruit-isolated-white-background-130051566.jpg", name: "Orange", price: "$3", category: "Fruit", rating: 4.6, reviews: 234, description: "Crisp, juicy citrus packed with natural goodness." },
  { image: "https://st.depositphotos.com/1500766/2998/i/450/depositphotos_29982189-stock-photo-sofa-furniture-isolated-on-white.jpg", name: "Modern Sofa", price: "$850", category: "Sitting", rating: 4.8, reviews: 124, description: "Plush multi-seater designed with minimalist Scandinavian elegance." },
  { image: "https://png.pngtree.com/thumb_back/fh260/background/20230806/pngtree-clean-white-living-room-with-white-sofa-image_12985535.jpg", name: "Armchair", price: "$420", category: "Sitting", rating: 4.5, reviews: 89, description: "Ergonomic accent chair providing cozy lounging comfort." },
  { image: "https://img.magnific.com/free-photo/cosmetic-products-rose-white-paper-clipboard-isolated-against-white-background_23-2148074025.jpg?semt=ais_hybrid&w=740&q=80", name: "4K Dash Cam", price: "$200", category: "Accessories", rating: 4.8, reviews: 445, description: "Crystal clear night-vision recording for total vehicle security." },
  { image: "https://img.magnific.com/premium-photo/perfume-accessories-cosmetics-phone-white-background_392895-452227.jpg?semt=ais_hybrid&w=740&q=80", name: "Phone Holder", price: "$25", category: "Accessories", rating: 4.6, reviews: 567, description: "Secure, vibration-free magnetic mount for effortless navigation." },
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
  All: "bg-gray-900 text-white shadow-md",
  Car: "bg-indigo-600 text-white shadow-md", Motorbike: "bg-orange-500 text-white shadow-md",
  Truck: "bg-yellow-500 text-white shadow-md", Bicycle: "bg-green-600 text-white shadow-md",
  Drink: "bg-blue-600 text-white shadow-md", Fruit: "bg-red-500 text-white shadow-md",
  Sitting: "bg-purple-600 text-white shadow-md", Accessories: "bg-pink-500 text-white shadow-md",
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
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const toggleWishlist = (i: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setWishlist((p) => {
      const exists = p.includes(i);
      showToast(exists ? "Removed from Wishlist" : "Added to Wishlist ❤️");
      return exists ? p.filter((x) => x !== i) : [...p, i];
    });
  };

  const addToCart = (item: Item, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showToast(`Added ${item.name} to cart 🛍️`);
    if (onBuy) onBuy();
  };

  const updateQuantity = (name: string, delta: number) => {
    setCart((prev) => prev.map((item) => {
      if (item.name === name) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const cartTotal = cart.reduce((sum, item) => {
    const numericPrice = parseInt(item.price.replace(/\D/g, "")) || 0;
    return sum + numericPrice * item.quantity;
  }, 0);

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
  const cardBg = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200/60";
  const inputCls = dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-white border-gray-200 text-gray-800 placeholder-gray-400";

  return (
    <div className={`min-h-screen ${bg} transition-colors duration-300 relative pb-12`}>

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 border border-white/10 animate-bounce text-xs font-semibold">
          <HiCheckCircle className="text-emerald-400 text-base" />
          <span>{toast}</span>
        </div>
      )}

      {/* Compact Navbar with Mouse-Follow Bunny */}
      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 h-16 flex items-center px-4 sm:px-6 gap-3 border-b border-white/10 shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/15 via-transparent to-pink-500/15 pointer-events-none" />

        <button onClick={onBack} className="relative z-10 h-9 w-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all shrink-0">
          <HiArrowLeft className="text-base" />
        </button>

        <div className="relative z-10 shrink-0"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.35}px)`, transition: "transform 0.1s ease-out" }}>
          <img src="/bunny.png" alt="logo" className="h-10 w-10 object-contain drop-shadow-xl"
            style={{ transform: `rotate(${mousePos.x * 0.5}deg)`, transition: "transform 0.1s ease-out" }} />
        </div>

        <div className="relative z-10 flex-1 min-w-0"
          style={{ transform: `translateX(${mousePos.x * 0.12}px)`, transition: "transform 0.15s ease-out" }}>
          <span className="font-black text-base sm:text-lg tracking-wide drop-shadow-sm"
            style={{ background: "linear-gradient(to right,#facc15,#f472b6,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Shop Uzu TR77
          </span>
          <span className="text-xs text-gray-400 ml-2 hidden sm:inline">{filtered.length} items available</span>
        </div>

        <div className="relative z-10 flex items-center gap-2 shrink-0">
          {/* Cart Button */}
          <button onClick={() => setIsCartOpen(true)}
            className="relative h-9 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 font-bold text-xs transition-all shadow-md">
            <HiShoppingBag className="text-sm" />
            <span className="hidden sm:inline">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-pink-500 text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-black shadow">
                {cart.reduce((a, c) => a + c.quantity, 0)}
              </span>
            )}
          </button>

          <button onClick={() => setDark(!dark)}
            className={`h-9 w-9 rounded-xl flex items-center justify-center transition-all text-base shadow-sm ${dark ? "bg-yellow-400 text-gray-900" : "bg-white/10 text-white hover:bg-white/20"}`}>
            {dark ? <HiSun /> : <HiMoon />}
          </button>

          <div className={`hidden sm:flex rounded-xl overflow-hidden border ${dark ? "border-gray-700" : "border-white/25"}`}>
            <button onClick={() => setGrid("grid")} className={`px-2.5 py-2 text-xs transition-all ${grid === "grid" ? "bg-indigo-600 text-white" : "bg-white/5 text-gray-400 hover:text-white"}`}><BsGridFill /></button>
            <button onClick={() => setGrid("list")} className={`px-2.5 py-2 text-xs transition-all ${grid === "list" ? "bg-indigo-600 text-white" : "bg-white/5 text-gray-400 hover:text-white"}`}><BsList /></button>
          </div>

          <select value={sort} onChange={(e) => setSort(e.target.value)}
            className={`px-3 py-2 rounded-xl border text-xs font-semibold focus:outline-none transition-all shadow-sm ${dark ? "bg-gray-800 border-gray-700 text-white" : "bg-white/15 border-white/25 text-white"}`}>
            <option className="text-gray-900" value="default">Sort by</option>
            <option className="text-gray-900" value="price-asc">Price: Low to High</option>
            <option className="text-gray-900" value="price-desc">Price: High to Low</option>
            <option className="text-gray-900" value="rating">⭐ Top Rated</option>
            <option className="text-gray-900" value="reviews">💬 Most Reviewed</option>
          </select>
        </div>
      </div>

      {/* Sticky Filter & Search Bar */}
      <div className={`sticky top-0 z-20 ${headerBg} border-b px-4 sm:px-6 py-3.5 flex flex-col gap-3 shadow-sm backdrop-blur-md bg-opacity-95 transition-colors duration-300`}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <HiSearch className={`absolute left-3.5 top-1/2 -translate-y-1/2 text-lg ${dark ? "text-gray-500" : "text-gray-400"}`} />
            <input type="text" placeholder="Search cars, drinks, electronics, furniture..." value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-sm ${inputCls}`} />
          </div>
          <div className="flex gap-2">
            <input type="number" placeholder="Min $" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}
              className={`w-24 sm:w-28 px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-sm ${inputCls}`} />
            <input type="number" placeholder="Max $" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}
              className={`w-24 sm:w-28 px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-sm ${inputCls}`} />
            {(minPrice || maxPrice || search || filter !== "All") && (
              <button onClick={() => { setSearch(""); setFilter("All"); setMinPrice(""); setMaxPrice(""); }}
                className="px-3.5 py-2.5 rounded-xl bg-red-500/10 text-red-500 text-xs font-bold hover:bg-red-500/20 transition-all border border-red-500/20">
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${filter === cat ? filterActive[cat] : dark ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200/60"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid / List */}
      <div className={`p-4 sm:p-6 ${grid === "grid" ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" : "flex flex-col gap-3 max-w-4xl mx-auto"}`}>
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-24 flex flex-col items-center justify-center">
            <span className="text-6xl mb-4 animate-pulse">🛸</span>
            <p className={`text-xl font-bold ${dark ? "text-gray-300" : "text-gray-700"}`}>No items match your criteria</p>
            <p className="text-xs text-gray-400 mt-1 mb-4">Try adjusting your filters, price range, or search keyword.</p>
            <button onClick={() => { setSearch(""); setFilter("All"); setMinPrice(""); setMaxPrice(""); }}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 shadow-md transition-all">
              Clear All Filters
            </button>
          </div>
        ) : filtered.map((item, i) => {
          const accent = catAccent[item.category] || { badge: "bg-gray-100 text-gray-700", btn: "bg-gray-600", price: "text-gray-600" };
          const saved = wishlist.includes(i);

          if (grid === "list") {
            return (
              <div key={i} onClick={() => setSelectedItem(item)}
                className={`${cardBg} rounded-2xl border overflow-hidden flex gap-4 p-3.5 transition-all duration-300 hover:shadow-lg cursor-pointer group`}>
                <div className="relative h-28 w-36 sm:w-44 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-lg shadow-sm ${accent.badge}`}>{item.category}</span>
                </div>
                <div className="flex flex-col flex-1 justify-between min-w-0">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm sm:text-base truncate group-hover:text-indigo-500 transition-colors">{item.name}</h3>
                      <button onClick={(e) => toggleWishlist(i, e)} className="text-base p-1">
                        {saved ? <BsHeartFill className="text-red-500" /> : <BsHeart className="text-gray-400 hover:text-red-400" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, s) => (<BsStarFill key={s} className={`text-[10px] ${s < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}`} />))}
                      <span className="text-[11px] text-gray-400 font-medium ml-1">({item.reviews} reviews)</span>
                    </div>
                    <p className={`text-base sm:text-lg font-black mt-1 ${accent.price}`}>{item.price}</p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button onClick={(e) => addToCart(item, e)}
                      className={`flex-1 py-2 rounded-xl ${accent.btn} hover:opacity-90 text-white font-bold text-xs transition-all shadow-sm hover:scale-[1.01]`}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={i} onClick={() => setSelectedItem(item)}
              className={`${cardBg} rounded-2xl shadow-sm hover:shadow-xl border overflow-hidden group flex flex-col transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
              <div className="relative h-44 sm:h-52 overflow-hidden bg-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <button onClick={(e) => toggleWishlist(i, e)}
                  className="absolute top-2.5 right-2.5 h-8 w-8 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-all">
                  {saved ? <BsHeartFill className="text-red-500 text-sm" /> : <BsHeart className="text-gray-500 text-sm hover:text-red-500" />}
                </button>
                <span className={`absolute top-2.5 left-2.5 text-[11px] font-bold px-2.5 py-1 rounded-xl shadow-md backdrop-blur-md bg-opacity-90 ${accent.badge}`}>{item.category}</span>
              </div>
              <div className="flex flex-col flex-1 p-3.5 gap-2">
                <h3 className="font-bold text-sm sm:text-base truncate group-hover:text-indigo-500 transition-colors">{item.name}</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, s) => (<BsStarFill key={s} className={`text-[11px] ${s < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}`} />))}
                  <span className="text-[11px] text-gray-400 font-medium ml-1">({item.reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-1">
                  <p className={`text-base sm:text-lg font-black ${accent.price}`}>{item.price}</p>
                </div>
                <button onClick={(e) => addToCart(item, e)}
                  className={`w-full py-2.5 rounded-xl ${accent.btn} hover:opacity-90 text-white font-bold text-xs transition-all shadow-md hover:scale-[1.02] flex items-center justify-center gap-1.5`}>
                  <HiShoppingBag className="text-sm" /> Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Product Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className={`${dark ? "bg-gray-900 border-gray-800 text-white" : "bg-white text-gray-900"} w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border relative flex flex-col max-h-[90vh]`}>
            <button onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-all">
              <HiX className="text-base" />
            </button>
            <div className="relative h-64 sm:h-72 w-full bg-gray-100">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
              <span className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white shadow-lg">
                {selectedItem.category}
              </span>
            </div>
            <div className="p-6 flex flex-col gap-3 overflow-y-auto">
              <div className="flex justify-between items-start">
                <h2 className="text-xl sm:text-2xl font-black">{selectedItem.name}</h2>
                <span className={`text-xl sm:text-2xl font-black ${(catAccent[selectedItem.category] || {}).price || "text-indigo-600"}`}>
                  {selectedItem.price}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, s) => (<BsStarFill key={s} className={`text-xs ${s < Math.floor(selectedItem.rating) ? "text-yellow-400" : "text-gray-300"}`} />))}
                <span className="text-xs font-bold ml-1">{selectedItem.rating}</span>
                <span className="text-xs text-gray-400">({selectedItem.reviews} verified buyer reviews)</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-1">
                {selectedItem.description || "High-performance curated selection guaranteed to meet premium manufacturing standards and ultimate client satisfaction."}
              </p>
              <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <button onClick={() => { addToCart(selectedItem); setSelectedItem(null); }}
                  className={`flex-1 py-3 rounded-2xl ${(catAccent[selectedItem.category] || {}).btn || "bg-indigo-600"} text-white font-bold text-sm shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2`}>
                  <HiShoppingBag className="text-lg" /> Add to Cart now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className={`${dark ? "bg-gray-900 border-gray-800 text-white" : "bg-white text-gray-900"} w-full max-w-md h-full flex flex-col shadow-2xl border-l`}>
            <div className="p-4 sm:p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HiShoppingBag className="text-xl text-indigo-500" />
                <h2 className="font-black text-lg">Your Cart ({cart.reduce((a, c) => a + c.quantity, 0)})</h2>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="h-8 w-8 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 transition-all">
                <HiX />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col gap-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <span className="text-5xl mb-3">🛒</span>
                  <p className="font-bold text-base text-gray-400">Your cart is empty</p>
                  <p className="text-xs text-gray-500 mt-1">Discover items and click Add to Cart to begin shopping!</p>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center bg-gray-50 dark:bg-gray-800/60 p-3 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-xl object-cover shrink-0 bg-white" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm truncate">{item.name}</h4>
                      <p className="text-xs font-black text-indigo-500 mt-0.5">{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQuantity(item.name, -1)} className="h-6 w-6 rounded-lg bg-gray-200 dark:bg-gray-700 font-bold text-xs flex items-center justify-center">-</button>
                        <span className="text-xs font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.name, 1)} className="h-6 w-6 rounded-lg bg-gray-200 dark:bg-gray-700 font-bold text-xs flex items-center justify-center">+</button>
                      </div>
                    </div>
                    <button onClick={() => updateQuantity(item.name, -item.quantity)} className="text-gray-400 hover:text-red-500 p-2 transition-colors">
                      <BsTrash className="text-sm" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-500">Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-black">
                  <span>Total</span>
                  <span className="text-indigo-500">${cartTotal.toLocaleString()}</span>
                </div>
                <button onClick={() => { showToast("Order successfully placed! 🎉"); setCart([]); setIsCartOpen(false); if (onBuy) onBuy(); }}
                  className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl transition-all hover:scale-[1.01]">
                  Proceed to Secure Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}