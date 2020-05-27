import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Dash } from './dash.js'

const Stack = createStackNavigator()

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Dash'>
      <Stack.Screen
        name='Dash'
        options={{
          header: () => null
        }}
        component={Dash}
      />
    </Stack.Navigator>
  )
}