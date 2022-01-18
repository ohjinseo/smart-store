import {Link} from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div `
  min-width:350px;
  height: 450px;
  flex:1;
  margin:30px 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  background-color: red;
  `;

const Wrapper = styled.div `
    min-width:350px;
  height: 450px;
  `;

const Top = styled.div `
  width:100%;
  height:100%;
  background-color: #eff0f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img `
  height:95%;
  object-fit: cover;
`;

const Bottom = styled.div `
  padding:10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3 `
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const Price = styled.span `
  
  font-weight: 600;
  font-size: 22px;
`;

const ProductBox = () => {
    return (

        <Container>
            <Link
                to="/product/123"
                style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                <Wrapper>

                    <Top>
                        <Image src="https://i.ibb.co/NsxfVLt/pngegg-19.png"/>
                    </Top>
                    <Bottom>
                        <Title>
                            Muscle Fit Jumper
                        </Title>

                        <Price>$22.99</Price>
                    </Bottom>
                </Wrapper>
            </Link>
        </Container>

    )
}

export default ProductBox
