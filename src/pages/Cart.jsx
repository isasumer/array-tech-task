import styled from "styled-components";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { addItem } from "../actions/action";
import { Input, Search } from "../components/Menu_Style";
import { useState } from "react";
import data from "../components/data";
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: orange;
  margin: 0px;
  padding: 0px;
`;
const Form = styled.form`
  width: 60%;
  border: 1px solid red;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Category = styled.div`
  margin-bottom: 10px;
`;
const Select = styled.select`
  height: 50px;
  width: 644px;
  border: 1px solid blue;
  font-size: 26px;
`;
const Option = styled.option`
  height: 50px;
  width: 644px;
  font-size: 26px;
`;

const Cart = (props) => {
  const [item, setItem] = useState({
    id: "",
    title: "",
    category: "",
    price: "",
    img: "",
    desc: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    data.push(item);
    console.log(data);
  };
  return (
    <Container>
      <Navbar />
      <Title>ADD ITEM</Title>
      <Form onSubmit={submitHandler}>
        <Input
          value={item.id}
          type="number"
          onChange={(e) => setItem({ ...item, id: e.target.value })}
          placeholder="Please enter item ID"
        />
        <Input
          value={item.title}
          type="text"
          onChange={(e) => setItem({ ...item, title: e.target.value })}
          placeholder="Please enter item title"
        />
        <Input
          value={item.price}
          type="number"
          onChange={(e) => setItem({ ...item, price: e.target.value })}
          placeholder="Please enter item price"
        />
        <Input
          value={item.img}
          type="text"
          onChange={(e) => setItem({ ...item, img: e.target.value })}
          placeholder="Please enter item image URL"
        />
        <Input
          value={item.desc}
          type="text"
          onChange={(e) => setItem({ ...item, desc: e.target.value })}
          placeholder="Please enter item's description"
        />

        <br />
        <Category>
          <Select
            id="category"
            onChange={(e) => setItem({ ...item, category: e.target.value })}
          >
            <Option value="">Please Select Category</Option>
            <Option value="China">China</Option>
            <Option value="Korea">Korea</Option>
            <Option value="Japan">Japan</Option>
          </Select>
        </Category>
        <Search type="submit">Add Item</Search>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    menuList: state.menuList,
  };
};

export default connect(mapStateToProps, { addItem })(Cart);
