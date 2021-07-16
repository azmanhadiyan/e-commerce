import React, { useState, useEffect} from "react";
import axios from "axios"
import { addCart } from "../Store/cart/actions";
import Cards from "./Cards";
import { useDispatch } from "react-redux";

const ListProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([])
  const [fetch, setFetch] = useState(true)

 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://auth-example1.herokuapp.com/products`
      );
      setProducts(
        result.data.map((el) => {
          const {
              _id,name,image,createdBy,description,price
          } = el;
          return {
              _id,name,image,createdBy,description,price
          };
        })
      );
    };
    if(fetch){
      fetchData()
      setFetch(false)
    }
  
  },[fetch])

  const handleOnClick = (product) => {
    dispatch(addCart(product));
  };
 

  return (
    <div>
          <Cards products={products} handleOnClick={handleOnClick} />
    </div>
  );
};
export default ListProducts;
