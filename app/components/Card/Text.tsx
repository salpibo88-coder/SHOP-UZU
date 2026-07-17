import { MdDirectionsCar } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
const features = [
  {
    icon: "sparkles",
    title: "Premium Selection",
    desc: "Hand-picked luxury & sport vehicles from top brands worldwide.",
  },
  {
    icon: "shield",
    title: "Secure Payment",
    desc: "100% safe checkout with encrypted card processing.",
  },
  {
    icon: "truck",
    title: "Fast Delivery",
    desc: "Your dream car delivered straight to your door.",
  },
];
function FeatureIcon({ type }: { type: string }) {
  if (type === "sparkles") return <HiSparkles className="text-amber-500 text-2xl" />;
  if (type === "shield") return <BsShieldCheck className="text-green-400 text-2xl" />;
  return <TbTruckDelivery className="text-red-700 text-2xl" />;
}
export default function Text({ onBrowse }: { onBrowse?: () => void }) {
  return (
    <section  id="home" className="relative  overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
           
        />
</div>

      <div className="absolute top-10 left-1/3 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-40 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-400 text-amber-400 text-xs font-semibold tracking-widest uppercase">
          <MdDirectionsCar className="text-base" />
          Welcome to CarShop
        </div>
        <h1 className="text-5xl md:text-6xl [text-shadow:7px_4px_8px_rgba(0,0,5,0.5)] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-red-600 to-black  leading-tight tracking-tight">
          Drive Your Dream Car{" "}
          {/* <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-black">
            Dream Car
          </span> */}
          <br />
          Today
        </h1>
        <div className="flex justify-between items-center w-full  ">
          <img className="" src="https://static.vecteezy.com/system/resources/thumbnails/051/985/475/small/dark-black-color-super-car-white-background-free-photo.jpg" alt="" />
      
        <p className="text-black​​​ font-bold font-smoothing text-lg max-w-xl leading-relaxed text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-black">
          Explore our modern collection of luxury and sport vehicles.
          Everything you want — affordable, stylish, and ready to go.
        </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <button
            onClick={onBrowse}
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-pink-500 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:scale-105"
          >
            Browse 
          </button>
        </div>
        <div className="flex flex-wrap text-transparent bg-clip-text bg-linear-to-r  from-blue-500 to-red-500 justify-center gap-10 mt-8 text-center">
          {[
            { value: "200+", label: "Cars Available" },
            { value: "5K+", label: "Happy Buyers" },
            { value: "100%", label: "Secure Checkout" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold ">{stat.value}</span>
              <span className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-px bg-white/5" />
      <div className="relative max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-indigo-500/40 hover:bg-white/8 transition-all duration-300"
          >
            <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
              <FeatureIcon type={f.icon} />
            </div>
            <h3 className="text-transparent  bg-clip-text bg-linear-to-r from-amber-400 to-amber-600 font-bold text-2xl">{f.title}</h3>
            <p className=" text-sm text-shadow: 2px 2px 0 2px leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
