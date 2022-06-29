import { fetchAction } from "./fetch-slice";

export const fetchCategoryData = () => {
  return async (dispatch) => {
    return await fetch("http://localhost:3001/api/category")
      .then((r) => r.json())
      .then((r) => dispatch(fetchAction.getCategories(r)))
      .catch((e) => console.log(e));
  };
};
export const fetchCategoryProducts = async (category, limit, offset) => {
  return await fetch(`http://localhost:3001/api/product?category=${category}&limit=${limit}&offset=${offset}`)
    .then((r) => r.json())
    .catch((e) => console.log(e));
};
export const fetchProduct = async (id) => {
  return await fetch(`http://localhost:3001/api/product/${id}`)
    .then((r) => r.json())
    .catch((e) => console.log(e));
};
export const searchProducts = async (name) => {
  return await fetch(`http://localhost:3001/api/product?name=${name}`)
    .then((r) => r.json())
    .catch((e) => console.log(e));
};
