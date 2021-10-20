import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import mobile from "../components/Responsive";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: orange;
  margin: 0px;
  padding: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  width: 80%;
`;

const TopButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({
    padding: "6px",
    fontWeight: "500",
    margin: "3px",
    border: "filled",
    fontSize: "12px",
  })}
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  width: 70%;
  display: flex;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const Product = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 10px;
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 0.25rem solid black;
  border-radius: 10px;
`;

const ProductName = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ fontSize: "16px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: "16px" })}
`;
const Total = styled.div`
  margin: 20px 0 0 120px;
  height: 40px;
  font-size: 30px;
  border: 1px solid black;

  ${mobile({
    paddingLeft: "15px",
    backgroundColor: "#f0ee97",
    margin: "10px 20px",
    fontSize: "20px",
    border: "1px solid black",
    borderRadius: "10px",
  })}
`;

const Cart = (props) => {
  const reducer = (x, y) => x + y;
  const totalPrice = props.cart.map((item) => item.price).reduce(reducer, 0);
  console.log(totalPrice);

  return (
    <Container>
      {console.log([new Set(props.cart)])}
      <Navbar />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({new Set(props.cart).size})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <div>
            {props.cart.map((item) => (
              <Product key={item.key}>
                <Image alt={item.title} src={item.img} />
                <ProductName>
                  <span>
                    <b>Name:</b> {item.title}
                  </span>
                  <ProductAmountContainer>
                    <RemoveIcon />
                    <ProductAmount>1</ProductAmount>
                    <AddIcon />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {"$"}
                    {item.price}
                  </ProductPrice>
                </ProductName>
              </Product>
            ))}
          </div>
          <Total>
            <b>Total Price:</b>
            <span>
              {" "}
              {"$"}
              {totalPrice}{" "}
            </span>
          </Total>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
