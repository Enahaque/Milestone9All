import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='p-5 bg-slate-200 rounded-xl p-5'>
            <h2 className='bg-yellow-50 py-3 rounded-xl'>{name}</h2>
            <p className='text-2xl font-mono font-bold'><span>{price}</span>
                <span className='font-bold text-gray-400'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit
                        benefit={benefit}
                    ></Benefit>)
                }

            </div>
            
                <button className='bg-green-500 p-2 font-mono text-white rounded-2xl justify-center flex w-full gap-2 mt-5'>
                    Buy Now

                    <ArrowRightIcon className='w-5 h-5'></ArrowRightIcon>
                </button>
           
        </div>

    );
};

export default PricingOption;