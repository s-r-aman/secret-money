import React from 'react';

//  Styled Components
import { View, Text } from './Styles';

export default ({ h1, h24, d7 }) => (
  <View>
    <Text col="#9A9A9A" mar="10px 0px 30px 0px" center fs="20px">
      Price Changes
    </Text>
    <Text col="#9A9A9A" mar="0px 0px 30px 0px" center fs="25px">
      1 Hour: {Number(Math.round(h1 + 'e2') + 'e-2')} %
    </Text>
    <Text col="#9A9A9A" mar="0px 0px 30px 0px" center fs="25px">
      24 Hour: {Number(Math.round(h24 + 'e2') + 'e-2')} %
    </Text>
    <Text col="#9A9A9A" mar="0px 0px 30px 0px" center fs="25px">
      7 Days: {Number(Math.round(d7 + 'e2') + 'e-2')} %
    </Text>
  </View>
);
