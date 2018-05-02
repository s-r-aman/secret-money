import React from 'react';
import styled from 'styled-components/native';

const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

const Container = styled.TouchableOpacity`
  display: flex;
  margin-top: 30px;
  padding: 0px 10px 20px 10px;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 3px;
  width: 100%;
`;

const Text = styled.Text`
  font-size: 17px;
  font-weight: ${({ bold }) => (bold ? '900' : '400')};
`;

const Wrapper1 = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Wrapper2 = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  justify-content: space-around;
`;

const Wrapper3 = styled.View`
  display: flex;
  flex-direction: row;
`;

const Wrapper4 = styled.View`
  flex: 5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;

const ImageWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;

const TextModded = Text.extend`
  color: ${({ positive }) => (positive ? '#00D1FF' : '#FF4D4D')};
`;

const Wrapper6 = styled.View`
  display: flex;
  flex-direction: row;
`;

export default ({
  symbol,
  price_usd,
  percent_change_24h,
  name,
  percent_change_7d,
  selectItemHandler,
  uri
}) => (
  <Container onPress={() => selectItemHandler(symbol)}>
    <Wrapper1>
      <ImageWrapper>
        <Image source={{ uri }} />
      </ImageWrapper>
      <Wrapper4>
        <Wrapper3>
          <Text bold>{symbol}</Text>
          <Text>{' | '}</Text>
          <Text>{name}</Text>
        </Wrapper3>
        <Text bold>
          {price_usd}
          {' $'}
        </Text>
      </Wrapper4>
    </Wrapper1>
    <Wrapper2>
      <Wrapper6>
        <Text>{'24h: '}</Text>
        <TextModded positive={percent_change_24h >= 0}>
          {percent_change_24h}
          {'%'}
        </TextModded>
      </Wrapper6>
      <Wrapper6>
        <Text>{'7d: '}</Text>
        <TextModded positive={percent_change_7d >= 0}>
          {percent_change_7d}
          {'%'}
        </TextModded>
      </Wrapper6>
    </Wrapper2>
  </Container>
);
