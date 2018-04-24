import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import Modal from './../Modal/CoinInfoModal';

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
  constructor(props) {
    super(props);
    this.state = {
      selectedItemSymbol: null,
      itemContent: {},
      modalVisibility: false
    };
  }

  componentDidMount() {
    this.props.fetchCoinData();
  }

  selectItemHanlder = symbol => {
    this.setState(() => ({
      modalVisibility: true,
      selectedItemSymbol: symbol,
      itemContent: this.props.crypto
        ? this.props.crypto.data.find(({ symbol: sym }) => sym === symbol)
        : {}
    }));
  };

  deselectItemHandler = () => {
    this.setState(() => ({
      modalVisibility: false,
      selectedItemSymbol: null,
      itemContent: {}
    }));
  };

  render() {
    const { crypto } = this.props;
    return (
      <View fetching={crypto.isFetching}>
        {crypto.isFetching ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView>
            <Modal
              {...this.state.itemContent}
              modalVisibility={this.state.modalVisibility}
              onRequestClose={this.deselectItemHandler}
            />
            {crypto.data.map(coinData => (
              <CoinCard
                key={coinData.symbol}
                {...coinData}
                selectItemHandler={this.selectItemHanlder}
              />
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
