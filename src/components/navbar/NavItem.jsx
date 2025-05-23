import { NavLink } from 'react-router-dom';

const NavItem = ({ to, label, icon, isHome, isScrolled, isTalents, isJobs }) => {
    if (!to) {
        // For components like <Solutions /> or <BrowseJobs />
        return (
          <div className="relative group pb-1">
            <div
              className={`
                flex items-center gap-1 cursor-pointer transition-colors duration-300
                ${
                  (isHome || isTalents || isJobs) && !isScrolled
                    ? 'text-white hover:text-white'
                    : 'text-gray-600 hover:text-[#E17A1B]'
                }
              `}
            >
              {label}
            </div>
            <span
                className= 'absolute left-1/2 -bottom-0.5 h-[2px]  bg-current transform -translate-x-1/2 transition-all duration-300 w-0 group-hover:w-5'
                ></span>
          </div>
        );
      }
      return(
        <NavLink to={to} end>
            {({ isActive }) => (
            <div className="relative group pb-1 ">
                <span
                    className={`flex items-center gap-1 ${
                      (isHome || isTalents || isJobs) && !isScrolled
                        ? isActive
                            ? 'text-white'
                            : ' hover:text-white'
                        : isActive
                            ? 'text-[#E17A1B]'
                            : 'text-gray-600 hover:text-[#E17A1B]'
                    } transition-colors duration-300`}
                >
                    {icon && <span>{icon}</span>}
                    {label}
                </span>
                <span
                className={`absolute left-1/2 -bottom-0.5 h-[2px]  bg-current transform -translate-x-1/2 transition-all duration-300 ${
                isActive ? 'w-5' : 'w-0 group-hover:w-5'
                }`}
                ></span>
            </div>
            )}
        </NavLink>
      )
};

export default NavItem;
