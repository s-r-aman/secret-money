import styled from 'styled-components/native';

const Name = styled.Text`
  font-size: 50px;
  font-weight: 800;
`;

const View = styled.View`
  margin: ${({ mar = 0 }) => mar};
  padding: ${({ pad = 0 }) => pad};
`;

const Image = styled.Image`
  height: 100px;
  width: 100px;
`;

const Flex = styled.View`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${({ jc = 'flex-start' }) => jc};
  align-items: ${({ ai = 'flex-start' }) => ai};
`;

const Text = styled.Text`
  font-size: ${({ fs = '20px' }) => fs};
  color: ${({ col = 'black' }) => col};
  margin: ${({ mar = 0 }) => mar};
  padding: ${({ pad = 0 }) => pad};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

const Line = styled.View`
  height: ${({ h = '1px' }) => h};
  width: ${({ w = '33%' }) => w};
  margin: ${({ mar = '0 auto' }) => mar};
  background: ${({ bg = '#efefef' }) => bg};
`;

export { Name, View, Image, Flex, Text, Line };
