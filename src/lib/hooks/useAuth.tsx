import React, { createContext } from 'react';
import { View, Text } from 'react-native';

type Props = {
  children?: JSX.Element;
};

// initially empty object
const AuthContext = createContext({});

const AuthProvider = ({ children }: Props) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
