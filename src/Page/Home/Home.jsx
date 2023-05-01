import React, { useEffect, useState } from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
import { FaArrowRight, FaBeer } from 'react-icons/fa';
import Card from '../Card';


const Home = () => {
    const [cards, setCards] = useState([])
    console.log(cards)

    useEffect(()=>{
        fetch('../../../public/data/travel.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
        .catch(error=>console.log(error.message))
    },[])
    return (
        <div className='img p-4 '>
            
            <section className='flex'>
                <div>
                    <h1 className='text-6xl text-slate-50 font-extrabold'>Cox's bazar</h1>
                    <p className='mt-2 text-slate-50'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button type="button"  className="bg-amber-400 text-slate-100 p-2 rounded"><Link to='/booking'>BookingNow<FaArrowRight className='flex-nowrap'></FaArrowRight></Link> </button>
                    
                </div>
                <div className='flex gap-2'>
                    {
                        cards.map(card=><Card key={card.id} card={card}></Card>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;