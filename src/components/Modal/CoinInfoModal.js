import React from 'react';
import styled from 'styled-components/native';
import { Modal } from 'react-native';

const View = styled.View``;
const Text = styled.Text``;

export default ({
  name,
  rank,
  lastUpdated,
  max_supply,
  percent_changed_1h,
  percent_changed_24h,
  percent_changed_7d,
  price_btc,
  price_usd,
  price_inr,
  symbol,
  modalVisibility,
  onRequestClose
}) => (
  <Modal
    visible={modalVisibility}
    onRequestClose={onRequestClose}
    animationType="slide"
  >
    <View>
      <Text>{name}</Text>
      <Text>{rank}</Text>
      <Text>{lastUpdated}</Text>
      <Text>{max_supply}</Text>
      <Text>{percent_changed_1h}</Text>
      <Text>{percent_changed_24h}</Text>
      <Text>{percent_changed_7d}</Text>
      <Text>{price_btc}</Text>
      <Text>{price_usd}</Text>
      <Text>{price_inr}</Text>
      <Text>{symbol}</Text>
    </View>
  </Modal>
);
