import { NavLink, Outlet } from 'react-router-dom';
import { FcDocument } from 'react-icons/fc';
import { MdDarkMode } from 'react-icons/md';
import { NavItems } from './NavItems';
import ProfilePicture from '../Assets/blank-profile-picture.webp';

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 bottom-0 left-0 w-1/5 bg-[#f5f6fc] rounded-r-3xl shadow-inner">
        <div className="flex m-5 pb-3 border-b-2 border-blue-100">
          <FcDocument className="text-5xl" />
          <h1 className="text-2xl m-auto ml-1 text-[#153a75] font-extrabold">
            TO-DO APP
          </h1>
        </div>
        <div className="flex h-24 justify-center items-center">
          <img
            className="rounded-full h-16 w-16 p-1 border-2 border-gray-100 shadow-sm"
            src={ProfilePicture}
            alt="profile-pic"
          />
          <div className="flex flex-col justify-center text-[#153a75]">
            <span className="font-semibold">Roman Farooq</span>
            <small>TheRomanFarooq@gmail.com</small>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {NavItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end
              className={({ isActive }) =>
                isActive
                  ? 'flex gap-2 px-5 py-2 rounded-r-md bg-[#ebecf5] border-r-8 border-[#234d92] text-[#153a75] font-bold'
                  : 'flex gap-2 px-5 py-2 rounded-r-md hover:bg-[#ebecf5] hover:border-r-8 transition duration-200 border-[#234d92] text-[#153a75] font-medium hover:font-bold'
              }
            >
              {item.icon}
              <span className="text-lg">{item.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="fixed bottom-0 left-0">
          <div className="flex gap-2 px-5 py-4">
            <MdDarkMode className="text-2xl mt-1 text-[#2196F3]" />
            <span className="text-xl font-medium text-[#153a75]">
              Dark Mode
            </span>
            <label
              htmlFor="checkbox"
              className="relative inline-block w-10 h-5 ml-1 mt-[5px]"
            >
              <input
                type="checkbox"
                id="checkbox"
                className="opacity-0 w-0 h-0"
                onClick={() => console.log('clicked')}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
