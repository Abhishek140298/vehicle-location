import React from 'react';
import './VehicleList.css';
const vehicleList=['Mercedes Truck UK070112', 'WagnorR 2978','UP80 CJ 708814','WagonR2978','Mercedes Truck']

const VehicleList = () =>
  vehicleList.map((cval)=>{return(<div className='vehicle_name_div'>
    <span className='dot'></span>
      <span className='vehicle_name'>{cval}</span>
			<hr />
    </div>)});



export default VehicleList;
