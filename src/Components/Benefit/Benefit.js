import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/solid';

const Benefit = (props) => {
    
    return (
        <p className='flex items-center'>
            <CheckCircleIcon className='w-6 h-6 text-green-500 mr-2'></CheckCircleIcon>
            {props.benefit}
        </p>
    );
};

export default Benefit;