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
      <View style={styles.tabContainer}>
        <View style={styles.tab}/>
      </View>
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.description}>{story.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: DEVICE.WIDTH * .95,
    height: DEVICE.HEIGHT,
    position: 'absolute',
    left: DEVICE.WIDTH * .025,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tabContainer: {
    width: '100%',
    alignItems: 'center',
  },
  tab: {
    backgroundColor: 'grey',
    height: 5,
    width: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20
  }
})