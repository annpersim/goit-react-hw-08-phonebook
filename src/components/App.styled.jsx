import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-size: 40;
  padding: 25px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 50px;
  font-weight: 700;
`;

export const SubTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 600;
`;

export const Text = styled.p`
  margin-top: 15px;
  font-size: 25px;
`;

export const Button = styled.button`
  background-color: #ff8906;
  color: #0f0e17;
  border: 1px solid black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  font-family: inherit;
  padding: 0 5px;
  height: 20px;
  &:hover,
  &focus {
    background-color: #f25f4c;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 40;
  padding: 25px;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: baseline;
`;

export const FlexList = styled.div`
  display: flex;
  flex-direction: column;
`;
