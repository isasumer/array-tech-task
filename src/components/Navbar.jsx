import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mobile from "./Responsive";

const Container = styled.div`
  width: 100%;
  height: 60px;
  margin: 15px;
  ${mobile({ height: "140px", margin: "0" })};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ display: "flex", flexDirection: "column" })};
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
  ${mobile({ justifyContent: "center", paddingRight: "0px" })};
`;

const MenuItem = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 15px;
  ${mobile({ fontSize: "1rem", marginRight: "5px" })};
`;
const Title = styled.h1`
  font-size: 40px;
  width: 600px;
  padding-left: 100px;
  ${mobile({ width: "60%", paddingLeft: "0" })};
`;
const Navbar = (props) => {
  return (
    <Container>
      <Wrapper>
        <Title>Asian Menu</Title>
        <Right>
          <Link to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <MenuItem>Call Us</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem> Sign In </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={new Set(props.cart).size} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
