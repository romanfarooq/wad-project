import { FcAbout } from 'react-icons/fc';
import { AiFillHome } from 'react-icons/ai';

export const NavItems = [
  {
    name: 'Home',
    path: '/',
    icon: <AiFillHome className="text-2xl text-[#2196F3]" />,
  },
  {
    name: 'About',
    path: '/about',
    icon: <FcAbout className="text-2xl" />,
  },
];
