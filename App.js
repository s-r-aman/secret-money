import React from 'react';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

//  Components
import Header from './src/components/Header/Header';
import CryptoContainer from './src/components/Container/CryptoContainer';

//  Store
import Store from './src/Store';

const View = styled.View`
  flex: 1;
`;

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
