import React, { useState, useEffect, useContext } from 'react'
import {
  ActivityIndicator,
  View,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { LocationContext } from './providers/locationProvider'

import { BottomTabs } from './components/bottomTabs'

export const Stage = () => {
  const { updateLocation } = useContext(LocationContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    updateLocation()
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <View syle={{flex: '1', justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  )
}