import React, { useState } from "react";
import PropTypes from "prop-types";
import MonthBarChart from "./MonthBarChart";
import WeekBarChart from "./WeekBarChart";
import Switch from "./Switch";
import SwitchInChart from "./SwitchInChart";
import Amount from "./Amount";
import { AiOutlineArrowDown } from "react-icons/ai";



Statictis.propTypes = {};

function Statictis(props) {
  const [option, setOption] = useState("Monthly");
  const handleOption = (option) =>{
    setOption(option);
  }
  return (
    <div className="my-5 mx-28 select-none">
      <h1 className="inline-block text-5xl text-center bg-gradient-to-r from-[#005072] to-[#AEBD38] bg-clip-text text-transparent ">Statistic</h1>
      <div className="flex justify-end">
        <Switch handleOption={handleOption}/>  
      </div>
      <div className="relative"> 
        <h2 className="text-3xl text-left text-[#005072] mb-[10px]">Prototype statistic</h2>
        <div className="bg-[#F3F3F3]/[.4] w-full rounded">
          <div className=" overflow-scroll overflow-y-hidden scroll-container pt-[20px]">
            <SwitchInChart option={option} />
          </div>
          <div className="w-[800px] m-auto ">
            {option === 'Monthly' ? <MonthBarChart /> : <WeekBarChart />} 
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl text-left text-[#005072] my-[20px] ">Interactions statistic</h2>
       <div className="flex justify-between mt-[10px] text-center">     
       {/* if more than 4 component => flex : nowarp */}
       <Amount />
       <Amount />
       <Amount />
       <div className="bg-[#F3F3F3]/[.7] w-[300px] h-[150px] flex justify-center items-center rounded py-[10px]">
          <div>
          <p className="text-lg text-[#005072]">Visit Amount</p>
          <div className="text-5xl font-semibold text-[#005072] ">10,000</div>
          <div className="text-small text-[red] mt-[7px] opacity-60">
              <div className='inline-block'>
              <AiOutlineArrowDown />
              </div>
              20%
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Statictis;