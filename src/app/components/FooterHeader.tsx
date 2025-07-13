"use client";
import React from "react";
import {motion} from "framer-motion";
import {useValoresGlobales} from "@/app/components/ValoresGlobalesProvider";
import {useState} from "react";


const FooterHeader = () => {
  const {valueVisual, setValueVisual} = useValoresGlobales();

  const tabs = [
    {key: "Boe", label: "Blaze of empires", bg: "bg-red-500", hover: "hover:bg-red-600"},
    {key: "Animals", label: "Animals to the rescue and care", bg: "bg-blue-500", hover: "hover:bg-blue-600"},
    {key: "contacto", label: "Contacto", bg: "bg-green-500", hover: "hover:bg-green-600"},
  ];
  
  return (
    <div className="w-full h-[20vh] flex items-center justify-center bg-[#0b1012]">
      <div className="w-full h-full grid grid-cols-[15%_85%] items-end justify-center overflow-hidden ">
        <div className="flex items-center justify-end w-full h-full bg-white border-r-4 border-t-4 border-b-4 rounded-tr-4xl rounded-br-4xl border-gray-700 overflow-hidden">
          <img
            src="/KikiriLogo.png"
            alt="Kikiri Logo"
            className="w- h-full object-contain "
          />
        </div>
        {/* tabs */}
        <div
            className="flex w-1/2 h-4/6  items-start justify-start relative overflow-hidden  border-t-3 border-r-3 border-gray-700 rounded-tr-3xl  p-2">
          {tabs.map((tab, index) => {
            const isSelected = valueVisual === tab.key;      
            const isLast = index === tabs.length - 1;

            return (
                <div
                    key={tab.key}
                    role="button"
                    onClick={() => setValueVisual(tab.key as any)}
                    className={`relative flex-1 h-full flex items-center justify-center cursor-pointer transition-all duration-300   ${
                        isSelected ? "scale-100 z-10" : ""
                    } ${isLast ? " " : "  "} `}
                >
                  {isSelected && (
                      <motion.div
                          layoutId="pill"
                          className={`absolute inset-0 bg-gray-700 z-0 rounded-3xl 
                          `}
                          transition={{type: "spring", stiffness: 500, damping: 30}}
                      />
                  )}
                  <span
                      className={`relative z-10 font-semibold text-sm ${
                          isSelected ? "text-white" : "text-[#586d8c]"
                      }`}
                  >
          {tab.label}
        </span>
                </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FooterHeader;