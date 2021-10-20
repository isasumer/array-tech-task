import data from "../components/data";

const INITIAL_STATE = {
  categoryList: ["All", ...new Set(data.map((item) => item.category))],
  menuList: data,
  cart: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        menuList: [...state.menuList, action.payload],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        menuList: data.splice(action.payload, 1),
      };
    case "SEARCH":
      return {
        ...state,
        menuList: state.menuList.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "CATEGORY":
      if (action.payload === "All") {
        return {
          ...state,
          menuList: data,
        };
      } else {
        return {
          ...state,
          menuList: data.filter((item) => item.category === action.payload),
        };
      }
    default:
      return state;
  }
};
export default reducer;
