import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoneyBill, faUsers, faBars, faGear } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import me from './me.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function SideBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
    //to close the sideBar on the mobile screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      <div className="md:hidden fixed top-4 left-4 z-50">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-blue-700 cursor-pointer"
          onClick={() => setIsMobileOpen(prev => !prev)}
        />
      </div>

      
      <div className={`
        fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl p-5 pt-5 z-40
        transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative md:h-screen
      `}>

        <div className="flex justify-between items-center mb-6">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <img src={me} alt="Profile" className="h-7 w-7 object-cover rounded-sm" />
        </div>

        <Link to='/' onClick={() => setIsMobileOpen(false)} className='flex justify-between items-center rounded-md hover:bg-blue-100 p-4 group'>
          <span className="text-gray-400 group-hover:text-blue-700 font-semibold">Home</span>
          <FontAwesomeIcon icon={faHouse} className="text-gray-500 group-hover:text-blue-700" />
        </Link>

        <Link to='/webinars' onClick={() => setIsMobileOpen(false)} className='flex justify-between items-center rounded-md hover:bg-blue-100 p-4 group'>
          <span className="text-gray-400 group-hover:text-blue-700 font-semibold">Webinars</span>
          <FontAwesomeIcon icon={faUsers} className="text-gray-500 group-hover:text-blue-700" />
        </Link>

        <Link to='/manage' onClick={() => setIsMobileOpen(false)} className='flex justify-between items-center rounded-md hover:bg-blue-100 p-4 group'>
          <span className="text-gray-400 group-hover:text-blue-700 font-semibold">Manage</span>
          <FontAwesomeIcon icon={faMoneyBill} className="text-gray-500 group-hover:text-blue-700" />
        </Link>

        <Link to='/settings' onClick={() => setIsMobileOpen(false)} className='flex justify-between items-center rounded-md hover:bg-blue-100 p-4 group'>
          <span className="text-gray-600 group-hover:text-blue-700 font-semibold">Settings</span>
          <FontAwesomeIcon icon={faGear} className="text-gray-500 group-hover:text-blue-700" />
        </Link>
      </div>
    </div>
  );
}
