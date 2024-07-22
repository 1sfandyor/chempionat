import { UserCard } from '@/components/UserCard/UserCard';
import { Gamers } from '@/config/constants/Gamers';

const Players = () => {

    return (
        <section className='flex flex-col h-[100vh] overflow-auto pb-[100px]'>
            {
                Gamers.map(item => (
                    <UserCard isPlayers={true}
                            key={item.id} 
                            img={item.avatar}
                            name={item.name}
                            energy_icon={item.energy_icon}
                            energy={item.energy}
                            sendRequest={item.sendReq}
                            totalGames={item.totalGame}
                            birthLoc={item.birthLoc}
                            age={item.age}/>
                ))
            }
            <p>salom</p>
        </section>
    );
};

export default Players;
