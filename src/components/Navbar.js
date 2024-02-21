// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-white shadow-lg'>

            <nav class="flex justify-between px-20 py-6 container mx-auto items-center ">
                {/* <h1 class="text-3xl text-gray-800 font-bold"> <span className='font-bold text-red-700'>Zéléka</span><span className='text-red-600'>-Zéléka</span></h1> */}
                <h2 class="font-bold text-3xl"><span class="text-gray-600 px-2 rounded-md">Zéléka</span>-<span class="bg-[#f84525] text-white px-2 rounded-md">Zéléka</span></h2>
                <div class="flex items-center gap-4">
                    <div class="flex items-center justify-center list-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        <Link to="/" class="font-semibold text-gray-700">Accueil</Link>
                    </div>

                    <div class="flex items-center list-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>


                        <Link to="/posts" class="font-semibold text-gray-700">Génération posts</Link>
                    </div>

                </div>
            </nav>
        </div>

    );
}

export default Navbar;
