import styled from "styled-components";
import mobile from "./Responsive";

export const Container = styled.div`
  width: 99%;
  display: flex;
  flex-wrap: wrap;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 33%;
  margin: 0 3px 10px 0;
  ${mobile({ width: "90%", padding: "10px" })};
`;
export const Image = styled.img`
  width: 30%;
  height: 175px;
  object-fit: cover;
  border: 0.25rem solid black;
  border-radius: 10px;
`;
export const Content = styled.div`
  position: relative;
  padding-left: 10px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid gray;
`;
export const Subtitle = styled.p``;
export const Price = styled.p``;
export const Desc = styled.div`
  padding-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  height: 50px;
  width: 644px;
  border-radius: 8px;
  font-size: 26px;
  ${mobile({ height: "40px", width: "65%", fontSize: "18px" })};
  :hover {
    background: rgba(100, 100, 100, 0.08);
  }
`;
export const Search = styled.button`
  background-color: #f6fcabce;
  height: 50px;
  width: 138px;
  border-radius: 8px;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    background-color: #9afc59ce;
  }
  ${mobile({ height: "40px", width: "20%", fontSize: "14px" })};
`;
export const Button = styled.button`
  position: absolute;
  top: 150px;
  left: 55px;
  background-color: #f6fcabce;
  border-radius: 20px;
  height: 26px;
  cursor: pointer;
  :hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    perspective: 1000px;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-2px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(2px, 0, 0);
    }
  }
`;
