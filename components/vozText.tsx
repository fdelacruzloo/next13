// vozText.tsx
"use client";
import { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";

let recognition: any = null;

if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
    recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "es-ES";
}

const useSpeechRecognition = () => {
    const [transcript, setText] = useState("");
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if (!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            setText(event.results[0][0].transcript);
            recognition.stop();
            setIsListening(false);
        };
    }, []);

    const startListening = () => {
        setText("");
        setIsListening(true);
        recognition.start();
    };

    const stopListening = () => {
        setIsListening(false);
        recognition.stop();
    };

    return {
        transcript,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport: !!recognition,
    };
};

const VozText: React.FC = () => {
    const [text1, setText1] = useState("");

    const {
        transcript,
        startListening,
        isListening,
        stopListening,
        hasRecognitionSupport,
    } = useSpeechRecognition();

 
    useEffect(() => {
        const textWithoutDot = transcript.replace(".", "");
        setText1(textWithoutDot);
        if (textWithoutDot !== "") {
            console.log(`Texto1: ${textWithoutDot}`);
            // Guardar text1 en localStorage
            localStorage.setItem('textRuc', textWithoutDot);
        }
    }, [transcript]);
    
    useEffect(() => {
        const storedTextRuc = localStorage.getItem('textRuc');
        console.log(`Valor de textRuc en localStorage: ${storedTextRuc}`);
    }, [text1]);

    

    return (
        <div>
            {hasRecognitionSupport ? (
                <>
                    <div className="mb-4">
                        <div
                            className={`border-2 border-gray-400 inline-block p-2 rounded-full ${isListening ? 'bg-gray-300' : 'bg-transparent'}`}
                        >
                            <button
                                onMouseDown={startListening}
                                onMouseUp={stopListening}
                                title="Start Listening 1"
                                className="focus:outline-none"
                            >
                                <FaMicrophone />
                            </button>
                        </div>
                        {text1}
                    </div>
                </>
            ) : (
                <h1>no soporta</h1>
            )}
        </div>
    );
};

export default VozText;