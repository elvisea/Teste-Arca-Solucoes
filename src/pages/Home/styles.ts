import styled from 'styled-components/native';

export const Safe = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 15px 0 15px;
  align-items: center;
  justify-content: center;
  background-color: #1f1c2c;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  text-align: center;
  margin-bottom: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  border-radius: 5px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
  background-color: #8a70ff;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;

export const ContainerFooter = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  flex-direction: row;
  background-color: #1f1c2c;
  padding: 0 15px;
  justify-content: space-between;
`;

export const PageButton = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  color: #fff;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
`;
