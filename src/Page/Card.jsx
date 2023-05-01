import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, photoUrl, title } = card
    console.log(card)
    return (

        <div className=''>
            <div className="max-w-sm text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg h-72 w-full" src={photoUrl} alt="" />

                <div className="p-5">

                    <h1 className="mb-2 text-xl font-bold tracking-tight dark:text-white">Noteworthy technology acquisitions 2021</h1>

                </div>
            </div>

        </div>
    );
};

export default Card;