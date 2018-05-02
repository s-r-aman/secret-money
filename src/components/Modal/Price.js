import React from 'react';

//  Styled Components
import { View, Text, Line } from './Styles';

export default ({ btc, inr, usd }) => (
  <View>
    <Text col="#9A9A9A" mar="10px 0px 30px 0px" center fs="20px">
      Price
    </Text>
    <Text col="#9A9A9A" mar="0px 0px 30px 0px" center fs="25px">
      {Number(Math.round(btc + 'e2') + 'e-2')} BTC
    </Text>
    <Text col="#9A9A9A" mar="0px 0px 30px 0px" center fs="25px">
      {Number(Math.round(inr + 'e2') + 'e-2')} INR
    </Text>
    <Text col="#9A9A9A" mar="0px 0px 30px 0px" center fs="25px">
      {Number(Math.round(usd + 'e2') + 'e-2')} USD
    </Text>
    <Line />
  </View>
);
