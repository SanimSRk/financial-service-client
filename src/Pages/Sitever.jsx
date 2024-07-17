import { Link, NavLink, useNavigate } from 'react-router-dom';

const Sitever = () => {
  const navigate = useNavigate();
  const navlinks = (
    <>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-600 font-semibold p-2 rounded-lg'
            : 'font-semibold p-2 rounded-lg'
        }
      >
        Overview
      </NavLink>
      <NavLink
        to={'/sendmoney'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-600 font-semibold p-2 rounded-lg'
            : 'font-semibold p-2 rounded-lg'
        }
      >
        Send Money
      </NavLink>
      <NavLink
        to={'/cashout'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-600 font-semibold p-2 rounded-lg'
            : 'font-semibold p-2 rounded-lg'
        }
      >
        Cash-Out
      </NavLink>
      <NavLink
        to={'/cashin'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-600 font-semibold p-2 rounded-lg'
            : 'font-semibold p-2 rounded-lg'
        }
      >
        Cash-in
      </NavLink>
      <NavLink
        to={'/userhistry'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-600 font-semibold p-2 rounded-lg'
            : 'font-semibold p-2 rounded-lg'
        }
      >
        History
      </NavLink>
    </>
  );
  const hanidleLoguots = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/login');
  };
  return (
    <div>
      <div className="navbar bg-[#4caf50] text-[#ffffff]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box  z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">SecurePay</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7 font-semibold text-[16px]">
            {navlinks}{' '}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {localStorage.getItem('token') ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-12 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Sanim Hasan
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={hanidleLoguots}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to={'/signup'}>
                <a className="btn bg-[#f5f5f5]">Sign Up</a>
              </Link>
              <Link to={'/login'}>
                <a className="btn bg-[#f5f5f5]">Login</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sitever;
