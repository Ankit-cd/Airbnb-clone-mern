import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Home, Search, User, Settings, Bell, ShoppingCart, Star, Heart, Mail, Phone, Camera, Clipboard, Upload, Download, Send 
  ,Cloud, Sun, Moon, Wifi, Bluetooth, Folder, File, Book, Compass, Globe,  
  Shield, Terminal, Layers, Zap, Code
} from "lucide-react";

const icons = [
  Home, Search, User, Settings, Bell, ShoppingCart, Star, Heart, Mail, Phone, 
  Camera, Clipboard, Upload, Download, Send, Cloud, Sun, Moon, Wifi, 
  Bluetooth, Folder, File, Book, Compass, Globe, Shield, Terminal, Layers, Zap, Code
];

const IconSlider = () => {
  const [showArrows, setShowArrows] = useState(false);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="text-white relative px-5 md:px-4 mx-8 py-2 w-[70%]" onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>

      <div className="flex space-x-1 overflow-x-scroll scrollbar-hide" ref={sliderRef}>
        {icons.map((Icon, index) => (
          <div key={index} className="flex flex-col items-center justify-center group p-4 rounded-lg">
            <Icon className="w-5 h-5 text-gray-500 hover:text-black/80 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-125" />
            <p className="text-black text-center text-sm capitalize">{""}</p>
          </div>
        ))}
      </div>

        <>
          <button onClick={scrollLeft} className="absolute top-1/2 -translate-y-1/2 left-5 md:left-2 flex items-center shadow-[10px_10px_0px_25px_rgba(255,255,255,0.7)] justify-center size-6 rounded-full bg-white border-black border-[1px] bg-opacity-50 hover:bg-opacity-75 text-black z-[4]">
            <ChevronLeft size={14} />
          </button>

          <button onClick={scrollRight} className="absolute top-1/2 -translate-y-1/2 right-5 md:right-2 flex items-center shadow-[10px_10px_0px_25px_rgba(255,255,255,0.7)] justify-center size-6 rounded-full bg-white border-black border-[1px] bg-opacity-50 hover:bg-opacity-75 text-black z-[4]">
            <ChevronRight size={14} />
          </button>
        </>
    </div>
  );
};

export default IconSlider;

