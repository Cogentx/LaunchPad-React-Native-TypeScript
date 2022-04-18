import React, { createContext, useContext } from 'react';
import { View, Text } from 'react-native';

type Props = {
  children?: JSX.Element;
};

// initially empty object
const AuthContext = createContext({});

export const AuthProvider = ({ children }: Props) => {
  return <AuthContext.Provider value={{ user: 'cogentx' }}>{children}</AuthContext.Provider>;
};

// Custom Hook - useAuth
export default function useAuth() {
  return useContext(AuthContext);
}
