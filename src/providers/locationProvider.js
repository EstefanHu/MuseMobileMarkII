import React, { useState } from 'react';

export const LocationContext = React.createContext({
  longitude: null,
  latitude: null,
  updateLocation: () => {},
})

export const LocationProvider = ({ children }) => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  return (
    <LocationContext.Provider value={{
      longitude,
      latitude,
      updateLocation: () => {
        navigator.geolocation.getCurrentPosition(position => {
          setLongitude(position.coords.longitude);
          setLatitude(position.coords.latitude);
        }, error => console.log(error));
      }
    }}>
      {children}
    </LocationContext.Provider>
  )
}