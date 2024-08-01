import { Link, NavLink, useNavigate } from 'react-router-dom';
import useUser from '../Hooks/useUser';
import { useState } from 'react';

const Sitever = () => {
  const navigate = useNavigate();
  const { userData, refetch } = useUser();
  const [isActive, setActive] = useState(false);
  const navlinks = (
    <>
      {userData?.email && (
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
      )}
      {userData?.role === 'user' && (
        <>
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
      )}
      {userData?.role === 'agent' && (
        <>
          <NavLink
            to={'/transManagement'}
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-600 font-semibold p-2 rounded-lg'
                : 'font-semibold p-2 rounded-lg'
            }
          >
            Transaction Management
          </NavLink>

          <NavLink
            to={'/agent-history'}
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-600 font-semibold p-2 rounded-lg'
                : 'font-semibold p-2 rounded-lg'
            }
          >
            History
          </NavLink>
        </>
      )}
      {userData?.role === 'admin' && (
        <>
          <NavLink
            to={'/user-management'}
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-600 font-semibold p-2 rounded-lg'
                : 'font-semibold p-2 rounded-lg'
            }
          >
            User-Management
          </NavLink>
          <NavLink
            to={'/all-history'}
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-600 font-semibold p-2 rounded-lg'
                : 'font-semibold p-2 rounded-lg'
            }
          >
            System-Monitoring
          </NavLink>
        </>
      )}
    </>
  );
  const hanidleLoguots = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/login');
  };

  const handileclikBalance = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div className="navbar bg-[#4caf50] text-[#ffffff]">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost   lg:hidden"
            >
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
              <div>
                {userData?.email && (
                  <div className="  rounded-lg shadow-md  text-center">
                    <button
                      onClick={handileclikBalance}
                      className={
                        isActive
                          ? 'bg-white btn font-semibold'
                          : 'text-white btn font-semibold bg-[#4caf50]'
                      }
                    >
                      {' '}
                      <p className="font-semibold">
                        {isActive ? `$ ${userData?.balance}` : ' Check balance'}
                      </p>{' '}
                    </button>
                  </div>
                )}
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle border border-white avatar"
                >
                  <div className="w-16 rounded-full p-1">
                    <img
                      alt="Tailwind  CSS Navbar component"
                      src={userData?.image}
                      className="w-ful rounded-full"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      {userData?.name}
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
