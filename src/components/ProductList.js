import React, {useEffect, useState} from 'react';
import Product from "./Product";
import axios from "axios";

import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

import './ProductList.css';

const baseURL = "http://localhost:4444/getProducts";
const RUNDOO_PURPLE = "#535fcf"

const useStyles = makeStyles({
  customTextField: {
    width: 300,
    height: 50,
    '& input + fieldset': {
      borderColor: `${RUNDOO_PURPLE}`
    },
  },
});

const ProductList = (props) => {
  const classes = useStyles();

  const [filter, setFilter] = useState('');
  const [productList, setProductList] = useState([]);

  // upon refresh toggle
  useEffect(() => {
    handleGet();
  }, [props.refresh, filter]);
  // initial load
  useEffect(() => {
    handleGet();
  }, []);
  const handleGet = () => {
    axios
      .get(`${baseURL}?filter=${filter}`, {
      }).then(r => {
        setProductList(r.data);
    })
  };
  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={"container"}>
      <TextField
        id="outlined-basic"
        label="filter"
        variant="outlined"
        onChange={onFilterChange}
        InputProps={{
          className: classes.customTextField,
        }}
      />
      <div className={"productList-container"}>
        Product List:
        <div className={"productList"}>
        {
          productList && productList.map((p) => {
            return (
              <Product
                id={p.id}
                name={p.name}
                sku={p.sku}
                category={p.category}/>
            );
          })
        }
        </div>
      </div>
    </div>
  );
};
export default ProductList;