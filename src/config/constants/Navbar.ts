import { v4 as uuidv4 } from 'uuid';

export const NavItem = [
  {
    id: uuidv4(),
    name: 'Игроки',
    route: '/games',
  },
  {
    id: uuidv4(),
    name: 'Команда',
    route: '/team',
  },
  {
    id: uuidv4(),
    name: 'Мач',
    route: '/match',
  },
  {
    id: uuidv4(),
    name: 'Турнир',
    route: '/tournament',
  },
  {
    id: uuidv4(),
    name: 'Площадки',
    route: '/venues',
  },
  {
    id: uuidv4(),
    name: 'Лента',
    route: '/reels',
  },
];
