import React from 'react';
import {Button, View, Input, Text} from 'ui';
import {useAuth} from 'core';

export const Login = () => {
  const {signIn} = useAuth();
  return (
    <View
      justifyContent="center"
      flexDirection="column"
      paddingHorizontal="m"
      flex={1}
      bg="background">
      <Text variant="header" testID="title" textAlign="center">
        Sing in
      </Text>
      <Input name="firstName" label="First Name" placeholder="Your Name" />
      <Input name="lastName" label="Last Name" placeholder="Your Last  Name" />
      <Button
        label="Login"
        onPress={() => {
          signIn('my-token-secret');
        }}
        variant="secondary"
      />
    </View>
  );
};
