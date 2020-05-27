import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import { DEVICE } from '../../constants/styles.js';

import { LocationContext } from '../providers/locationProvider';

export const Map = ({ children }) => {
  const { latitude, longitude } = useContext(LocationContext);
  
  return latitude ? (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {children}
      </MapView>
    </View>
  ) : null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: DEVICE.WIDTH,
    height: DEVICE.HEIGHT,
  }
})