import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import bgImage from "../assets/background.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${bgImage}) center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Select = styled.select`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const Upload = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>ADD YOUR PRODUCT</Title>
          <Form>
            <Input
              type="text"
              placeholder="Name of your product"
              name="name"
              required
            />
            <Input
              type="text"
              placeholder="Price of your product"
              name="category"
              required
            />

            <Input type="file" id="myFile" name="filename" />
            <Select>
              <Option disabled selected>
                Select Category
              </Option>
              <Option>Kids</Option>
              <Option>Women</Option>
              <Option>Men</Option>
            </Select>

            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>UPLOAD</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Upload;
