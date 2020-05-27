import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Marker } from 'react-native-maps';
import { Map } from '../../components/map.js'

export const Dash = () => {
  return (
    <View>
      <Map>

      </Map>
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {},
})