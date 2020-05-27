import React from 'react';
import { LocationProvider } from './providers/locationProvider';
import { FeedProvider } from './providers/feedProvider';

import { Stage } from './stage';

export const Context = () => {
  return (
    <LocationProvider>
      <FeedProvider>
        <Stage />
      </FeedProvider>
    </LocationProvider>
  )
}