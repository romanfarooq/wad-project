import { NavLink } from 'react-router-dom';
import { FcDocument } from 'react-icons/fc';
import { MdDarkMode } from 'react-icons/md';
import { NavItems } from './NavItems';
import ProfilePicture from '../Assets/blank-profile-picture.webp';

function Navbar() {
  return (
    <nav className="fixed top-0 bottom-0 left-0 w-1/5 bg-primary-10 rounded-r-3xl shadow-inner">
      <div className="flex m-5 pb-3 border-b-2 border-blue-100">
        <FcDocument className="text-5xl m-auto sm:m-0 md:text-4xl lg:text-5xl" />
        <h1 className="hidden sm:block sm:text-sm md:text-base lg:text-lg xl:text-2xl m-auto ml-1 text-primary-1100 font-extrabold">
          TO-DO APP
        </h1>
      </div>
      <div className="flex h-16 flex-col xl:flex-row sm:h-32 xl:h-24 justify-center items-center">
        <img
          className="rounded-full h-10 sm:h-16 w-10 sm:w-16 p-1 border-2 border-gray-100 shadow-sm"
          src={ProfilePicture}
          alt="profile-pic"
        />
        <div className="hidden sm:flex text-center xl:text-left flex-col justify-center text-primary-1100">
          <span className="font-semibold">Roman Farooq</span>
          <small className="text-xs">TheRomanFarooq@gmail.com</small>
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
                ? 'flex items-center gap-2 px-2 justify-center sm:justify-start md:px-5 py-2 rounded-r-md bg-[#ebecf5] border-r-8 border-[#234d92] text-primary-1100 font-bold'
                : 'flex items-center gap-2 px-2 justify-center sm:justify-start md:px-5 py-2 rounded-r-md hover:bg-[#ebecf5] hover:border-r-8 transition duration-200 border-[#234d92] text-primary-1100 font-medium hover:font-bold'
            }
          >
            {item.icon}
            <span className="hidden sm:block md:text-base lg:text-lg">
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-1/5">
        <div className="flex flex-col w-full l-md:flex-row gap-2 px-3 lg:px-5 py-4">
          <MdDarkMode
            className="text-2xl m-auto sm:m-0 sm:mt-1 cursor-pointer sm:cursor-default text-primary-1000"
            onClick={() => console.log('clicked')}
          />
          <div className="hidden sm:flex">
            <span className="block my-auto text-xs md:text-sm lg:text-base xl:text-xl font-medium text-primary-1100">
              Dark Mode
            </span>
            <label
              htmlFor="checkbox"
              className="relative sm:inline-block w-10 h-5 ml-2 mt-[5px]"
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
      </div>
    </nav>
  );
}

export default Navbar;
