import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const Head = styled.View`
  padding-top: 5px;
  padding-bottom: 10px;
  background-color: #fff;
  elevation: 3;
`;

const Text = styled.Text`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

const SubText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    backgroundColor: '#FFFFFF'
  }
});

export default () => (
  <Head>
    <Text>Secret Money</Text>
    <SubText>Track your digital money!</SubText>
  </Head>
);
