import React, {useState, useEffect} from 'react';
import axios from "axios";

import './CreateForm.css';

import {FormControl, InputLabel} from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const baseURL = "http://localhost:4444/createProduct";
const RUNDOO_PURPLE = "#535fcf"

const CreateForm = ( props ) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [valid, setValid] = useState(false);

  const handleChangeCategory = ( event ) => {
    setCategory(event.target.value);
  };

  const onNameChange = ( event ) => {
    setName(event.target.value);
  };
  const onSkuChange = ( event ) => {
    setSku(event.target.value);
  };
  useEffect(() => {
    validateForm()
  }, [category, name, sku]);
  const validateForm = () => {
    if (category.length > 0 && name.length > 0 && sku.length === 6) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  const handleSubmit = () => {
    axios
      .post(baseURL, {
        category: category,
        name: name,
        sku: sku,
      }).then(r => {
      props.setRefresh(!props.refresh);
    })
  };

  return (
    <div className={'form-container'}>
      <Box sx={{minWidth: 120}}>
        <FormControl
          fullWidth
        >
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChangeCategory}
          >
            {/* TODO get this from an API*/}
            <MenuItem value={"PAINT"}>PAINT</MenuItem>
            <MenuItem value={"HARDWARE"}>HARDWARE</MenuItem>
            <MenuItem value={"WOOD"}>WOOD</MenuItem>
          </Select>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={onNameChange}
          />
          <TextField
            id="outlined-basic"
            label="SKU"
            variant="outlined"
            onChange={onSkuChange}
            inputProps={{maxLength: 6}}
          />
          <Button style={{ backgroundColor: valid ? `${RUNDOO_PURPLE}` : 'red', color: 'white', padding: '10px', maxWidth: '100px', maxHeight: '100px', minWidth: '30px', minHeight: '30px'}}
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!valid}
                  onClick={handleSubmit}>
            CREATE
          </Button>
        </FormControl>
        {/* make this modular or delete */}
        <div className={'debugger'}>
          Real-time Debugger:
          <div className={'debugger-row'}>
            category: {category}
          </div>
          <div className={'debugger-row'}>
            name: {name}
          </div>
          <div className={'debugger-row'}>
            sku: {sku}
          </div>
          <div className={'debugger-row'}>
            validator: {valid ? "valid" : "not valid"}
          </div>
        </div>
      </Box>
    </div>
  );
};
export default CreateForm;
