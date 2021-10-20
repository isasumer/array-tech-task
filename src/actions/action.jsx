export const addItem = (item) => {
  console.log(item);
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
export const deleteItem = (item) => {
  console.log(item);
  return {
    type: "DELETE_ITEM",
    payload: item,
  };
};
export const search = (word) => {
  return {
    type: "SEARCH",
    payload: word,
  };
};
export const categoryButton = (category) => {
  return {
    type: "CATEGORY",
    payload: category,
  };
};
