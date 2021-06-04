import React,{useState} from 'react';
import { Map, GoogleApiWrapper,InfoWindow,Marker } from 'google-maps-react';

const MapVehicle = (props) => {
	console.log(props,'props')
	const[showingInfoWindow,setShowingInfo]=useState(false);
	const[activeMarker,setActiveMarker]=useState();
	const[selectedPlace,setSelectedPlace]=useState();

	const onMarkerClick=(prop,marker,e)=>{
		console.log(prop,'marker')
     setActiveMarker(marker);
		 setSelectedPlace(prop.name)
		 setShowingInfo(true);
	}
	
  return (
    <div className='map_div'>
      <Map
        google={props.google}
        zoom={14}
      
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
    >
			        <Marker
          onClick={onMarkerClick}
          name={'Kenyatta International Convention Centre'}
					
        />
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
					
          
        >
				<div>
            <h4>{selectedPlace}</h4>
          </div>
</InfoWindow>
</Map>

    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDqFcm3QRCap8BwcTk9ccSpe2YQSectfh0'
})(MapVehicle);
