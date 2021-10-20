export const addChart = (item) => {
  return {
    type: "ADD_CHART",
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
