"use client";

import Image from "next/image";

interface CardItem {
  name: string;
  price: string;
  images: string[];
  category: "Car" | "Motorbike";
}

interface CardProps {
  cards: CardItem[];
  onBuy?: () => void;
}

export default function VehicleSlider({ cards = [], onBuy }: CardProps) {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-5xl font-black tracking-tighter">Premium Collection</h2>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-10 snap-x scrollbar-hide px-6 -mx-6">
        {cards.map((card, index) => (
          <div key={index} className="min-w-[350px] bg-white rounded-[2rem] p-6 shadow-xl snap-start flex flex-col group border border-gray-100">
            
            {/* Dynamic Grid Layout */}
            <div className={`grid gap-2 mb-6 rounded-2xl overflow-hidden ${
              card.images.length === 1 ? "h-64" : 
              card.images.length === 2 ? "h-64 grid-cols-2" : 
              "h-64 grid-cols-2 grid-rows-2"
            }`}>
              {card.images.slice(0, 3).map((img, i) => (
                <div key={i} className={`relative ${i === 0 && card.images.length === 3 ? "row-span-2" : ""}`}>
                  <Image 
                    src={img} 
                    alt={`${card.name} ${i + 1}`} 
                    fill 
                    className="object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              ))}
            </div>

            <div className="flex-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">
                {card.category}
              </span>
              <h3 className="text-2xl font-black mt-1 mb-1">{card.name}</h3>
              <p className="text-2xl font-black text-amber-500 mb-6">{card.price}</p>
            </div>

            <button 
              onClick={onBuy} 
              className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition"
            >
              PURCHASE NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}