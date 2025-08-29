"use client";

import { useState } from "react";

const Alph = () => {
    const generateAlph = (): string[] => Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    const [letters, setLetters] = useState<string[]>(generateAlph());

    const shuffleAlph = () => {
        const shuffled = [...letters].sort(() => Math.random() - 0.5);
        setLetters(shuffled);
    }

    const sortAlph = () => {
        const sorted = [...letters].sort((a, b) => a.localeCompare(b));
        setLetters(sorted);
    }

    return (
        <div>
            <button onClick={shuffleAlph}>Shuffle</button>
            <button onClick={sortAlph}>Sort</button>
            <div>
                {letters.map((letter, index) => (
                    <div key={index}>
                        {letter}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Alph;