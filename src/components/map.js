import React, { useContext } from 'react';
import { 
  StyleSheet,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import { HEIGHT, WIDTH } from '../../constants/styles.js';

import { LocationContext } from '../providers/locationProvider';

export const Map = ({children}) => {
  const { latitude, longitude } = useContext(LocationContext);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        initialRegion={{
          latitude: latitude || 47.6859,
          longitude: longitude || -122.2994,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {children}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapStyle: {
    width: WIDTH,
    height: HEIGHT,
  }
})