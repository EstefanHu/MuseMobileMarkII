import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { DEVICE } from '../../constants/styles.js'

export const BottomSheet = ({ story }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.description}>{story.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // height: 300,
    width: DEVICE.WIDTH * .95,
    position: 'absolute',
    left: DEVICE.WIDTH * .025,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 26
  },
  description: {
    fontSize: 20
  }
})