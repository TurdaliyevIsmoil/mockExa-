import React, { useEffect } from "react";
import Categories from "../components/Category/Categories";
import { useDispatch } from "react-redux";
import { fetchAction } from "../Store/fetch-slice";
import { fetchCategoryData } from "../Store/fetch-action";
import { useSelector } from "react-redux";

function CategoryPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.fetch.categories);
  useEffect(() => {
    console.log(categories);
    if (categories.length < 1) {
      dispatch(fetchCategoryData());
    }
  }, [dispatch]);
  return <Categories data={categories} />;
}

export default CategoryPage;
