import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1,name:'free',price:0.00},
        {id:2,name:'regular',price:9.99},
        {id:3,name:'premium',price:19.99},
    ];
    return (
        <div className='bg-blue-50'>
            <h2 className='text-white'>Best deals in town</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio ratione, eum fugit minima, harum saepe, nobis repudiandae qui perspiciatis culpa? Doloribus quidem quisquam vel!</p>

            <div className='grid md:grid-cols-3 gap-3 mt-5 p-5'>
                {
                   pricingOptions.map(option =><PricingOption
                   
                    key={option.id}
                    option={option}
                   ></PricingOption>) 
                }
            </div>
        </div>
    );
};

export default Pricing;