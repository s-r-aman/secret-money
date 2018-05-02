import React from 'react';
import styled from 'styled-components/native';
import { Modal, ScrollView } from 'react-native';

//  Styled Components
import { Name } from './Styles';

//  Components
import Hero from './Hero';
import Price from './Price';
import PriceChange from './PriceChange';

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
    <ScrollView>
      <Hero name={name} rank={rank} symbol={symbol} uri={uri} />
      <Price btc={price_btc} usd={price_usd} inr={price_inr} />
      <PriceChange
        h1={percent_change_1h}
        h24={percent_change_24h}
        d7={percent_change_7d}
      />
    </ScrollView>
  </Modal>
);
