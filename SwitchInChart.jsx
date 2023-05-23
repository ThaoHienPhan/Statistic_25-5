import React, { useState } from 'react';

function SwitchInChart({option}) {

  const monthArray = ["1/2023", "2/2023", "3/2023", "4/2023", "This Month"];
  const weekArray = ['01/5 - 07/5', '08/5 - 14/5', '15/5 - 21/5', '22/5 - 29/5','This Week'];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const [activeIndex, setActiveIndex] = useState((option==="Monthly" ? monthArray : weekArray).length - 1);
  const startIndex = Math.max(activeIndex - 1, 0);
  const endIndex = Math.min(activeIndex + 1, (option==="Monthly" ? monthArray : weekArray).length - 1);
  const visibleDates = (option==="Monthly" ? monthArray : weekArray).slice(startIndex, endIndex + 1);

  return (
    <div className='flex gap-[200px] overflow-x-auto whitespace-nowrap'>
      <div className='w-[100px]' />
      {visibleDates.map((item, index) => (
        <div
          key={index + startIndex}
          className={`w-[100px] text-[#005072] cursor-pointer ${
            activeIndex === startIndex + index ? 'border-gradient font-bold' : ''
          }`}
          onClick={() => handleItemClick(startIndex + index)}
        >
          {item}
        </div>
      ))}
      <div className='w-[100px]' />  
    </div>
  );
}

export default SwitchInChart;