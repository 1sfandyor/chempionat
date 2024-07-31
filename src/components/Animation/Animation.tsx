import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';  // Corrected import statement

interface Scores {
    player1: number;
    player2: number;
}

export default function Home() {
    const [scores, setScores] = useState<Scores>({ player1: 0, player2: 0 });

    const increaseScore = (player: keyof Scores) => {
        setScores(prevScores => ({ ...prevScores, [player]: prevScores[player] + 1 }));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="flex space-x-10">
                    {Object.entries(scores).map(([player, score]) => (
                        <div key={player} className="flex flex-col items-center">
                            <Image 
                                src={`/${player}.jpg`} 
                                alt={`Player ${player.slice(-1)}`} 
                                width={96}  // Required for Image component
                                height={96} // Required for Image component
                                className="rounded-full border-4 border-gray-800"
                            />
                            <AnimatePresence>
                                <motion.div
                                    key={score}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    className="text-2xl font-bold my-2"
                                >
                                    {score}
                                </motion.div>
                            </AnimatePresence>
                            <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => increaseScore(player as keyof Scores)}
                            >
                                Score!
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
