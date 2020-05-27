import React, { useState, useEffect, useContext, useRef } from 'react'
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated
} from 'react-native'
import { Marker } from 'react-native-maps'
import { FeedContext } from '../../providers/feedProvider.js'
import { Map } from '../../components/map.js'
import { BottomSheet } from '../../components/bottomSheet.js'

export const Dash = () => {
  const { feed } = useContext(FeedContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const position = new Animated.ValueXY()
  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log('hello');
        pan.setOffset({ x: pan.x._value });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  const renderStories = () => {
    return feed.map((item, idx) => {
      if (idx === currentIndex) {
        return (
          <Animated.View
            key={item.id}
            style={[position.getLayout(), { transform: [{ translateX: pan.x }] }]}
            {...panResponder.panHandlers}
          >
            <BottomSheet story={item} />
          </Animated.View>
        )
      } else {
        return (
          <Animated.View
            key={item.id}
          >
            <BottomSheet story={item} />
          </Animated.View>
        )
      }
    }).reverse()
  }

  return (
    <>
      <Map>
        {/* {feed[0] ? <Marker
          coordinate={{
            latitude: feed[0].coordinates[1],
            longitude: feed[0].coordinates[0]
          }}
          title={feed[0].title}
          description={feed[0].description}
        /> : null} */}
      </Map>
      <View style={styles.container}>
        {renderStories()}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

})