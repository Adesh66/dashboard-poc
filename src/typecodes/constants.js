import PiggyBank from '../assets/icons/PiggyBank.svg';
import Tag from '../assets/icons/Tag.svg';
import Coin from '../assets/icons/Coin.svg';
import ChatTeardrop from '../assets/icons/ChatTeardrop.svg';
import CheckFat from '../assets/icons/CheckFat.svg';

export const iconNames = {
    Consultations: '',
};

export const glanceMockData = [
    {
        id: 1,
        iconName: ChatTeardrop,
        category: 'Consultations',
        value: '24',
        type: 'increase',
        changePerentage: '15',
    },
    {
        id: 2,
        iconName: Tag,
        category: 'ORDERS PLACED',
        value: '12',
        type: 'decrease',
        changePerentage: '15',
    },
    {
        id: 3,
        iconName: CheckFat,
        category: 'CONVERSION',
        value: '50%',
        type: 'decrease',
        changePerentage: '15',
    },
    {
        id: 4,
        iconName: Coin,
        category: 'TOTAL SALES VALUE',
        value: '$2400',
        type: 'increase',
        changePerentage: '15',
    },
    {
        id: 5,
        iconName: Coin,
        category: 'AVG ORDER VALUE',
        value: '$240',
        type: 'increase',
        changePerentage: '15',
    },

    {
        id: 6,
        iconName: PiggyBank,
        category: 'COMMISSION PAID',
        value: '$240',
        type: 'increase',
        changePerentage: '15',
    },
];
