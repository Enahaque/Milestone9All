import React from 'react';

const PricingOption = (props) => {
    const { name, price } = props.option;
    return (
        <div className='p-5 bg-slate-200 rounded-xl p-5'>
            <h2 className='bg-yellow-50 py-3 rounded-xl'>{name}</h2>
            <p className='text-2xl font-mono font-bold'><span>{price}</span>
                <span className='font-bold text-gray-400'>/mo</span>
            </p>

        </div>
    );
};

export default PricingOption;