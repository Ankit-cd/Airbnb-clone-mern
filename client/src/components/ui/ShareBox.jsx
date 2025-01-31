import React from "react";
import { Copy, Mail, MessageSquare, Facebook, Twitter, MoreHorizontal, Link2 } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
import { easeInOut, motion } from "framer-motion";

const ShareBox = ({place,handleClick}) => {
  return (
    <motion.div
        initial={{opacity: 0,y:100}}
        animate={{opacity: 1,y:1}}
        transition={{duration:0.2,ease:easeInOut}}
     className="absolute top-0 left-1/3 w text-center border-[1px] hidden md:flex justify-center items-center rounded-2xl bg-gray-100">
      <div className="w-96 rounded-2xl shadow-lg p-4">
      <RxCross2 onClick={handleClick} className="mb-4"/>
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <img
              src={place.photos?.[0]}
              alt="Villa in Mashobra"
              className="rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold">{place.title}</h2>
            <p className="text-sm text-gray-500">3 bedrooms • 3 beds • 3 bathrooms</p>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full">
            <button variant="outline" className="flex flex-col items-center rounded-xl p-2 text-sm">
              <Copy size={20} className="mb-1" />
              Copy Link
            </button>
            <button variant="outline" className="flex flex-col items-center rounded-xl p-2 text-sm">
              <Mail size={20} className="mb-1" />
              Email
            </button>
            <button variant="outline" className="flex flex-col items-center rounded-xl p-2 text-sm">
              <MessageSquare size={20} className="mb-1" />
              Messages
            </button>
            <button variant="outline" className="flex flex-col items-center rounded-xl p-2 text-sm">
              <Link2 size={20} className="mb-1" />
              WhatsApp
            </button>
            <button variant="outline" className="flex flex-col items-center rounded-xl p-2 text-sm">
              <Facebook size={20} className="mb-1" />
              Facebook
            </button>
            <button variant="outline" className="flex flex-col items-center rounded-xl p-2 text-sm">
              <Twitter size={20} className="mb-1" />
              Twitter
            </button>
            <button variant="outline" className="flex flex-col items-center rounded-xl p-1 text-sm">
              <Link2 size={20} className="mb-1" />
              Embed
            </button>
            <button variant="outline" className="flex flex-col items-center rounded-xl p-1 text-sm">
              <MoreHorizontal size={20} className="mb-1" />
              More options
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShareBox;

