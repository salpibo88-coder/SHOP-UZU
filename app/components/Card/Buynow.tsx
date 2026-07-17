"use client";

interface CardItem {
  image: string;
  name: string;
  price: string;
  link: string;
  linkLabel: string;
  category: "Car" | "Motorbike";
}
const cards: CardItem[] = [
  { image: "https://static.vecteezy.com/system/resources/thumbnails/031/158/144/small/midnight-black-modern-fast-sports-beauty-shot-photo.jpg", name: "Bugatti Chiron", price: "$1,000", link: "https://www.pexels.com/search/car/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://www.shutterstock.com/image-illustration/modern-bright-red-sports-race-260nw-1795982071.jpg", name: "Sport Bike", price: "FREE", link: "https://www.yamaha-motor.eu/gb/en/home/", linkLabel: "Browse More Motorbikes", category: "Car" },
  { image: "https://t3.ftcdn.net/jpg/04/06/40/40/360_F_406404058_NEhE49oNHXA4DdgA45S17TQbIcnSLR5Y.jpg", name: "Ferrari", price: "$10,000", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://previews.123rf.com/images/denphumi/denphumi1209/denphumi120900603/15404840-sports-car-on-a-white-background.jpg", name: "Blue Supercar", price: "$69,090", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://st2.depositphotos.com/1016223/10323/i/950/depositphotos_103238204-stock-photo-white-motorcycle-isolated-on-a.jpg", name: "Racing Bike", price: "$60,225", link: "https://www.yamaha-motor.eu/gb/en/home/", linkLabel: "Browse More Motorbikes", category: "Motorbike" },
  { image: "https://thumbs.dreamstime.com/z/chameleon-color-shift-sports-car-black-wheels-white-background-supercar-luxury-low-profile-futuristic-striking-paint-job-418396100.jpg", name: "Chameleon GT", price: "$10,000", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://thumbs.dreamstime.com/b/awesome-yellow-sportscar-studio-shot-isolated-white-background-66972167.jpg", name: "Yellow Racer", price: "$10,000", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://img.freepik.com/premium-photo/luxurious-white-sedan-sports-car-is-isolated-white-background-with-clipping-path_1257223-58538.jpg", name: "Mercedes 5012", price: "$5024", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://thumbs.dreamstime.com/b/royal-purple-modern-fast-super-car-top-down-view-royal-purple-modern-fast-super-car-top-down-view-200725879.jpg", name: "Purple Supercar", price: "$500", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://img.freepik.com/premium-photo/3d-red-super-sports-motorbike-white-isolated-background-3d-illustration_101266-2287.jpg", name: "Yamaha", price: "$5000", link: "https://www.yamaha-motor.eu/gb/en/home/", linkLabel: "Browse More Motorbikes", category: "Motorbike" },
  { image: "https://premiumbikes.ph/wp-content/uploads/2023/12/Honda-NEW-PCX-ABS-3.png", name: "Honda PCX", price: "$500", link: "https://www.yamaha-motor.eu/gb/en/home/", linkLabel: "Browse More Motorbikes", category: "Motorbike" },
  { image: "https://acdn-us.mitiendanube.com/stores/001/275/253/products/cf-moto-300-sr-aea8e81ae9314cde2617270974099494-640-0.webp", name: "CF Moto 300", price: "$5000", link: "https://www.yamaha-motor.eu/gb/en/home/", linkLabel: "Browse More Motorbikes", category: "Motorbike" },
  { image: "https://www.shutterstock.com/image-photo/bmw-m4-car-transparent-background-600nw-2654621533.jpg", name: "BMW M4", price: "$69,090", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://thumbs.dreamstime.com/b/metallic-granite-grey-modern-super-sports-car-metallic-granite-grey-modern-super-sports-car-isolated-white-background-108483828.jpg", name: "Mercedes AMG", price: "$69,090", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://thumbs.dreamstime.com/b/white-nissan-gt-r-sports-car-background-daz-d-style-gtr-concept-stunning-model-rendered-sleek-blend-light-black-302486997.jpg", name: "Nissan GTR", price: "$69,090", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://www.shutterstock.com/image-photo/suv-on-white-background-front-600nw-2557812519.jpg", name: "Lamborghini", price: "$10,000", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://www.shutterstock.com/image-illustration/white-city-car-isolated-on-600nw-2339173437.jpg", name: "Concept Car", price: "$69,090", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image: "https://static.vecteezy.com/system/resources/thumbnails/042/521/309/small/ai-generated-a-car-on-a-white-background-isolated-photo.jpg", name: "Concept Car", price: "$69,090", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
  { image:"https://www.rentluxurycars.ae/wp-content/uploads/2025/07/mclaren-artura-yellow-rental-prices.png", name: "Concept Car", price: "$69,090", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
   { image:"https://static.vecteezy.com/system/resources/thumbnails/070/144/140/small/a-vibrant-color-blocked-supercar-ready-to-zoom-into-your-imagination-with-a-clean-white-background-free-photo.jpg", name: "Concept Car", price: "$69,090", link: "https://www.cardealpage.com/", linkLabel: "Browse More Cars", category: "Car" },
];
export default function Buynow({ onBuy }: { onBuy?: () => void }) {
  return (
    <section id="shop" className="bg-gray-200 py-14 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800  tracking-tight">
           Vehicle Showroom
        </h1>
        <p className="text-gray-500  mt-2 text-sm">
          Choose your dream ride and buy it instantly
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white  rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden group">
            <div className="relative h-44 bg-gray-50  flex items-center justify-center overflow-hidden">
              <img src={card.image} alt={card.name} className="h-full  w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1  rounded-full ${card.category === "Car" ? "bg-indigo-100 text-indigo-700" : "bg-orange-100 text-orange-700"}`}>
                {card.category}
              </span>
            </div>
            <div className="flex flex-col flex-1 p-4 gap-3">
              <h2 className="text-base font-bold   text-gray-800 truncate">{card.name}</h2>
              <p className="text-2xl font-extrabold text-blue-700">{card.price}</p>
              <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:text-pink-500 hover:underline transition-colors">
                {card.linkLabel} →
              </a>
              <button onClick={onBuy}  className="mt-auto w-full text-center drop-shadow-[2px_2px_4px_pink] py-2 rounded-xl bg-blue-600 hover:bg-yellow-500 text-white font-semibold text-sm transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="max-w-6xl mx-auto mt-16">
        <div className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-gray-800 flex items-center justify-center font-black text-7xl mb-8" style={{ textShadow: "7px 4px 8px rgba(0,0,0,0.3)" }}>
          AVATA
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <img className="w-full md:w-1/2 rounded-2xl shadow-xl" src="https://st3.depositphotos.com/3037725/12732/i/450/depositphotos_127320056-Sports-car-front-view-The-image-of-a-sports-blue-car-on-a-white-background-3d-illustration.jpg" alt="Featured car" />
          <p className="text-yellow-600 text-2xl font-medium leading-relaxed">
            Explore our modern collection of luxury and sport vehicles. Everything you want — affordable, stylish, and ready to go.
          </p>
        </div>
        <p className="mt-10 text-sky-700 text-xl font-light leading-relaxed">
          Find your perfect car with ease and confidence. Explore our wide collection of luxury, sport, and family vehicles designed for comfort, performance, and style.
        </p>
        <h2 className="font-bold text-4xl mt-6 text-center text-transparent bg-clip-text bg-linear-to-r from-red-600 to-gray-700">
          Dream Car
        </h2>
      </div> */}

    </section>
  );
}
