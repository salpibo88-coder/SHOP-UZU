"use client";

interface Props {
  onDetail?: () => void;
  onBack?: () => void;
}
export default function Qr({ onDetail, onBack }: Props) {
  return (
    <div
      style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/057/523/776/small/a-vintage-style-teal-and-yellow-car-parks-against-a-matching-solid-teal-wall-in-a-studio-setting-photo.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
      className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 py-12"
    >
    {/* //   <div className="flex items-start justify-start p-4">
    //     <h1 className="text-lg text-red-500 font-bold">Introduction Click View Detail After Scan Allready </h1>
    //   </div> */}
    <div className=" text-8xl hover:text-red- transition-transforfm font-bold animate-bounce  text-yellow-300  drop-shadow-[1px_2px_4px_black] ">
      <h1 className=" hover:text-blue-500 hover:scal-100 transition-transform">UzuTR77</h1>
    </div>
      <div className="absolute inset-0 bg-black/50" />
      <div className=" text-2xl p-15 m- text-white drop-shadow-[2px_2px_2px_black]">
        <p>UzuTR77 Security QR is a modern QR-code verification system designed to improve security and customer trust in retail shops. Each product or service is linked to a unique QR code that customers can scan to verify authenticity, access product information, and reduce the risk of counterfeit goods. The system helps businesses protect their brand while providing a fast, secure, and convenient shopping experience. QR-based verification is widely used to enhance transparency, product tracking, and customer confidence.</p>
        
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 w-full max-w-sm mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl  md:text-6xl drop-shadow-[2px_2px_4px_black] font-black text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-400  animate-bounce">
          SCAN QR
        </h1>
        
        <div className="p-4 bg-white transition-all duration-300 hover:scale-105 rounded-2xl drop-shadow-[2px_2px_4px_black] shadow-2xl ring-4 ring-white/30">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
            alt="Payment QR Code"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
          />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-400 to-white">
          {/* Payment QR Code */}
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full mt-2">
          <button
            type="button"
            onClick={onDetail}
            className="w-full sm:flex-1 drop-shadow-[2px_2px_4px_black] h-12 sm:h-14 rounded-xl bg-blue-600 hover:bg-white/20 text-white font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Detail
          </button>
          <button
            type="button"
            onClick={onBack}
            className="w-full sm:flex-1 drop-shadow-[2px_2px_4px_black] h-12 sm:h-14 rounded-xl bg-red-600 hover:bg-white/20 border border-white/20 text-white font-bold text-base sm:text-lg transition-all duration-300"
          >
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}
