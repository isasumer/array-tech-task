import { categoryButton } from "../actions/action";
import styled from "styled-components";
import { connect } from "react-redux";
import mobile from "./Responsive";

const Wrapper = styled.div`
  margin-bottom: 5px;
`;
const Button = styled.button`
  background-color: #f6fcabce;
  cursor: pointer;
  width: 100px;
  height: 50px;
  margin: 5px;
  border-radius: 10px;
  :hover {
    background-color: #9afc59ce;
  }
  ${mobile({ width: "80px", height: "40px", margin: "3px" })}
`;

const Category = (props) => {
  return (
    <Wrapper>
      {props.categoryList.map((category) => (
        <Button key={category} onClick={() => props.categoryButton(category)}>
          {category}
        </Button>
      ))}
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    categoryList: state.categoryList,
  };
};
export default connect(mapStateToProps, { categoryButton })(Category);
