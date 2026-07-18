"use client";

interface Props {
  onDetail?: () => void;
  onBack?: () => void;
}

export default function Qr({ onDetail, onBack }: Props) {
  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/057/523/776/small/a-vintage-style-teal-and-yellow-car-parks-against-a-matching-solid-teal-wall-in-a-studio-setting-photo.jpeg')" }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl text-center space-y-8">
        
        {/* Header Branding */}
        <h1 className="text-6xl md:text-8xl font-black text-yellow-300 drop-shadow-lg animate-bounce hover:text-white transition-colors cursor-default">
          UzuTR77
        </h1>

        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl drop-shadow-md leading-relaxed">
          UzuTR77 Security QR is a modern verification system designed to improve security 
          and customer trust. Scan to verify authenticity and ensure product integrity.
        </p>

        {/* QR Section */}
        <div className="flex flex-col items-center space-y-6 w-full">
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 animate-pulse">
            SCAN QR
          </h2>

          <div className="p-4 bg-white rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
              alt="Security QR Code"
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <button
            onClick={onDetail}
            className="flex-1 h-14 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-xl transition-all active:scale-95"
          >
            View Detail
          </button>
          <button
            onClick={onBack}
            className="flex-1 h-14 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-lg shadow-xl transition-all active:scale-95"
          >
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}