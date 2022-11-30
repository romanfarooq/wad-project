import { NavLink } from "react-router-dom";
import { FcDocument } from "react-icons/fc";
import { MdDarkMode } from "react-icons/md";
import { NavItems } from "./NavItems";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/slices/darkModeSlice";
import ProfilePicture from "../Assets/blank-profile-picture.webp";

function Navbar() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.darkMode);
  return (
    <nav className="fixed top-0 bottom-0 left-0 w-1/5 bg-primary-10 dark:bg-gray-800 rounded-r-3xl shadow-inner">
      <div className="flex m-5 pb-3 border-b-2 border-blue-100">
        <FcDocument className="text-5xl m-auto sm:m-0 md:text-4xl lg:text-5xl" />
        <h1 className="hidden sm:block sm:text-sm md:text-base lg:text-lg xl:text-2xl m-auto ml-1 text-blue-900 dark:text-gray-200 font-extrabold">
          TODO <span className="dark:text-blue-500">APP</span>
        </h1>
      </div>
      <div className="flex h-16 flex-col xl:flex-row sm:h-32 xl:h-24 justify-center items-center">
        <img
          className="rounded-full h-10 sm:h-16 w-10 sm:w-16 p-1 border-2 border-gray-100 shadow-sm"
          src={ProfilePicture}
          alt="profile-pic"
        />
        <div className="hidden sm:flex text-center xl:text-left flex-col justify-center m-1 text-blue-900 dark:text-gray-200">
          <span className="font-semibold">Roman Farooq</span>
          <small className="hidden l-md:block text-xs">
            TheRomanFarooq@gmail.com
          </small>
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
                ? "flex items-center gap-2 px-2 justify-center sm:justify-start md:px-5 py-2 rounded-r-md bg-[#ebecf5] dark:bg-blue-900 border-r-8 border-[#234d92] dark:border-blue-500 text-blue-900 dark:text-gray-200 font-bold"
                : "flex items-center gap-2 px-2 justify-center sm:justify-start md:px-5 py-2 rounded-r-md hover:bg-[#ebecf5] dark:hover:bg-blue-900 hover:border-r-8 transition duration-200 border-[#234d92] dark:border-blue-500 text-blue-900 dark:text-gray-200 font-medium hover:font-bold"
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
          <div className="cursor-pointer m-auto sm:m-0 sm:cursor-default p-2 sm:p-0 rounded-full sm:rounded-none hover:bg-[#ebecf5] sm:hover:bg-inherit">
            <MdDarkMode
              className="text-2xl sm:mt-[3px] text-primary-1000"
              onClick={() => dispatch(toggleDarkMode())}
            />
          </div>
          <div className="hidden sm:flex">
            <span className="block my-auto text-xs md:text-sm lg:text-base xl:text-xl font-medium text-blue-900 dark:text-gray-200">
              Dark Mode
            </span>
            <label
              htmlFor="default-toggle"
              className="relative sm:inline-block ml-2 mt-[3px] cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
                checked={darkMode}
                onChange={() => dispatch(toggleDarkMode())}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
