import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
  const links = (
    <>
      <li><NavLink to={'/'} className={({ isActive }) =>
        `font-semibold mr-2
      ${isActive
          ? 'border-2 border-[#23BE0A]'
          : ''}`
      }>Home</NavLink></li>

      <li><NavLink className={({ isActive }) =>
        `font-semibold  mr-2
        ${isActive
          ? 'border-2 border-[#23BE0A]'
          : ''}`} to={'/books'}>Listed Books</NavLink></li>

      <li><NavLink className={({ isActive }) =>
        `font-semibold  mr-2
      ${isActive ?
          'border-2 border-[#23BE0A]'
          : ''}`} to={'/pages-to-read'}>Pages to Read</NavLink></li>
    </>


  )
  return (
    <div className='bg-base-100 shadow-sm'>

      <div className="navbar w-10/12 mx-auto">

      

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">Book Vibe</a> */}
             <h2 className="text-2xl font-bold text-black mb-4">
              Book<span className="text-[#f59e0b]">Vibe</span>
            </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">

          <div className='flex gap-2'>
            <button className='btn bg-[#23BE0A] text-white rounded-md'>Sign In</button>
            <button className='btn bg-[#59C6D2] text-white rounded-md'>Sign Up</button>
          </div>

        </div>

      

      </div>

    </div>
  );
};

export default NavBar;