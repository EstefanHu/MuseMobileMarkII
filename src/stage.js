import React, { useState, useEffect, useContext } from 'react';
import {
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LocationContext } from './providers/locationProvider';

import { AppTabs } from './layout/appTabs';

export const Stage = () => {
  const { updateLocation } = useContext(LocationContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateLocation()
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size='large' />
      </Center>
    )
  }

  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}