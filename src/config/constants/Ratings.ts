import {v4 as uuidv4} from 'uuid';

export const UserRating = [
  {
    id: uuidv4(),
    sport_icon: '/bassketball.png',
    sport_name: 'Баскетбол',
    ratings: [
      {
        name: 'лучшая подача',
        score: 546,
        icon: '/rating.svg'
      },
      {
        name: 'защита',
        score: 546,
        icon: '/rating.svg'
      },
      {
        name: 'нападения',
        score: 100,
        icon: '/rating.svg'
      }
    ],
  },

  {
    id: uuidv4(),
    sport_icon: '/football.png',
    sport_name: 'Футбол',
    ratings: [
      {
        name: 'лучшая подача',
        score: 546,
        icon: '/rating.svg'
      },
      {
        name: 'защита',
        score: 546,
        icon: '/rating.svg'
      },
      {
        name: 'нападения',
        score: 100,
        icon: '/rating.svg'
      }
    ],
  },

  {
    id: uuidv4(),
    sport_icon: '/cs.png',
    sport_name: 'CS2',
    ratings: [
      {
        name: 'лучшая подача',
        score: 546,
        icon: '/rating.svg'
      },
      {
        name: 'защита',
        score: 546,
        icon: '/rating.svg'
      },
      {
        name: 'нападения',
        score: 100,
        icon: '/rating.svg'
      }
    ],
  },

  {
    id: uuidv4(),
    sport_icon: '/table_tennis.png',
    sport_name: 'Ping Pong',
    ratings: [
      {
        name: 'лучшая подача',
        score: 546,
        icon: '/rating.svg'
      },
      {
        name: 'защита',
        score: 546,
        icon: '/rating.svg'
      },
      {
        name: 'нападения',
        score: 100,
        icon: '/rating.svg'
      }
    ],
  },
]

