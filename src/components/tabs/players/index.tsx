import React from 'react'
import PlayerCard from './player-card'

const Players = () => {


    return (
        <section className='flex flex-col gap-[30px] h-[100vh] overflow-auto pb-[100px]'>
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
        </section>
    )
}

export default Players