import { Key, Plus, Search } from '../assets';

export const INFOS = [
  {
    image: Plus,
    title: 'New Wallet',
    text: 'Create new wallet',
    link: '/new-wallet',
  },
  {
    image: Key,
    title: 'Existing Wallet',
    text: 'Import wallet with a 24 secret recovery words',
    link: '/existing-wallet',
  },
  {
    image: Search,
    title: 'Watch Account',
    text: 'For monitor wallet activity without recovery phrase',
    link: '/watch-account',
  },
];
