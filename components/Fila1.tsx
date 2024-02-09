//Fila1.tsx
import React from 'react';

const TwoCellComponent = ({ text, number }: { text: string, number: number }) => {
    return (
        <div className="flex">
            <div className="w-1/2 p-4">
                {text}
            </div>
            <div className="w-1/2 p-4">
                {number}
            </div>
        </div>
    );
};

const TwoCellComponent1 = ({ text, number }: { text: string, number: number }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="p-4">
                {number}
            </div>
            <div className="p-4">
                {text}
            </div>
        </div>
    );
};

export default TwoCellComponent1; TwoCellComponent;