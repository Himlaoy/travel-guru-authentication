import React from 'react';
import logo from '/images/logo.png'

const Header = () => {
    return (
        <nav >
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center justify-evenly">
                    <img className='w-44' src={logo} alt="Travel guru" />
                    <div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your destination" required />
                    </div>
                    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                        <li>
                            <Link to="/" className=" text-white hover:underline" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <a href="#" className=" text-white hover:underline">Company</a>
                        </li>
                        <li>
                            <a href="#" className=" text-white hover:underline">Team</a>
                        </li>
                        <li>
                            <a href="#" className=" text-white hover:underline">Features</a>
                        </li>
                        <button className='bg-green-500 rounded p-2 px-4 text-slate-100 hover:bg-green-700 '><Link to='/login'>Login</Link></button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;