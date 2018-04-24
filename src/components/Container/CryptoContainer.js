import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

//  Actions
import fetchCoinData from './../../Actions/FetchCoinsData';

//  Components
import CoinCard from './../CoinCard/CoinCard';

const View = styled.View`
  display: flex;
  justify-content: center;
  align-items: ${({ fetching }) => (fetching ? 'center' : 'flex-start')};
  flex-direction: ${({ fetching }) => (fetching ? 'row' : 'column')};
  width: 100%;
  height: ${({ fetching }) => (fetching ? '80%' : '100%')};
`;

const ScrollView = styled.ScrollView`
  margin-bottom: 100px;
  width: 100%;
`;

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.fetchCoinData();
  }

  render() {
    const { crypto } = this.props;
    return (
      <View fetching={crypto.isFetching}>
        {crypto.isFetching ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView>
            {crypto.data.map(coinData => (
              <CoinCard key={coinData.symbol} {...coinData} />
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ crypto }) => ({
  crypto
});

export default connect(mapStateToProps, { fetchCoinData })(CryptoContainer);
