import React, { useState } from 'react';

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
        fetch('http://192.168.1.10:4000/mobile/refreshLibrary')
          .then(res => res.json())
          .then(res => {
            if (!res.err) setFeed(res.payload);
            refreshCallback();
          })
          .catch(console.error);
      },
    }}>
      {children}
    </FeedContext.Provider>
  );
};