//Fila1.tsx
import React from 'react';

const TwoCellComponent = ({ text, number }: { text: string, number: number }) => {
    return (
        <div className="flex">
            <div className="w-1/2 p-4 border border-gray-800">
                {text}
            </div>
            <div className="w-1/2 p-4 border border-gray-800">
                {number}
            </div>
        </div>
    );
};

export default TwoCellComponent;