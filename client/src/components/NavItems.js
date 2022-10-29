import { FcAbout } from 'react-icons/fc';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { RiLogoutBoxRFill } from 'react-icons/ri';

export const NavItems = [
  {
    name: 'Home',
    path: '/',
    icon: <AiFillHome className="text-2xl text-[#2196F3]" />,
  },
  {
    name: 'Email Me',
    path: '/email',
    icon: <MdEmail className="text-2xl text-[#2196F3]" />,
  },
  {
    name: 'About',
    path: '/about',
    icon: <FcAbout className="text-2xl" />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <AiFillSetting className="text-2xl text-[#2196F3]" />,
  },
  {
    name: 'Logout',
    path: '/login',
    icon: <RiLogoutBoxRFill className="text-2xl text-[#2196F3]" />,
  }
];
