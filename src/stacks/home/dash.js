import React, { useState, useContext, useRef } from 'react'
import {
  StyleSheet,
  View,
  PanResponder,
  Animated
} from 'react-native'
import { FeedContext } from '../../providers/feedProvider.js'
import { Map } from '../../components/map.js'
import { BottomSheet } from '../../components/bottomSheet.js'
import { DEVICE } from '../../../constants/styles.js'

export const Dash = () => {
  const { feed } = useContext(FeedContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const pan = useRef(new Animated.ValueXY()).current
  const swipedPan = useRef(new Animated.ValueXY({ x: -DEVICE.WIDTH, y: 0 })).current

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        if (gestureState.dx > 0 && currentIndex > 0) {
          swipedPan.setValue({ x: -DEVICE.WIDTH + gestureState.dx, y: 0 })
        } else {
          pan.setOffset({ x: pan.x._value });
        }
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x }]),
      onPanResponderRelease: (e, gestureState) => {
        pan.flattenOffset();
        if (-gestureState.dx > 50 && -gestureState.vx > 0.7) {
          Animated.timing(pan, {
            toValue: ({ x: -DEVICE.WIDTH, y: 0 }),
            duration: 200
          }).start(() => {
            setCurrentIndex(currentIndex => currentIndex + 1)
            pan.setValue({ x: 0, y: 0 })
          })
        } else {
          Animated.spring(pan, {
            toValue: ({ x: 0, y: 0 })
          }).start()
        }
      }
    })
  ).current;

  const renderStories = () => {
    return feed.map((item, idx) => {
      if (idx === currentIndex - 1) {
        return (
          <Animated.View
            key={item.id}
            style={{ transform: [{ translateX: swipedPan.x }] }}
            {...panResponder.panHandlers}
          >
            <BottomSheet story={item} />
          </Animated.View>
        )
      } else if (idx < currentIndex) return null
      if (idx === currentIndex) {
        return (
          <Animated.View
            key={item.id}
            style={{ transform: [{ translateX: pan.x }] }}
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
    position: 'absolute',
    bottom: 150
  }
})