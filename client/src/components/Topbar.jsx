import {ArrowDropDownOutlined} from '@material-ui/icons';
import styled from "styled-components";

const Container = styled.div `
  height:37px;
  background-color:black;
  
`;
const Wrapper = styled.div `

padding:0 30px;
display: flex;
position:relative;
justify-content:space-between;
height:100%;
`;

const Left = styled.div `
color:white;
flex:1;
display: flex;
justify-content: center;
align-items: center;

`;
const LeftBox = styled.div `
position:absolute;
height:100%;
left:80px;
  display: flex;
  align-items: center;
`;
const Language = styled.div `
font-size: 14px;
  font-weight: 300;
`;

const Center = styled.div`
  width: 100%;
  
`;

const Title = styled.div `
  color:white;
  width:100%;
  height:100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
`;
const Right = styled.div `
  flex:1;
  display: flex;
  color:white;
  justify-content: center;
  align-items: center;
  position:absolute;
  right:80px;
  height:100%;
`;
const Login = styled.button `
  background-color:black;
  color:white;
  font-size: 14px;
  font-weight: 300;
  border:none;
  margin-right: 10px;
`;
const Register = styled.button `
  background-color:black;
  color:white;
  font-size: 14px;
  font-weight: 300;
  border:none;
  margin-right: 10px;
`;

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LeftBox>
                        <Language>UNITED KINGDOM</Language>
                        <ArrowDropDownOutlined/>
                    </LeftBox>
                </Left>

                <Center>

                    <Title>
                        FREE DELIVERY ON ALL ORDERS OVER $50 + 120-DAY FREE RETURNS | SECURE PAYMENT
                    </Title>
                </Center>

                <Right>
                    <Login>LOGIN</Login>
                    <Register>REGISTER</Register>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar