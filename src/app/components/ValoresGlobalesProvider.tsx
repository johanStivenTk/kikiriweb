"use client";

import {createContext, useContext, useState} from "react";

const valoresPermitidos = ["Boe", "Animals", "contacto"] as const;
type ValorVisual = typeof valoresPermitidos[number];

type ContextType = {
    valueVisual: ValorVisual;
    setValueVisual: (v: ValorVisual) => void;
};

const linksPlayStore = ["https://play.google.com/store/apps/details?id=com.YccGames.Animalstotherescue&hl=en", "https://play.google.com/store/apps/details?id=com.yccgames.blazeofempires&hl=en"]
export const boeImagen = ["/images/boe/2.png", "/images/boe/3.png"]
export const kidsImagen = ["/images/animals/1.png", "/images/animals/2.png",];

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
