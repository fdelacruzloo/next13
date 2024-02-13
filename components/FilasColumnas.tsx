//FilasColumnas.tsx
"use client"
import React, { useState } from 'react';

//Componente filas con ingreso texto
type ClientRegProps = {
    text1: string;
    text2Name: string;
    text2InitialValue: string;
    onText2Change: (value: string) => void; // Agrega onText2Change a las props
    rowHeightTextClass: string;
    rowHeightNumberClass: string;
    cellWidthTextClass: string;
    cellWidthNumberClass: string;
};

const ClientReg: React.FC<ClientRegProps> = ({ text1, text2Name, text2InitialValue, onText2Change, rowHeightTextClass, rowHeightNumberClass, cellWidthTextClass, cellWidthNumberClass }) => {
    const [text2, setText2] = useState(text2InitialValue);

    const handleText2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText2(e.target.value);
        onText2Change(e.target.value); // Llama a onText2Change cuando el valor del campo de entrada cambia
    };

    return (
        <div className={`flex  items-center`}>
            <div className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} flex items-center font-sans text-sm`}>
                {text1}
            </div>
            <div className={`p-4 border border-gray-800 ${rowHeightNumberClass} ${cellWidthNumberClass} flex items-center font-sans text-sm`}>
                
                <input 
                    type="text" 
                    id="text2Input"
                    value={text2} 
                    onChange={handleText2Change} 
                    className="outline-none"
                    placeholder="Enter text"
                />
            </div>

        </div>
    );
}
//Fin de domponente filas con ingreso texto

type GuardarBottonProps = {
    text: string;
    rowHeightTextBottonClass: string;
    cellWidthTextBottonClass: string;
};

const GuardarBotton: React.FC<GuardarBottonProps> = ({ text, rowHeightTextBottonClass, cellWidthTextBottonClass }) => {
    return (
        <div className={`flex  items-center`}>
            <div className={`p-4 border border-gray-800 rounded-lg ${rowHeightTextBottonClass} ${cellWidthTextBottonClass} flex items-center`}>
                {text}
            </div>

        </div>
    );
}


export { ClientReg, GuardarBotton };