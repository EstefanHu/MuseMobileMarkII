import React, { useState } from 'react'
import { API } from '../../constants/network.js'

export const FeedContext = React.createContext({
  feed: null,
  setFeed: () => { },
  refreshFeed: () => { },
});

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState([]);

  return (
    <FeedContext.Provider value={{
      feed,
      setFeed,
      refreshFeed: (refreshCallback) => {
        fetch(API + 'mobile/refreshLibrary')
          .then(res => res.json())
          .then(res => {
            if (!res.err) setFeed(res.payload)
            refreshCallback()
          })
          .catch(console.error)
      },
    }}>
      {children}
    </FeedContext.Provider>
  )
}