import { NavLink, Outlet } from 'react-router-dom';
import { FcDocument } from 'react-icons/fc';
// import ProfilePicture from '../Assets/blank-profile-picture.webp';
import { NavItems } from './NavItems';

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 bottom-0 left-0 w-1/5 bg-[#f5f6fc] rounded-3xl shadow-inner">
        <div className="flex m-5 pb-3 border-b-2 border-blue-100">
          <FcDocument className="text-5xl" />
          <h1 className="text-2xl m-auto ml-1 text-[#153a75] font-extrabold">
            TO-DO APP
          </h1>
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
              <span className="text-lg ">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
