import { useRef } from "react";
import { connect } from "react-redux";
import { addChart, search, categoryButton } from "../actions/action";
import {
  Container,
  Form,
  Input,
  Search,
  Wrapper,
  Image,
  Content,
  Title,
  Subtitle,
  Price,
  Desc,
  Button,
} from "./Menu_Style";

const Menu = (props) => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.search(inputRef.current.value);
  };
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          ref={inputRef}
          placeholder="Please enter food's name"
        />
        <Search type="submit">Search</Search>
      </Form>
      {props.menuList.map((item) => {
        return (
          <Wrapper key={item.id}>
            <Image src={item.img}></Image>
            <Content>
              <Title>
                <Subtitle>{item.title}</Subtitle>
                <Price>{item.price}</Price>
              </Title>
              <Desc>{item.desc}</Desc>
              <Button
                onClick={() => {
                  props.addChart(item);
                }}
              >
                Add to Cart
              </Button>
            </Content>
          </Wrapper>
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state, props) => {
  return {
    menuList: state.menuList,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addChart, search, categoryButton })(
  Menu
);
