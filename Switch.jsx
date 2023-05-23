import React, { useState } from 'react';
import PropTypes from 'prop-types';

Switch.propTypes = {
    
};

function Switch({handleOption}) {
    const [option, setOption] = useState('Monthly');

    return (
        <div className='flex w-[200px] h-[43px] justify-between items-center border-2 rounded-3xl cursor-pointer'>
        <div
            className={`w-[100px] h-[43px] flex justify-center items-center   ${
                option === 'Weekly' ? 'border rounded-3xl border-[#005072] text-[#005072] font-bold bg-[#F3F3F3]' : 'text-slate-500'
            }`}
            onClick={() => {handleOption('Weekly'); setOption("Weekly")}}
        >
            Weekly
        </div>
        <div
            className={`w-[100px] h-[43px] flex justify-center items-center  ${
                option === 'Monthly' ? ' border rounded-3xl border-[#005072] text-[#005072] font-bold bg-[#F3F3F3]' : 'text-slate-500'
            }`}
            onClick={() => {handleOption('Monthly'); setOption("Monthly")}}
        >
            Monthly
        </div>
    </div>
);
}

export default Switch;