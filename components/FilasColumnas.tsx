//FilasColumnas.tsx
"use client"
import React, { useState } from 'react';

//Componente ClientReg filas con ingreso texto
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
//Fin Componente ClientReg filas con ingreso texto

//Componente GuardarBotton
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
//Fin Componente GuardarBotton

//Componente CotReg1 Fila con texto y un número
type CotReg1Props = {
    text: string;
    number1: number;
    number2: string;
    rowHeightTextClass: string;
    rowHeightNumber1Class: string;
    rowHeightNumber2Class: string;
    cellWidthTextClass: string;
    cellWidthNumber1Class: string;
    cellWidthNumber2Class: string;
};

const CotReg1: React.FC<CotReg1Props> = ({ text, number1, number2, rowHeightTextClass, rowHeightNumber1Class, rowHeightNumber2Class,cellWidthTextClass, cellWidthNumber1Class, cellWidthNumber2Class }) => {
    return (
        <div className="flex items-center">
            <div className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} max-w-xs flex items-center`}>
                {text}
            </div>
            <div className={`p-4 border border-gray-800 ${rowHeightNumber1Class} ${cellWidthNumber1Class} max-w-xs flex items-center justify-center`}>
                {number1}
            </div>
            <div className={`${rowHeightNumber2Class} ${cellWidthNumber2Class} max-w-xs flex items-center justify-center`}>
                {number2}
            </div>
        </div>
    );
}
//Fin Componente CotReg1

//Componente CotReg2 2 Filas y 2 Columnas con dos textos y dos números
type CotReg2Props = {
    text1: string;
    text2: string;
    number1: number;
    number2: number;
    rowHeightTextClass: string;
    rowHeightNumberClass: string;
    cellWidthTextClass: string;
    cellWidthNumberClass: string;
};

const CotReg2: React.FC<CotReg2Props> = ({ text1, text2, number1, number2, rowHeightTextClass, rowHeightNumberClass, cellWidthTextClass, cellWidthNumberClass }) => {
    return (
    <div className="flex-col items-center">
        <div className="flex items-center">
            <div className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center`}>
                {text1}
            </div>
            <div className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center`}>
                {text2}
            </div>
        </div>
        <div className="flex items-center">
            <div className={`p-4 border border-gray-800 ${rowHeightNumberClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center`}>
                {number1}
            </div>
            <div className={`p-4 border border-gray-800 ${rowHeightNumberClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center`}>
                {number2}
            </div>
        </div>
    </div>
    );
}
//Fin Componente CotReg2

//Componente CotReg3 1 Fila y 2 Columnas con dos textos y dos números
type CotReg3Props = {
    text: string;
    number1: number;
    number2: number;
    rowHeightTextClass: string;
    rowHeightNumber1Class: string;
    rowHeightNumber2Class: string;
    cellWidthTextClass: string;
    cellWidthNumber1Class: string;
    cellWidthNumber2Class: string;
};

const CotReg3: React.FC<CotReg3Props> = ({ text, number1, number2, rowHeightTextClass, rowHeightNumber1Class, rowHeightNumber2Class,cellWidthTextClass, cellWidthNumber1Class, cellWidthNumber2Class }) => {
    return (
        <div className="flex items-center">
            <div className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} max-w-xs flex items-center`}>
                {text}
            </div>
            <div className={`p-4 border border-gray-800 ${rowHeightNumber1Class} ${cellWidthNumber1Class} max-w-xs flex items-center justify-center`}>
                {number1}
            </div>
            <div className={`p-4 border border-gray-800 ${rowHeightNumber2Class} ${cellWidthNumber2Class} max-w-xs flex items-center justify-center`}>
                {number2}
            </div>
        </div>
    );
}
//Fin Componente CotReg3

//Componente CotReg4 1 Fila y 2 Columnas con dos textos y dos números

//Fin Componente CotReg4

export { ClientReg, GuardarBotton, CotReg1, CotReg2, CotReg3 };