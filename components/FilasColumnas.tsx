//FilasColumnas.tsx
"use client";
import React, { useState } from "react";

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

const ClientReg: React.FC<ClientRegProps> = ({
  text1,
  text2Name,
  text2InitialValue,
  onText2Change,
  rowHeightTextClass,
  rowHeightNumberClass,
  cellWidthTextClass,
  cellWidthNumberClass,
}) => {
  const [text2, setText2] = useState(text2InitialValue);

  const handleText2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText2(e.target.value);
    onText2Change(e.target.value); // Llama a onText2Change cuando el valor del campo de entrada cambia
  };

  return (
    <div className={`flex  items-center`}>
      <div
        className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} flex items-center font-sans text-sm`}
      >
        {text1}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightNumberClass} ${cellWidthNumberClass} flex items-center font-sans text-sm`}
      >
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
};
//Fin Componente ClientReg filas con ingreso texto

//Componente GuardarBotton
type GuardarBottonProps = {
  text: string;
  rowHeightTextBottonClass: string;
  cellWidthTextBottonClass: string;
};

const GuardarBotton: React.FC<GuardarBottonProps> = ({
  text,
  rowHeightTextBottonClass,
  cellWidthTextBottonClass,
}) => {
  return (
    <div className={`flex  items-center`}>
      <div
        className={`p-4 border border-gray-800 rounded-lg ${rowHeightTextBottonClass} ${cellWidthTextBottonClass} flex items-center`}
      >
        {text}
      </div>
    </div>
  );
};
//Fin Componente GuardarBotton

//Componente CotRegDes2 1 Fila, un columna con texto y un menu desplegable 2 textos
type CotRegDes2Props = {
  text1: string;
  text2: string;
  text3: string;
  rowHeightClass: string;
  cellWidthTextClass: string;
  cellWidthMenuClass: string;
};

const CotRegDes2: React.FC<CotRegDes2Props> = ({
  text1,
  text2,
  text3,
  rowHeightClass,
  cellWidthTextClass,
  cellWidthMenuClass,
}) => {
  return (
    <div className="flex justify-center">
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthTextClass} flex items-center flex-shrink-0`}
      >
        {text1}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthMenuClass} flex items-center justify-center pl-0 pr-0`}
      >
        <label htmlFor="selectMenu" className="sr-only">
          Select Menu
        </label>
        <select id="selectMenu" className="text-black w-full h-8">
          <option value="text2">{text2}</option>
          <option value="text3">{text3}</option>
        </select>
      </div>
    </div>
  );
};
//Fin Componente CotRegDes2

//Componente CotRegDes3 1 Fila, un columna con texto y un menu desplegable 3 textos
type CotRegDes3Props = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;  
  rowHeightClass: string;
  cellWidthTextClass: string;
  cellWidthMenuClass: string;
};

const CotRegDes3: React.FC<CotRegDes3Props> = ({
  text1,
  text2,
  text3,
  text4,
  rowHeightClass,
  cellWidthTextClass,
  cellWidthMenuClass,
}) => {
  return (
    <div className="flex justify-center">
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthTextClass} flex items-center flex-shrink-0 pr-0`}
      >
        {text1}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthMenuClass} flex items-center justify-center pl-0 pr-0`}
      >
        <label htmlFor="selectMenu" className="sr-only">
          Select Menu
        </label>
        <select id="selectMenu" className="text-black w-full h-8">
          <option value="text2">{text2}</option>
          <option value="text3">{text3}</option>
          <option value="text3">{text4}</option>
        </select>
      </div>
    </div>
  );
};
//Fin Componente CotRegDes3

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

const CotReg1: React.FC<CotReg1Props> = ({
  text,
  number1,
  number2,
  rowHeightTextClass,
  rowHeightNumber1Class,
  rowHeightNumber2Class,
  cellWidthTextClass,
  cellWidthNumber1Class,
  cellWidthNumber2Class,
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} max-w-xs flex items-center`}
      >
        {text}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightNumber1Class} ${cellWidthNumber1Class} max-w-xs flex items-center justify-center`}
      >
        {number1}
      </div>
      <div
        className={`${rowHeightNumber2Class} ${cellWidthNumber2Class} max-w-xs flex items-center justify-center`}
      >
        {number2}
      </div>
    </div>
  );
};
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

const CotReg2: React.FC<CotReg2Props> = ({
  text1,
  text2,
  number1,
  number2,
  rowHeightTextClass,
  rowHeightNumberClass,
  cellWidthTextClass,
  cellWidthNumberClass,
}) => {
  return (
    <div className="flex-col items-center">
      <div className="flex items-center">
        <div
          className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center`}
        >
          {text1}
        </div>
        <div
          className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center`}
        >
          {text2}
        </div>
      </div>
      <div className="flex items-center">
        <div
          className={`p-4 border border-gray-800 ${rowHeightNumberClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center`}
        >
          {number1}
        </div>
        <div
          className={`p-4 border border-gray-800 ${rowHeightNumberClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center`}
        >
          {number2}
        </div>
      </div>
    </div>
  );
};
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

const CotReg3: React.FC<CotReg3Props> = ({
  text,
  number1,
  number2,
  rowHeightTextClass,
  rowHeightNumber1Class,
  rowHeightNumber2Class,
  cellWidthTextClass,
  cellWidthNumber1Class,
  cellWidthNumber2Class,
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} max-w-xs flex items-center`}
      >
        {text}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightNumber1Class} ${cellWidthNumber1Class} max-w-xs flex items-center justify-center`}
      >
        {number1}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightNumber2Class} ${cellWidthNumber2Class} max-w-xs flex items-center justify-center`}
      >
        {number2}
      </div>
    </div>
  );
};
//Fin Componente CotReg3

//Componente CotReg4 1 Fila y 2 Columnas con un texto y un número
type CotReg4Props = {
  text1: string;
  number1: number;
  rowHeightTextClass: string;
  rowHeightNumberClass: string;
  cellWidthTextClass: string;
  cellWidthNumberClass: string;
};

const CotReg4: React.FC<CotReg4Props> = ({
  text1,
  number1,
  rowHeightTextClass,
  cellWidthTextClass,
  rowHeightNumberClass,
  cellWidthNumberClass,
}) => {
  return (
    <div className={`flex  items-center`}>
      <div
        className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} flex items-center font-sans text-sm`}
      >
        {text1}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightNumberClass} ${cellWidthNumberClass} flex items-center font-sans text-sm justify-center`}
      >
        {number1}
      </div>
    </div>
  );
};
//Fin Componente CotReg4

//Componente CotReg5 1 Fila y 2 Columnas con dos textos
type CotReg5Props = {
  text1: string;
  text2: string;
  rowHeightTextClass: string;
  rowHeightNumberClass: string;
  cellWidthTextClass: string;
  cellWidthNumberClass: string;
};

const CotReg5: React.FC<CotReg5Props> = ({
  text1,
  text2,
  rowHeightTextClass,
  cellWidthTextClass,
  rowHeightNumberClass,
  cellWidthNumberClass,
}) => {
  return (
    <div className={`flex  items-center`}>
      <div
        className={`p-4 border border-gray-800 ${rowHeightTextClass} ${cellWidthTextClass} flex items-center font-sans text-sm`}
      >
        {text1}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightNumberClass} ${cellWidthNumberClass} flex items-center font-sans text-sm justify-center pl-0 pr-0`}
      >
        {text2}
      </div>
    </div>
  );
};
//Fin Componente CotReg5

//Componente CotReg6 1 Fila y 6 Columnas con un texto y 5 números
type CotReg6Props = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  rowHeightClass: string;
  cellWidthTextClass: string;
  cellWidthNumber1Class: string;
  cellWidthNumber2Class: string;
  cellWidthNumber3Class: string;
  cellWidthNumber4Class: string;
  cellWidthNumber5Class: string;
};

const CotReg6: React.FC<CotReg6Props> = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  rowHeightClass,
  cellWidthTextClass,
  cellWidthNumber1Class,
  cellWidthNumber2Class,
  cellWidthNumber3Class,
  cellWidthNumber4Class,
  cellWidthNumber5Class,
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text1}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber1Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text2}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber2Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text3}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber3Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text4}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber4Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text5}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber5Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text6}
      </div>
    </div>
  );
};

//Componente CotReg7 1 Fila y 6 Columnas con un texto y 5 números
type CotReg7Props = {
  text: string;
  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
  rowHeightClass: string;
  cellWidthTextClass: string;
  cellWidthNumber1Class: string;
  cellWidthNumber2Class: string;
  cellWidthNumber3Class: string;
  cellWidthNumber4Class: string;
  cellWidthNumber5Class: string;
};

const CotReg7: React.FC<CotReg7Props> = ({
  text,
  number1,
  number2,
  number3,
  number4,
  number5,
  rowHeightClass,
  cellWidthTextClass,
  cellWidthNumber1Class,
  cellWidthNumber2Class,
  cellWidthNumber3Class,
  cellWidthNumber4Class,
  cellWidthNumber5Class,
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber1Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {number1}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber2Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {number2}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber3Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {number3}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber4Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {number4}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber5Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {number5}
      </div>
    </div>
  );
};
//Fin Componente CotReg7

//Componente CotReg8 1 Fila y 6 Columnas con un texto y 5 números
type CotReg8Props = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  rowHeightClass: string;
  cellWidthText1Class: string;
  cellWidthText2Class: string;
  cellWidthText3Class: string;
  cellWidthText4Class: string;
};
const CotReg8: React.FC<CotReg8Props> = ({
  text1,
  text2,
  text3,
  text4,
  rowHeightClass,
  cellWidthText1Class,
  cellWidthText2Class,
  cellWidthText3Class,
  cellWidthText4Class,
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthText1Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text1}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthText2Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text2}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthText3Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text3}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthText4Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text4}
      </div>
    </div>
  );
};
//Fin Componente CotReg8

//Componente CotReg9 1 Fila y 6 Columnas con un texto y 5 números
type CotReg9Props = {
  text: string;
  number1: number;
  number2: number;
  number3: number;
  rowHeightClass: string;
  cellWidthTextClass: string;
  cellWidthNumber1Class: string;
  cellWidthNumber2Class: string;
  cellWidthNumber3Class: string;
};
const CotReg9: React.FC<CotReg9Props> = ({
  text,
  number1,
  number2,
  number3,

  rowHeightClass,
  cellWidthTextClass,
  cellWidthNumber1Class,
  cellWidthNumber2Class,
  cellWidthNumber3Class,
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthTextClass} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {text}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber1Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {number1}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber2Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {number2}
      </div>
      <div
        className={`p-4 border border-gray-800 ${rowHeightClass} ${cellWidthNumber3Class} max-w-xs flex items-center justify-center pl-0 pr-0`}
      >
        {number3}
      </div>
    </div>
  );
};
//Fin Componente CotReg9

export {
  ClientReg,
  GuardarBotton,
  CotRegDes2,
  CotRegDes3,  
  CotReg1,
  CotReg2,
  CotReg3,
  CotReg4,
  CotReg5,
  CotReg6,
  CotReg7,
  CotReg8,
  CotReg9,
};
