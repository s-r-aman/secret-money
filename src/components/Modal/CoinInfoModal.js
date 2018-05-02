import React from 'react';
import styled from 'styled-components/native';
import { Modal } from 'react-native';

//  Styled Components
import { Name } from './Styles';

//  Components
import Hero from './Hero';

const View = styled.View``;
const Text = styled.Text``;

export default ({
  name,
  rank,
  last_updated,
  max_supply,
  percent_change_1h,
  percent_change_24h,
  percent_change_7d,
  price_btc,
  price_usd,
  price_inr,
  symbol,
  modalVisibility,
  onRequestClose,
  uri
}) => (
  <Modal
    visible={modalVisibility}
    onRequestClose={onRequestClose}
    animationType="slide"
  >
    <View>
      <Hero name={name} rank={rank} symbol={symbol} uri={uri} />
      <Text>{last_updated}</Text>
      <Text>{max_supply}</Text>
      <Text>{percent_change_1h}</Text>
      <Text>{percent_change_24h}</Text>
      <Text>{percent_change_7d}</Text>
      <Text>{price_btc}</Text>
      <Text>{price_usd}</Text>
      <Text>{price_inr}</Text>
      <Text>{symbol}</Text>
    </View>
  </Modal>
);
