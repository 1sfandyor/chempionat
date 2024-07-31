import Image from 'next/image';
import { useEffect, useState } from 'react';

const matchScores = [
    { player1: 'A1', player2: 'B1', score: '2 : 3' },
    { player1: 'A2', player2: 'B2', score: '1 : 1' },
    { player1: 'A3', player2: 'B3', score: '0 : 0' },
    { player1: 'A4', player2: 'B4', score: '3 : 2' },
    { player1: 'A5', player2: 'B5', score: '1 : 0' },
    { player1: 'A6', player2: 'B6', score: '4 : 1' },
    { player1: 'A7', player2: 'B7', score: '2 : 2' },
    { player1: 'A8', player2: 'B8', score: '5 : 3' },
    { player1: 'A9', player2: 'B9', score: '3 : 4' },
    { player1: 'A10', player2: 'B10', score: '0 : 1' },
];

const AnimatedScoreCards = () => {
    const [results, setResults] = useState<number[]>([]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setResults((prevResults) => {
                const nextResult = prevResults.length;
                return nextResult < 10 ? [...prevResults, nextResult] : prevResults;
            });
        }, 2500);
        
        return () => clearInterval(interval);
    }, [results]);
    
    return (
        <div id="animation-container" className="relative overflow-hidden h-screen flex items-center justify-center">
        {results.map((resultCount, index) => {
            const match = matchScores[resultCount % 10];
            return (
                <div key={index}
                className={`absolute flex items-center p-1.5 bg-white rounded-full shadow-md justify-between`}
                style={{
                    animation: `${index % 2 === 0 ? 'bubbleUpEven' : 'bubbleUpOdd'} 12s ease-in-out infinite`,
                    bottom: '0%',
                }}
                >
                <Image 
                width={40}
                height={40}
                src={`https://via.placeholder.com/40?text=${match.player1}`}
                alt="Player 1"
                className="avatar rounded-full"
                />
                <span className="text-2xl">{match.score}</span>
                <Image 
                width={40}
                height={40}
                src={`https://via.placeholder.com/40?text=${match.player2}`}
                alt="Player 2"
                className="avatar rounded-full"
                />
                </div>
            );
        })}
        </div>
    );
};

export default AnimatedScoreCards;
