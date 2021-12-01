/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';

export const Context = React.createContext();

export const useStore = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const [topic, setTopic] = useState('dysgnathie');

  const value = {
    topic,
    setTopic
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
