import React from 'react';

//  Styled Components
import { View, Name, Image, Flex, Text } from './Styles';

export default ({ name: names, symbol, uri, rank }) => (
  <View pad="60px 50px">
    <Flex row jc="space-around" ai="center">
      <Image source={{ uri }} />
      <Flex jc="center" ai="center">
        {names.split(' ').map(name => <Name>{name}</Name>)}
      </Flex>
    </Flex>
    <View pad="40px 0px 0px 0px">
      <Flex row jc="space-around">
        <Flex ai="center">
          <Text col="#7FC3CE" fs="25px">
            #{rank}
          </Text>
          <Text col="#9A9A9A" mar="20px 0px 0px 0px">
            Rank
          </Text>
        </Flex>
        <Flex ai="center">
          <Text col="#00879D" fs="25px">
            {symbol}
          </Text>
          <Text col="#9A9A9A" mar="20px 0px 0px 0px">
            Symbol
          </Text>
        </Flex>
      </Flex>
    </View>
  </View>
);
