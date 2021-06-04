import React from 'react';
import VehicleList from '../vehicleList/VehicleList';
import './SideNav.css';

const SideNav = () => {
  return (
    <div className='main_div'>
      <div className='input_div'>
        
        <input placeholder='search' type='text' />
      </div>
      <div className='vehicle_list'>
        <VehicleList />
      </div>
    </div>
  );
};

export default SideNav;
