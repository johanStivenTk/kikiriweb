"use client";

import React, {useEffect, useRef, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import { useValoresGlobales, boeImagen, kidsImagen} from "@/app/components/ValoresGlobalesProvider";

const PageBody = () => {
    const {valueVisual} = useValoresGlobales();
    const [current, setCurrent] = useState(0);
    const [categoriaKey, setCategoriaKey] = useState(valueVisual); // para activar el panel de contactos
  const previousImagesRef = useRef<string[]>(boeImagen);
  
  useEffect(() => {
    if (valueVisual === "Boe") {
      previousImagesRef.current = boeImagen;
      setCurrent(0);
    } else if (valueVisual === "Animals") {
      previousImagesRef.current = kidsImagen;
      setCurrent(0);
    }    
  }, [valueVisual]);

  const images = previousImagesRef.current;

    // reiniciar imagen y no hacer nada si es contacto 
    useEffect(() => {
      if(valueVisual === "contacto")
        return;
      
        setCurrent(0);
        setCategoriaKey(valueVisual);
    }, [valueVisual]);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="flex-grow bg-[#0b1012] text-white flex items-center justify-center px-8">
            <div className="flex items-center justify-center w-full max-w-[90vw]">
                {/* Botón izquierdo */}
                <button
                    onClick={handlePrev}
                    className="mr-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-105 transition"
                >
                    ←
                </button>

                {/* cuerpo del slider */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={categoriaKey}
                        initial={{opacity: 0, scale: 0.95}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.95}}
                        transition={{duration: 0.4}}
                        className="relative w-full h-[60vh] rounded-xl overflow-hidden border border-gray-700 flex items-center justify-center bg-black"
                    >
                        {/* Imagen me gustaria tener tamanio real para mirar como queda */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={images[current]}
                                initial={{opacity: 0, x: 100}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -100}}
                                transition={{duration: 0.4}}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={images[current]}
                                    alt={`slide ${current}`}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>

                {/* Botón next */}
                <button
                    onClick={handleNext}
                    className="ml-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-105 transition"
                >
                    →
                </button>
            </div>
          {/* panel de contactos  */}
          <AnimatePresence>
            {valueVisual === "contacto" && (
                <motion.div
                    key="contact"
                    initial={{opacity: 0, scale: 0.95, y: 40}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    exit={{opacity: 0, scale: 0.95, y: 40}}
                    transition={{duration: 0.4}}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-6 rounded-xl shadow-xl z-50 text-center w-[300px]"
                >
                  <h2 className="text-lg font-bold mb-2">Kikiri Company S.A.S</h2>
                  <p className="text-sm">kikiricompany@gmail.com</p>
                  <p className="text-sm">+57 313 634 4604</p>
                </motion.div>
            )}
          </AnimatePresence>
          
        </div>
    );
};

export default PageBody;
