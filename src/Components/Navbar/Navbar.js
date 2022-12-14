import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const[open,setOpen]=useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 3, name: 'Deals', link: '/deals' },
        { id: 4, name: 'Coupons', link: '/coupons' },
        { id: 5, name: 'Contact', link: '/contact' }
    ];
    return (
        <nav className='bg-orange-300'>
            <div onClick={() => setOpen(!open)}  className="h-5 w-5 md:hidden" >
            {open ? <XIcon></XIcon> :<MenuIcon/>}
            </div>

            <ul className={`md:flex justify-center gap-x-3 px-5 font-mono font-light absolute md:static duration-500 ease-in bg-orange-300 ${open?'top-6':'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;