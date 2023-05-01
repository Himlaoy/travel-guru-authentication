import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Booking.css'

const Booking = () => {
    return (
        <div className='image'>
            <h1 className='text-6xl text-slate-50 font-extrabold'>Cox's bazar</h1>
            <p className='mt-2 text-slate-50'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <button type="button" className="bg-amber-400 text-slate-100 p-2 rounded"><Link to='/booking'>BookingNow<FaArrowRight className='flex-nowrap'></FaArrowRight></Link> </button>

        </div>
    );
};

export default Booking;