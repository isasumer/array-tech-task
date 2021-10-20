import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Menu from "../components/Menu";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Category />
      <Menu />
    </Container>
  );
};
export default Home;
