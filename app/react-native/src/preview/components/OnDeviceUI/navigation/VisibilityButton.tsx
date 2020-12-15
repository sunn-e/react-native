import React, { PureComponent } from 'react';
import styled from '@emotion/native';

interface Props {
  onPress: () => void;
}

const Touchable = styled.TouchableOpacity({
  backgroundColor: 'transparent',
  position: 'absolute',
  right: 8,
  bottom: 12,
  zIndex: 100,
});

const HideIcon = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.buttonTextColor,
}));

export default class VisibilityButton extends PureComponent<Props> {
  render() {
    const { onPress } = this.props;
    return (
      <Touchable
        onPress={onPress}
        testID="Storybook.OnDeviceUI.toggleUI"
        accessibilityLabel="Storybook.OnDeviceUI.toggleUI"
        hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
      >
        <HideIcon>□</HideIcon>
      </Touchable>
    );
  }
}
