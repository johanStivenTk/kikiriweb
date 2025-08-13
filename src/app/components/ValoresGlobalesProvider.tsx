"use client";

import {createContext, useContext, useState} from "react";

export type ValorVisual = "Boe" | "Animals" | "contacto";

type ContextType = {
    valueVisual: ValorVisual;
    setValueVisual: (v: ValorVisual) => void;
};

//const linksPlayStore = ["https://play.google.com/store/apps/details?id=com.YccGames.Animalstotherescue&hl=en", "https://play.google.com/store/apps/details?id=com.yccgames.blazeofempires&hl=en"]
export const boeImagen = ["/images/boe/1.png", "/images/boe/2.png", "/images/boe/3.png" , "/images/boe/4.png" , "/images/boe/5.png"]
export const kidsImagen = ["/images/animals/1.png", "/images/animals/2.png", "/images/animals/3.png", "/images/animals/4.png", "/images/animals/5.png", "/images/animals/6.png", "/images/animals/7.png", "/images/animals/8.png", "/images/animals/9.png"];

const ValoresGlobalesContext = createContext<ContextType | null>(null);

export const ValoresGlobalesProvider = ({children}: { children: React.ReactNode }) => {
    const [valueVisual, setValueVisual] = useState<ValorVisual>("Boe");

    return (
        <ValoresGlobalesContext.Provider value = {
    {
        valueVisual, setValueVisual
    }
}>
    {
        children
    }
    </ValoresGlobalesContext.Provider>
)
    ;
};

export const useValoresGlobales = () => {
    const context = useContext(ValoresGlobalesContext);
    if (!context) throw new Error("useValoresGlobales debe usarse dentro de <ValoresGlobalesProvider>");
    return context;
};
