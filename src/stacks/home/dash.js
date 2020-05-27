import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Marker } from 'react-native-maps';
import { Map } from '../../components/map.js'
import { FeedContext } from '../../providers/feedProvider.js';

export const Dash = () => {
  const { feed } = useContext(FeedContext)

  useEffect(() => {
    console.log(feed)
  })

  return (
    <View style={styles.container}>
      <Map>
        {feed[0] ? <Marker
          coordinate={{
            latitude: feed[0].coordinates[1],
            longitude: feed[0].coordinates[0]
          }}
          title={feed[0].title}
          description={feed[0].description}
        /> : null}
      </Map>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})