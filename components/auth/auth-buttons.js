import React from 'react';
import { Button } from '@chakra-ui/react';

export const AuthButton = ({isAuthenticated, signIn, signOut}) => {

  return !isAuthenticated ? (
      <Button onClick={signIn}>{'Login'}</Button>
    ) : (
      <Button onClick={ signOut}>
        {'Logout' }
      </Button>
    )
};


