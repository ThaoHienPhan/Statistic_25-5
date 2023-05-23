import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineArrowUp } from "react-icons/ai";

Amount.propTypes = {
    
};

function Amount(props) {
    return (
        <div className="bg-[#F3F3F3]/[.7] w-[300px] h-[150px] flex justify-center items-center rounded py-[10px]">
          <div>
            <p className="text-lg text-[#005072]">Visit Amount</p>
            <div className="text-5xl font-semibold text-[#005072] ">10,000</div>
            <div className="text-small text-[green] mt-[7px] opacity-60">
              <div className='inline-block'>
              <AiOutlineArrowUp />
              </div>
              20%
            </div>
          </div>
        </div>
    );
}

export default Amount;