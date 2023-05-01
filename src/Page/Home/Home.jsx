import React from 'react';
import './Home.css';
import logo from '/images/logo.png'

const Home = () => {
    return (
        <div className='img'>
            <nav >
                <div class="max-w-screen-xl px-4 py-3 mx-auto">
                    <div class="flex items-center">
                        <img className='w-44 text-w' src={logo} alt="Travel guru" />
                        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <a href="#" class=" text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class=" text-white hover:underline">Company</a>
                            </li>
                            <li>
                                <a href="#" class=" text-white hover:underline">Team</a>
                            </li>
                            <li>
                                <a href="#" class=" text-white hover:underline">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Home;