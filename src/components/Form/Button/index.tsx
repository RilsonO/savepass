import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
