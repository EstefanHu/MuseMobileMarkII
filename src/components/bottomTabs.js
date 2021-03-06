import React, { useEffect, useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Octicons,
} from '@expo/vector-icons'
import { FeedContext } from '../providers/feedProvider'

import { HomeStack } from '../stacks/home/homeStack.js'

import { API, PLACEHOLDER } from '../../constants/network.js'
import { COLORS } from '../../constants/styles.js'

const Tabs = createBottomTabNavigator()

export const BottomTabs = () => {
  const { setFeed } = useContext(FeedContext)

  // useEffect(() => {
  //   fetch(API + 'mobile/base')
  //     .then(res => res.json())
  //     .then(res => {
  //       setFeed(res.feed)
  //     })
  //     .catch(console.error)
  // }, [])

  useEffect(() => {
    fetch(PLACEHOLDER)
      .then(res => res.json())
      .then(res => {
        setFeed(res)
      })
      .catch(console.error)
  }, [])

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ _, color, size }) => {
          if (route.name === 'Home') {
            return <Octicons name={'home'} size={size} color={color} />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.PRIMARY,
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name='Home' component={HomeStack} />
    </Tabs.Navigator>
  )
}