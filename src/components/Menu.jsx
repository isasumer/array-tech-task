import { useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem, addItem, search, categoryButton } from "../actions/action";
import data from "./data";
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
  console.log(props.menuList);
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.search(inputRef.current.value);
  };
  const spliceFunction = (item) => {
    props.menuList.splice(
      props.menuList.findIndex((i) => i.title === item.title),
      1
    );
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
        <Link to="/cart">
          <Search>Add Item</Search>
        </Link>
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
                  props.addItem(item);
                }}
              >
                Update
              </Button>
              <Button
                onClick={(item) => {
                  spliceFunction(item);
                }}
              >
                Delete
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

export default connect(mapStateToProps, {
  deleteItem,
  addItem,
  search,
  categoryButton,
})(Menu);
